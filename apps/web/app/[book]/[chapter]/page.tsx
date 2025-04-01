type ChapterPageProps = {
	params: Promise<{
		chapter: string
	}>
}

export default async function ChapterPage({ params }: ChapterPageProps) {
	const { chapter } = await params

	return <div>{chapter}</div>
}
