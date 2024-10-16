import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
	title: 'Mozgi',
	description: 'Created by N.A.O-2024',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
