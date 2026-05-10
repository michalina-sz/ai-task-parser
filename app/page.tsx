'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import ResultsPanel from '@/components/ResultsPanel';
import TaskInput from '@/components/TaskInput';
import { ParsedTask } from '@/types/parsed-task';

export default function Home() {
	const [submittedText, setSubmittedText] = useState('');
	const [tasks, setTasks] = useState<ParsedTask[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (text: string) => {
		setIsLoading(true);
		setError('');
		setSubmittedText(text);

		try {
			const response = await fetch('/api/parse-task', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ text }),
			});

			const data = await response.json();

			if (!response.ok) {
				setTasks([]);
				setError(data.error || 'Something went wrong');
				return;
			}
			setTasks(data.tasks);
		} catch {
			setTasks([]);
			setError('Something went wrong');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className='min-h-screen bg-background text-foreground'>
			<Header />
			<TaskInput onSubmit={handleSubmit} isLoading={isLoading} />
			<ResultsPanel submittedText={submittedText} tasks={tasks} error={error} />
		</main>
	);
}
