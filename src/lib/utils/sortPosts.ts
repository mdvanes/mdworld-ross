import type { MarkdownPost } from './fetchMarkdownPosts';

export const convertDMYToYMD = (dmy: string): string => {
  const [d, m, y] = dmy.split('-');
  return `${y}-${m}-${d}T00:00:00`;
};

const convertDMYToMs = (dmy: string): number => new Date(convertDMYToYMD(dmy)).getTime();

export const sortPostsAscending = (a: MarkdownPost, b: MarkdownPost) => {
  if (!a.meta.date) {
    return -1;
  }
  if (!b.meta.date) {
    return 1;
  }
  return convertDMYToMs(b.meta.date) - convertDMYToMs(a.meta.date);
};
