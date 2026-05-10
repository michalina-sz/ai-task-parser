'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

type TaskInputProps = {
	onSubmit: (text: string) => void;
	isLoading: boolean;
};

export default function TaskInput({ onSubmit, isLoading }: TaskInputProps) {
	const [input, setInput] = useState('');

	const handleSubmit = () => {
		if (!input.trim()) return;

		onSubmit(input.trim());
		setInput('');
	};
	return (
		<>
			<section className='px-4 pb-8 pt-14 text-center'>
				<h1 className='font-heading mx-auto mb-6 max-w-2xl text-4xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl'>
					Turn messy thoughts into{' '}
					<span className='text-primary'>clear actions.</span>
				</h1>
				<p className='mx-auto max-w-2xl text-base leading-7 text-muted-foreground'>
					AI Task Parser reads your brain dump and organizes it into
					prioritized, scheduled tasks — so you can stop sorting and start
					doing.
				</p>
			</section>
			<section className='flex justify-center px-4 py-6'>
				<div className='w-full max-w-3xl space-y-4 rounded-3xl border border-border bg-card p-4 shadow-[0_1px_0_0_color-mix(in_oklab,white_4%,transparent)_inset,0_12px_40px_-12px_oklch(0_0_0_/_0.5)]'>
					<Textarea
						placeholder='Write your thoughts...'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						disabled={isLoading}
						className='min-h-56 resize-none border-0 bg-transparent px-1 py-2 text-base text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-0'
					/>
					{isLoading && (
						<p className='text-sm text-muted-foreground'>
							Organizing your thoughts...
						</p>
					)}
					<div className='flex justify-end'>
						<Button
							onClick={handleSubmit}
							disabled={isLoading || !input.trim()}
							className='h-10 rounded-xl bg-primary px-5 font-semibold text-primary-foreground shadow-[0_8px_32px_-8px_color-mix(in_oklab,var(--primary)_35%,transparent)] hover:bg-primary/90'>
							{isLoading ? 'Organizing...' : 'Organize Tasks'}
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
