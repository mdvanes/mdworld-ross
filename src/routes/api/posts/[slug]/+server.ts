import { fetchMarkdownPosts } from '$lib/utils/fetchMarkdownPosts';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (request) => {
	const allPosts = await fetchMarkdownPosts();

	const matchedPost = allPosts.find((post) => post.path?.slice(11) === request.params.slug);

	return json(matchedPost?.path);
};
