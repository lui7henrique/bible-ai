'use server'

import { getCacheOrFetch } from '../services/redis'
import type { GetBooksResponse } from '../services/types'
import { BASE_URL } from './common'

export const getBooks = async () => {
	return getCacheOrFetch<GetBooksResponse['books']>('bible:books', async () => {
		const response = (await fetch(`${BASE_URL}/data/almeida`).then(res =>
			res.json()
		)) as GetBooksResponse

		return response.books
	})
}
