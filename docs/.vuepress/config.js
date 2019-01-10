
module.exports = {
  title: 'Antizen 学习笔记',
  description: '生活是一种态度，逆境中，快速实现自我突破!',
  base: '/antizen-note/',
  head: [
    ['link',{rel: 'icon',href: '/favicon.ico'}],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    repo: 'forwardfirst/antizen-note',
    docsRepo: 'forwardfirst/antizen-note',
    docsDir: 'docs',
    editLinks: false,
    sidebarDepth: 3,
    nav: [
      {text: '主页',link: '/'},
      {
        text: '编程知识',items:[
          { text: 'Python', link: '/note/program/python/' },
          { text: 'Java', link: '/java/' }
        ]
      }
    ],
    sidebar: {
      '/note/program/python/': [
        { title: 'Python基础',collapsable: false,children: ['/note/program/python/basic/','/note/program/python/basic/rumen.md','/note/program/python/basic/third-lib.md']},
        { title: '爬虫学习',collapsable: false,children: ['/guide/other/gitter.md','/guide/other/release-notes.md']},
        { title: '大数据',collapsable: false,children: ['/guide/other/gitter.md','/guide/other/release-notes.md']},
        { title: 'AI人工智能',collapsable: false,children: ['/guide/other/gitter.md','/guide/other/release-notes.md']}
      ],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  lastUpdated: 'Last Updated'
}
