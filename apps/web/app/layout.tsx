import type { Metadata } from 'next'
import { Header } from '../components/header'
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
			<body>
				<div className="max-w-3xl mx-auto p-4">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
