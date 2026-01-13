import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interstate Docs',
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/interstate-labs'
    },
    {
      icon: 'telegram',
      link: 'https://t.me/+-i4dP7U2BggxMzAx'
    },
  ],
  sidebar: [
    {
      text: 'Intro',
      link: '/intro',
    },
    {
      text: 'Benefits and Risks',
      link: '/benefits-and-risks',
    },
    {
      text: 'For Validators',
      items: [
        {
          text: 'Quickstart',
          link: '/validator/quickstart',
        },
        {
          text: 'Optionally Run Your Own RPC',
          link: '/validator/long-form-setup',
        },
        {
          text: 'How To Run Signer',
          link: '/validator/how-to-run-signer',
        },
        {
          text: 'Validator Registration For Slashing Insurance',
          link: '/validator/slashing_insurance_registration'
        }
      ]
    },
    {
      text: 'For Users',
      items: [
        {
          text: 'Quickstart',
          link: '/user/quickstart',
        },
        {
          text: 'API Specification',
          link: '/user/api-specification',
        },
        {
          text: 'Insurance',
          link: '/user/insurance',
        }
      ]
    }
  ],
})
