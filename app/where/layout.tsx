import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Where?',
	description: 'Created by N.A.O-2024',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
