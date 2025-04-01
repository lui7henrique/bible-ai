import type { Metadata } from 'next'
import { AppProvider } from '../components/app-provider'
import { Header } from '../components/header'
import { getBooks } from '../functions/get-books'
import './globals.css'

export const metadata: Metadata = {
	title: 'Assistente bíblico',
	description: 'Assistente bíblico',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const books = await getBooks()

	return (
		<html lang="pt-BR">
			<body>
				<AppProvider>
					<div className="max-w-xl mx-auto p-4">
						<Header books={books} />
						{children}
					</div>
				</AppProvider>
			</body>
		</html>
	)
}
