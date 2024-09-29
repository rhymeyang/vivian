import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/vivian/',
  theme: defaultTheme({
    logo: '/vivian/images/logo.png',
    navbar: false,
    sidebar: {
      '/': [
        {
          text: 'Main Pages',
          children: [
            { text: "Vivian's Page", link: '/' },
          ],
        },
        {
          text: '基础信息',
          collapsable: true,
          children: [
            { text: "交易基础", link: '/Info/01_base.md' },
            { text: "ETF", link: '/Info/02_ETF.md' },
          ],
        },
        {
          text: '2024',
          collapsable: true,
          children: [
            { text: "0928", link: '/Daily/2004_09_28.md' },

          ],
        }
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Vivian's Page",
  description: 'Vivian',
})


