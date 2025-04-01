import type { GetBooksResponse, GetChaptersResponse } from './types'

const BASE_URL = 'https://bible-api.com'

export const getBooks = async () => {
	const response = (await fetch(`${BASE_URL}/data/almeida`).then(res =>
		res.json()
	)) as GetBooksResponse

	return response.books
}

export const getChapters = async (bookId: string) => {
	const response = (await fetch(`${BASE_URL}/data/almeida/${bookId}`).then(
		res => res.json()
	)) as GetChaptersResponse

	return response.chapters
}

export const bible = {
	getBooks,
	getChapters,
}
