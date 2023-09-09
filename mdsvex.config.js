import preview, { htmlFormatter, textFormatter } from 'remark-preview';
import rehypeKatex from 'rehype-katex';
import katex from 'katex';
import { visit } from 'unist-util-visit';

// From https://github.com/pngwn/mdsvex-math/blob/main/mdsvex.config.js
const katexBlocks = () => (tree) => {
  visit(tree, 'code', (node) => {
    if (node.lang === 'math') {
      const str = katex.renderToString(node.value, {
        displayMode: true,
        leqno: false,
        fleqn: false,
        throwOnError: true,
        errorColor: '#cc0000',
        strict: 'warn',
        output: 'htmlAndMathml',
        trust: false,
        macros: { '\\f': '#1f(#2)' }
      });

      node.type = 'raw';
      node.value = '{@html `' + str + '`}';
    }
  });
};

export const mdsvexConfig = {
  extensions: ['.md'],
  remarkPlugins: [
    katexBlocks,
    // https://github.com/spences10/scottspence.com/blob/ac1fec4445aa5733fe3132aa7840c40d1f8c0ef0/mdsvex.config.js
    // readingTime(),
    preview(textFormatter({ length: 250, maxBlocks: 2 })),
    preview(
      htmlFormatter({
        length: 250,
        maxBlocks: 2
      }),
      {
        attribute: 'previewHtml'
      }
    )
  ],
  rehypePlugins: [rehypeKatex]
};
