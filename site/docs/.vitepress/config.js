/*
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-05 11:12:34
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-29 17:17:36
 */
export default {
  title: 'earnie',
  base: process.env.NODE_ENV === 'production' ? '/earnie/' : '/',
  themeConfig: {
    nav: [
      { text: '文档', link: '/guild/introduce' },
      { text: '组件', link: '/components/index' },
  ],
    sidebar: {
      '/': [
        {
          text: '引入',
          items: [
            {
              text: '介绍',
              link: '/guild/introduce'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        },
        {
          text: '开发',
          items: [
            {
              text: '目录结构',
              link: '/develop/'
            },
            {
              text: '组件开发',
              link: '/develop/component'
            },
            {
              text: '全局组件',
              link: '/develop/global'
            },

            {
              text: '打包发布',
              link: '/develop/build'
            }
          ]
        },
        {
          text: '组件',
          items: [
            {
              text: '第一个组件',
              link: '/components/index'
            },
            {
              text: '第二个组件',
              link: '/components/index'
            },
            {
              text: '第三个组件',
              link: '/components/index'
            },

            {
              text: '第四个组件',
              link: '/components/index'
            }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Niezihao/Earnie-ui' }]
  }
};
