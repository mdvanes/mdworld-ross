import { fetchMarkdownPosts } from '$lib/utils/fetchMarkdownPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		if (!a.meta.date) {
			return -1;
		}
		if (!b.meta.date) {
			return 1;
		}
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});

	return json(sortedPosts);
};
