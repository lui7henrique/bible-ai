import { bible } from '../services/bible-api'
import type { GetBooksResponse } from '../services/types'

type BookChaptersProps = {
	book: GetBooksResponse['books'][number]
}

export async function BookChapters({ book }: BookChaptersProps) {
	const chapters = await bible.getChapters(book.id)

	return (
		<div className="grid grid-cols-9 gap-2 px-4">
			{chapters.map(chapter => (
				<div
					key={chapter.chapter}
					className="bg-muted border rounded-sm flex aspect-square items-center justify-center"
				>
					<span>{chapter.chapter}</span>
				</div>
			))}
		</div>
	)
}
