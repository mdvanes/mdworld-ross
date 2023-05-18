import sanitizeHtml from 'sanitize-html';

interface RawMarkdownPost {
  metadata: {
    title?: string;
    date?: string;
    category?: string;
    readingTime: {
      text: string;
      minutes: number;
      time: number;
      words: number;
    };
    preview?: string;
    previewHtml?: string;
    cover?: string;
  };
  path?: string;
  default?: ConstructorOfATypedSvelteComponent | null | undefined;
}

export interface MarkdownPost extends Omit<RawMarkdownPost, 'metadata'> {
  metadata: Omit<RawMarkdownPost['metadata'], 'previewHtml'> & { sanitizedPreviewHtml: string };
}

export const fetchMarkdownPosts = async (): Promise<MarkdownPost[]> => {
  const allPostFiles = import.meta.glob('/src/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = (await resolver()) as { metadata: RawMarkdownPost['metadata'] };
      const postPath = path.slice(11, -3);

      const { previewHtml, ...otherMetadata } = metadata;

      return {
        metadata: {
          ...otherMetadata,
          sanitizedPreviewHtml: previewHtml ? sanitizeHtml(previewHtml) : ''
        },
        path: postPath
      };
    })
  );

  return allPosts;
};
