import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ParsedTask } from '@/types/parsed-task';

type ResultsPanelProps = {
	tasks: Array<ParsedTask>;
	error: string;
};

export default function ResultsPanel({
	tasks,
	error,
}: ResultsPanelProps) {
	return (
		<section className='mx-auto w-full max-w-3xl px-4 pb-20 pt-6'>
			<h3 className='mb-4 text-sm font-medium text-foreground'>Parsed Tasks</h3>
			{error ? (
				<p className='rounded-3xl border border-destructive/40 bg-destructive/10 px-6 py-16 text-center text-sm font-medium text-destructive'>
					{error}
				</p>
			) : tasks.length === 0 ? (
				<p className='rounded-3xl border border-dashed border-border px-6 py-16 text-center text-sm text-muted-foreground'>
					There are no tasks
				</p>
			) : (
				<ul className='space-y-3'>
					{tasks.map((task) => (
						<li key={task.id}>
							<Card className='border border-border bg-card/80 shadow-[0_1px_0_0_color-mix(in_oklab,white_4%,transparent)_inset]'>
								<CardHeader className='flex flex-row items-start justify-between gap-4'>
									<CardTitle className='text-base text-foreground'>
										{task.title}
									</CardTitle>
								</CardHeader>
								<CardContent className='flex flex-wrap items-center gap-2 text-sm text-muted-foreground'>
									<p className='rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground'>
										{task.type}
									</p>
									{task.date && <p>{task.date}</p>}
									{task.time && <p>{task.time}</p>}
									<p className='rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary'>
										{task.priority}
									</p>
								</CardContent>
							</Card>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
