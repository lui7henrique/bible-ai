import { Redis } from 'ioredis'

const redis = new Redis(process.env.REDIS_URL || '', {
	tls: {
		rejectUnauthorized: false,
	},
})

const DEFAULT_EXPIRATION = 60 * 60 * 24

export async function getCacheOrFetch<T>(
	key: string,
	fetchFn: () => Promise<T>,
	expiration = DEFAULT_EXPIRATION
): Promise<T> {
	try {
		const cachedData = await redis.get(key)

		if (cachedData) return JSON.parse(cachedData) as T

		const freshData = await fetchFn()
		await redis.set(key, JSON.stringify(freshData), 'EX', expiration)

		return freshData
	} catch (error) {
		return fetchFn()
	}
}
