export interface MarkdownPost {
	meta: {
		title?: string;
		date?: string;
		category?: string;
	};
	content: any;
	path?: string;
}

export const fetchMarkdownPosts = async (): Promise<MarkdownPost[]> => {
	const allPostFiles = import.meta.glob('/src/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const x = (await resolver()) as { metadata: MarkdownPost['meta'], default: any };
			const postPath = path.slice(11, -3);
			console.log(x);

			return {
				meta: x.metadata,
				path: postPath,
				// TODO broken, because x.default is not serializable
				content: x.default,
			} as MarkdownPost;
		})
	);

	return allPosts;
};
