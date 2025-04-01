'use server'

import { getCacheOrFetch } from '../services/redis'
import type { GetChaptersResponse } from '../services/types'
import { BASE_URL } from './common'

export const getChapters = async (bookId: string) => {
	return getCacheOrFetch<GetChaptersResponse['chapters']>(
		`bible:chapters:${bookId}`,
		async () => {
			const response = (await fetch(`${BASE_URL}/data/almeida/${bookId}`).then(
				res => res.json()
			)) as GetChaptersResponse

			return response.chapters
		}
	)
}
