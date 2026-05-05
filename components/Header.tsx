export default function Header() {
	return (
		<header className='border-b border-border/70 px-4 py-4'>
			<div className='mx-auto flex max-w-5xl items-center gap-3'>
				<div className='flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_28px_color-mix(in_oklab,var(--primary)_45%,transparent)]'>
					<span className='size-2 rounded-full bg-primary-foreground' />
				</div>
				<p className='font-heading text-sm font-semibold tracking-normal text-foreground'>
					AI Task Parser
				</p>
			</div>
		</header>
	);
}
