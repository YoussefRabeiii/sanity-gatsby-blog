export default {
  widgets: [
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
                  buildHookId: '5e3c94c556f416017b1f3d30',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k4rv5t4p',
                  apiId: 'bf459e27-ddac-4d49-a08d-947e1f6a6c15'
                },
                {
                  buildHookId: '5e3c94c556f41601971f3d33',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k38q9jyf',
                  apiId: '6fa4aac9-53fc-4d8d-bdd5-5cd395fef680'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YoussefRabeii/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k38q9jyf.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
