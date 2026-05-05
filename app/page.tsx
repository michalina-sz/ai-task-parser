'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import ResultsPanel from '@/components/ResultsPanel';
import TaskInput from '@/components/TaskInput';
import { ParsedTask } from '@/types/parsed-task';

const mockedTasks: ParsedTask[] = [
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

export default function Home() {
	const [submittedText, setSubmittedText] = useState('');
	const [tasks, setTasks] = useState<ParsedTask[]>([]);

	const handleSubmit = (text: string) => {
		setSubmittedText(text);
		setTasks(mockedTasks);
	};

	return (
		<main className='min-h-screen bg-background text-foreground'>
			<Header />
			<TaskInput onSubmit={handleSubmit} />
			<ResultsPanel submittedText={submittedText} tasks={tasks} />
		</main>
	);
}
