import { useSuspenseQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { getChapters } from '../functions/get-chapters'
import type { GetBooksResponse } from '../services/types'

type BookChaptersProps = {
	book: GetBooksResponse['books'][number]
}

export function BookChapters({ book }: BookChaptersProps) {
	const { data } = useSuspenseQuery({
		queryKey: ['chapters', book.id],
		queryFn: () => getChapters(book.id),
	})

	return (
		<div className="grid grid-cols-9 gap-2 px-4">
			{data.map(({ chapter }) => (
				<Link
					key={chapter}
					className="bg-muted border rounded-sm flex aspect-square items-center justify-center"
					href={`/${book.id}/${chapter}`}
					prefetch={false}
				>
					<span>{chapter}</span>
				</Link>
			))}
		</div>
	)
}
