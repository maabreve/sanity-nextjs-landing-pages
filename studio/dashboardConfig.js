export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9da494ce08d272c9dcd387',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-977tx9mg',
                  apiId: '6fdee297-f590-46eb-8a8a-239da914dc1b'
                },
                {
                  buildHookId: '5e9da4946d53d88016057dbc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2c7uoxg1',
                  apiId: '8b0bd049-2ebc-4ccc-a8bf-d767b4082f18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maabreve/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2c7uoxg1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
