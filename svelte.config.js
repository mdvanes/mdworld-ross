import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import preview, { htmlFormatter, textFormatter } from 'remark-preview';
import readingTime from 'remark-reading-time';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      remarkPlugins: [
        readingTime(),
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
      ]
    })
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    paths: {
      // TODO only set when deployed to test environment, see nextjs blog
      // Does not build anymore with base. Trying workaround with data-sveltekit-reload
      //   base: dev ? '' : '/mdworld-ross'
    }
  },

  extensions: ['.svelte', '.md']
};

export default config;
