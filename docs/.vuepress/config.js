import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/vivian/',
  theme: defaultTheme({
    logo: '/images/leaf.svg',
    contributors: false,
    navbar: [
      {
        text: 'Vivian',
        link: '/../vivian/',
      },
      {
        text: 'Recipe',
        link: '/../recipe/',
      },
      {
        text: 'Tools',
        link: '/../tools/',
      },
      {
        text: 'English',
        link: '/../english-starter/',
      },
      {
        text: 'Semester 3',
        link: '/../Se/',
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
            { text: "美股常识", link: '/Info/05_Base_Points.md' },
            { text: "ETF", link: '/Info/01_ETFs.md' },
            { text: "康波周期", link: '/Info/02_circle.md' },
            { text: "Tools", link: '/Info/01_Tools.md' },
            { text: "资料查询", link: '/Info/02_info.md' },
            { text: "名人观点", link: '/Info/03_Points.md' },
            { text: "Andy观点", link: '/Info/04_A_Points.md' },

          ],
        },
        {
          text: '债券',
          collapsable: false,
          children: [
            { text: "Bond", link: '/Bond/bond.md' },
            { text: "ETF", link: '/Bond/sgov.md' },
          ],
        },
        {
          text: '指标',
          collapsable: false,
          children: [
            { text: "Trading View", link: '/Index/Trading.md' },
            { text: "RSI", link: '/Index/RSI.md' },
          ],
        },
        {
          text: '2024',
          collapsable: false,
          children: [
            { text: "0809", link: '/Daily/2024_08.md' },
            { text: "0928", link: '/Daily/2024_09_28.md' },

          ],
        },
        {
          text: '个股',
          collapsable: false,
          children: [
            { text: "黄金", link: '/Stock/gold.md' },
            { text: "白银", link: '/Stock/Sliver.md' },
          ],
        },
        {
          text: '加密货币',
          collapsable: false,
          children: [
            { text: "BTC", link: '/Coin/2024.md' },

          ],
        },
        {
          text: '房产',
          collapsable: false,
          children: [
            { text: "美国 2024", link: '/RealEstate/us_2024.md' },
            { text: "加拿大 2024", link: '/RealEstate/ca_2024.md' },
          ],
        },
        {
          text: '付鹏',
          collapsable: false,
          children: [
            { text: "HSBC 付鹏演讲", link: '/fp/20241124.md' },

          ],
        }
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Vivian's Page",
  description: 'Vivian',
})


