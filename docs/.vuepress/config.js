import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/vivian/',
  theme: defaultTheme({
    logo: '/vivian/images/logo.png',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Recipe',
        link: 'https://rhymeyang.github.io/recipe/',
      },
      {
        text: 'English',
        link: 'https://rhymeyang.github.io/english-starter/',
      },
      {
        text: 'Semester 3',
        link: 'https://rhymeyang.github.io/Se/',
      }
    ],

    sidebar: {
      '/': [
        {
          text: '基础信息',
          collapsable: false,
          children: [
            { text: "交易基础", link: '/Info/01_base.md' },
            { text: "Canada", link: '/Info/01_base_ca.md' },
            { text: "美股常识", link: '/Info/05_Base_Points.md.md' },
            { text: "ETF", link: '/Info/01_ETFs.md' },
            { text: "康波周期", link: '/Info/02_circle.md' },
            { text: "Tools", link: '/Info/01_Tools.md' },
            { text: "资料查询", link: '/Info/02_info.md' },
            { text: "名人观点", link: '/Info/03_Points.md' },
            { text: "Andy观点", link: '/Info/04_A_Points.md' },

          ],
        },
        {
          text: 'Info',
          collapsable: false,
          children: [
            { text: "Bond", link: '/Stock/bond.md' },

          ],
        },
        {
          text: '指标',
          collapsable: false,
          children: [
            { text: "Trading View", link: '/Index/Trading.md' },

          ],
        },
        {
          text: '2024',
          collapsable: false,
          children: [
            { text: "08-09", link: '/Daily/2004_08.md' },
            { text: "0928", link: '/Daily/2024_09_28.md' },

          ],
        }
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Vivian's Page",
  description: 'Vivian',
})


