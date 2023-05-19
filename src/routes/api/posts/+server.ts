import { fetchMarkdownPosts, type MarkdownPost } from '$lib/utils/fetchMarkdownPosts';
import { sortPostsAscending } from '$lib/utils/sortPosts';
import { json } from '@sveltejs/kit';
import retroPosts from './retro-posts.json';

const typedRetroPosts: Array<{ title: string; date: string; category: string; path: string }> =
  retroPosts;

const mappedRetroPosts: MarkdownPost[] = typedRetroPosts.map(
  (post): MarkdownPost => ({
    metadata: {
      title: post.title,
      date: post.date,
      sanitizedPreviewHtml: 'This is an old post, you will be redirected to a mirror of the old site.',
      category: post.category
    },
    path: post.path
  })
);

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = [
    ...allPosts.map((post) => ({
      ...post,
      path: post.path?.slice(11)
    })),
    ...mappedRetroPosts
  ].sort(sortPostsAscending);

  return json(sortedPosts);
};
