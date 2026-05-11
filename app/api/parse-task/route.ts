import OpenAI from 'openai';
import { zodTextFormat } from 'openai/helpers/zod';
import { z } from 'zod';

import type { ParsedTask } from '@/types/parsed-task';

const openai = new OpenAI();

const ParsedTaskSchema = z.object({
	id: z.string(),
	title: z.string(),
	type: z.enum(['task', 'event', 'reminder']),
	date: z.string().nullable(),
	time: z.string().nullable(),
	priority: z.enum(['low', 'medium', 'high']),
});

const ParsedTasksSchema = z.object({
	tasks: z.array(ParsedTaskSchema),
});

export async function POST(request: Request) {
	const body = await request.json();

	const text = body.text;

	if (!text || !text.trim()) {
		return Response.json({ error: 'Text is required' }, { status: 400 });
	}
	const today = new Date().toISOString().slice(0, 10);

	try {
		const aiResponse = await openai.responses.parse({
			model: 'gpt-4o-mini',
			input: [
				{
					role: 'system',
					content: `You extract structured tasks from messy user text. Return at most 5 tasks. Today is ${today}. Use this date to resolve relative dates like today, tomorrow, and this weekend.`,
				},
				{
					role: 'user',
					content: text,
				},
			],
			text: {
				format: zodTextFormat(ParsedTasksSchema, 'parsed_tasks'),
			},
		});

		const parsed = aiResponse.output_parsed;

		if (!parsed) {
			return Response.json(
				{
					error: 'Could not parse tasks',
				},
				{ status: 500 },
			);
		}

		const tasks: ParsedTask[] = parsed.tasks.map((task) => ({
			id: task.id,
			title: task.title,
			type: task.type,
			priority: task.priority,
			...(task.date ? { date: task.date } : {}),
			...(task.time ? { time: task.time } : {}),
		}));

		return Response.json({ tasks });
	} catch {
		return Response.json(
			{ error: 'Failed to parse tasks with AI' },
			{ status: 500 },
		);
	}
}
