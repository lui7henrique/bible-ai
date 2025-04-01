import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Assistente bíblico',
	description: 'Assistente bíblico',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className='bg-background text-foreground max-w-3xl mx-auto p-4'>{children}</body>
		</html>
	)
}
