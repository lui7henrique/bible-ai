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
import { bible } from '../services/bible-api'
import { BookChapters } from './book-chapters'

export async function Header() {
	const books = await bible.getBooks()

	return (
		<header className="flex items-center justify-between">
			<Dialog>
				<DialogTrigger>
					<div className="border rounded-sm px-2 py-1 cursor-pointer flex items-center gap-2">
						<span className="text-sm">Gênesis</span>

						<div className="text-xs border-l pl-2 h-full flex">1</div>
					</div>
				</DialogTrigger>

				<DialogContent className="max-h-[500px] overflow-y-auto px-0">
					<DialogHeader className="px-4">
						<DialogTitle>Selecione um livro</DialogTitle>
					</DialogHeader>

					<Accordion type="single" collapsible>
						{books.map(book => (
							<AccordionItem key={book.id} value={book.id}>
								<AccordionTrigger className="px-4">
									{book.name}
								</AccordionTrigger>

								<AccordionContent>
									{book.id === 'GEN' && <BookChapters book={book} />}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</DialogContent>
			</Dialog>
		</header>
	)
}
