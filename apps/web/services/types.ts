type Translation = {
	identifier: string
	name: string
	language: string
	language_code: string
	license: string
}

export type GetBooksResponse = {
	translation: Translation
	books: Array<{
		id: string
		name: string
		url: string
	}>
}

export type GetChaptersResponse = {
	translation: Translation
	chapters: Array<{
		book_id: string
		book: string
		chapter: number
		url: string
	}>
}
