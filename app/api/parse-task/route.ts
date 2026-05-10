import type { ParsedTask } from '@/types/parsed-task';

export async function POST(request: Request) {
	const body = await request.json();

	const text = body.text;

	if (!text || !text.trim()) {
		return Response.json({ error: 'Text is required' }, { status: 400 });
	}

	const tasks: ParsedTask[] = [
		{
			id: '1',
			title: 'Clean the house',
			type: 'task',
			date: '2027-02-01',
			time: '12:20',
			priority: 'medium',
		},
		{
			id: '2',
			title: 'Call a doctor',
			type: 'reminder',
			date: '2027-02-01',
			priority: 'high',
		},
		{
			id: '3',
			title: 'Read a book',
			type: 'task',
			priority: 'low',
		},
	];

	return Response.json({ tasks });
}
