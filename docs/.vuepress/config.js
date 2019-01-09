
module.exports = {
  title: 'Antizen 学习笔记',
  description: '生活是一种态度，逆境中，快速实现自我突破!',
  base: '/antizen-note/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'forwardfirst/antizen-note',
    docsRepo: 'forwardfirst/antizen-note',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: 'ffce0083d0830de5f562c045a481410b',
      indexName: 'antizen-note'
    },
    locales: {
      '/': {
        label: '中文',
        selectText: '选择语言',
        editLinkText: 'GitHub中编辑此页',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: '编程知识',
            link: '/program/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Essentials',
              collapsable: false,
              children: [
                '/guide/other/gitter.md',
                '/guide/other/release-notes.md'
              ]
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: [
                '/guide/other/gitter.md',
                '/guide/other/release-notes.md'
              ]
            },
            {
              title: 'Other',
              collapsable: false,
              children: [
                '/guide/other/gitter.md',
                '/guide/other/release-notes.md'
              ]
            }
          ],
          //'/donate/': ['/feature/script/svgo.md']
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'Antizen 学习笔记'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
}
