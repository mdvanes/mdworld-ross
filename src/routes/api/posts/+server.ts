import { fetchMarkdownPosts } from '$lib/utils/fetchMarkdownPosts';
import { sortPostsAscending } from '$lib/utils/sortPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort(sortPostsAscending).map((post) => ({
    ...post,
    path: post.path?.slice(11)
  }));

  return json(sortedPosts);
};
