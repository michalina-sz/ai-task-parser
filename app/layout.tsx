import type { Metadata } from 'next';
import { Montserrat, Space_Grotesk } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
	variable: '--font-app-sans',
	subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
	variable: '--font-app-heading',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'AI Task Parser',
	description: 'A small MVP that turns natural language into structured tasks.',
	icons: {
		icon: '/icon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${montserrat.variable} ${spaceGrotesk.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	);
}
