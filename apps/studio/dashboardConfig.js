export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'NicolaLisci/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '6191198d79018c851a8bfe58',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-y61gnrkn',
                  apiId: 'aa51bab6-7d88-4136-bb83-9ce66c9077b7'
                },
                {
                  buildHookId: '6191198da48bb692375b6dc0',
                  title: 'Website',
                  name: 'sanity-angular-website-web-66vxxdf2',
                  apiId: '76dafa7c-d2c5-4fab-aa09-96650d1ec721'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NicolaLisci/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-66vxxdf2.netlify.app', category: 'apps'}
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
