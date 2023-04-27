interface MarkdownPost {
	meta: {
		date?: string;
		path?: string;
	};
}

export const fetchMarkdownPosts = async (): Promise<MarkdownPost[]> => {
	const allPostFiles = import.meta.glob('/src/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: MarkdownPost['meta'] };
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			} as MarkdownPost;
		})
	);

	return allPosts;
};
