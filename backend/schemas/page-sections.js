export default {
  name: 'pageElement',
  type: 'document',
  title: 'Page Element',
  fields: [
    {
      name: 'sectionName',
      type: 'string',
      title: 'Section Name',
    },
    {
      name: 'pageTitle',
      type: 'object',
      description: 'This is the page it goes own.',
      fields: [
        {
          title: 'Select Page',
          name: 'pageTitle1',
          type: 'reference',
          to: [{ type: 'pageType' }]
        }
      ]
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    }
  ]
}