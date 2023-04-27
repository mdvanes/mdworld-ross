export async function load({ params }) {
	// TODO add try/catch
    // TODO if the .md file is renamed to not be prefixed with the timestamp, the md files will not be sorted in the dir
	const post = await import(`../../posts/${params.slug}.md`);
	const { title, date, category } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		category
	};
}
