import { fetchMarkdownPosts, type MarkdownPost } from '$lib/utils/fetchMarkdownPosts.js';
import { convertDMYToYMD, sortPostsAscending } from '$lib/utils/sortPosts';

const siteURL = 'https://mdworld.nl';
const siteTitle = 'MDWorld';
const siteDescription = 'A webdevelopment blog';

export const prerender = true;

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort(sortPostsAscending);

  const body = render(sortedPosts);
  const options = {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml'
    }
  };

  return new Response(body, options);
};

const render = (posts: MarkdownPost[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">${siteURL}/${post.path?.slice(11)}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}/${post.path?.slice(11)}</link>
<description>${post.meta.title}</description>
<pubDate>${new Date(convertDMYToYMD(post.meta?.date ?? '')).toUTCString()}</pubDate>
</item>`
  )
  .join('')}
</channel>
</rss>
`;
