import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'ja',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  head: [
    [
      'script',
      {
        src: 'https://js.ptengine.jp/6bk78i6l.js'
      }
    ]
  ],

  themeConfig: {
    nav: [
      { text: 'その他', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'その他', link: '/example' },
          // ...
        ],
      },
    ],
  },
});
