
module.exports = {
  title: 'Antizen 学习笔记',
  description: '生活是一种态度，逆境中，快速实现自我突破!',
  //base: '/antizen-note/',
  head: [
    ['link',{rel: 'icon',href: '/favicon.ico'}],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    //repo: 'forwardfirst/antizen-note',
    //docsRepo: 'forwardfirst/antizen-note',
    docsDir: 'docs',
    editLinks: false,
    sidebarDepth: 3,
    nav: [
      {text: '主页',link: '/'},
      {
        text: '编程知识',items:[
          { text: 'Java', link: '/guide/' },
          { text: 'Java', link: '/ios/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        { title: 'Essentials',collapsable: false,children: ['/guide/other/gitter.md','/guide/other/release-notes.md']},
        { title: 'Essentials',collapsable: false,children: ['/guide/other/gitter.md','/guide/other/release-notes.md']},
        { title: 'Essentials',collapsable: false,children: ['/guide/other/gitter.md','/guide/other/release-notes.md']},
        { title: 'Essentials',collapsable: false,children: ['/guide/other/gitter.md','/guide/other/release-notes.md']}
      ]
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
