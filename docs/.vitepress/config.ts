import { defineConfig } from 'vitepress';
// Hotjar 脚本内容
const hotjarScriptContent: string = `(function (c, s, q, u, a) {
  c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
  c._hjSettings = { hjid: a, hjsv: 6 }; // hjsv 通常是 6
  let r = s.getElementsByTagName('head')[0];
  let e = s.createElement('script');
  e.async = true;
  e.src = q + c._hjSettings.hjid + u;
  if (r) {
      r.appendChild(e);
  } else {
      console.error('Hotjar: <head> element not found to append script.');
  }
})(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 6404108);`;

// Mouseflow 脚本内容
const mouseflowScriptContent: string = `window._mfq = window._mfq || [];
(function() {
  var mf = document.createElement("script");
  mf.type = "text/javascript"; mf.defer = true;
  mf.src = "//cdn.mouseflow.com/projects/6faca729-8b29-4171-8a70-ad6fe0224a99.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();`;

// Google Tag Manager - <script> 部分 (GTM-XXXXXXX を実際のIDに置き換えてください)
const gtmScriptContent: string = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPQVNJTZ');`; // GTM-XXXXXXX を置き換える

// Google Tag Manager - <noscript> 部分のコンテンツ (GTM-XXXXXXX を実際のIDに置き換えてください)
const gtmNoScriptContent: string = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPQVNJTZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`; // GTM-XXXXXXX を置き換える

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
      
    ],
    [
      'script',
      {}, // このスクリプト自体に特別な属性が不要な場合は空のオブジェクト
      // 提供されたJavaScriptコードをテンプレートリテラル（バッククォート）で囲んで文字列として記述
      // シングルクォートやダブルクォートが含まれていてもエスケープの必要はありません
      // hotjar
      hotjarScriptContent
    ],
    [
      'script',
      {}, // Mouseflow 脚本的空属性对象
      mouseflowScriptContent
    ],
    
    // Google Tag Manager - script part
    [
      'script',
      {},
      gtmScriptContent
    ],
    // Google Tag Manager - noscript part
    [
      'noscript', // タグ名を 'noscript' に
      {},       // 属性はなし
      gtmNoScriptContent // noscript の中身
    ]
  ],

  themeConfig: {
    nav: [
      { text: 'その他', link: '/example' },
      { text: 'コンテンツ', link: '/ヒートマップ分析の手順'},

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
          { text: 'コンテンツ', link: '/ヒートマップ分析の手順'},
          // ...
        ],
      },
    ],
  },
});
