import { fetchMarkdownPosts } from '$lib/utils/fetchMarkdownPosts';
import { json } from '@sveltejs/kit';

const convertDMYToYMD = (dmy: string): string => {
  const [d, m, y] = dmy.split('-');
  return `${y}-${m}-${d}T00:00:00`;
};

const convertDMYToMs = (dmy: string): number => new Date(convertDMYToYMD(dmy)).getTime();

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts
    .sort((a, b) => {
      if (!a.meta.date) {
        return -1;
      }
      if (!b.meta.date) {
        return 1;
      }
      return convertDMYToMs(b.meta.date) - convertDMYToMs(a.meta.date);
    })
    .map((post) => ({
      ...post,
      path: post.path?.slice(11)
    }));

  return json(sortedPosts);
};
