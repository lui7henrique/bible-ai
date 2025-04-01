'use client'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@repo/ui/components/Dialog'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@repo/ui/components/accordion'
import { usePathname } from 'next/navigation'
import type { GetBooksResponse } from '../services/types'
import { BookChapters } from './book-chapters'

type HeaderProps = {
	books: GetBooksResponse['books']
}

export function Header({ books }: HeaderProps) {
	const pathname = usePathname()
	const [book, chapter] = pathname.split('/').slice(1)
	const selectedBook = books.find(b => b.id === book) || books[0]

	return (
		<header className="flex items-center justify-between">
			<Dialog>
				<DialogTrigger>
					<div className="border rounded-sm px-2 py-1 cursor-pointer flex items-center gap-2">
						<span className="text-sm">
							{selectedBook?.name} {chapter}
						</span>
					</div>
				</DialogTrigger>

				<DialogContent className="max-h-[500px] overflow-y-auto px-0 ">
					<DialogHeader className="px-4">
						<DialogTitle>Selecione um livro</DialogTitle>
					</DialogHeader>

					<Accordion type="single" collapsible>
						{books.map(book => (
							<AccordionItem key={book.id} value={book.id}>
								<AccordionTrigger className="px-4 cursor-pointer">
									{book.name}
								</AccordionTrigger>

								<AccordionContent>
									<BookChapters book={book} />
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</DialogContent>
			</Dialog>
		</header>
	)
}
