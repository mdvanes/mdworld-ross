import type { MarkdownPost } from '$lib/utils/fetchMarkdownPosts.js';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
  try {
    // NOTE it would be nicer to have this under /api/posts/[slug] but this breaks SSG on the build
    const response = await fetch(`/api/post/${params.slug}`);
    const slugWithTimestamp: MarkdownPost = await response.json();

    // NOTE if the .md file is renamed to not be prefixed with the timestamp, the md files will not be sorted in the dir
    const post: MarkdownPost = await import(`../../posts/${slugWithTimestamp}.md`);

    return {
      metadata: post.metadata,
      default: post.default
    };
  } catch (err) {
    throw error(404, 'post not found ¯\\_(ツ)_/¯');
  }
};
