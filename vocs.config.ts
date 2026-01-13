import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Terms of Service',
      link: '/terms-of-service',
    },
    {
      text: 'Privacy Policy',
      link: '/privacy-policy',
    },
    {
      text: 'Fees',
      link: '/fees',
    },
  ],
})
