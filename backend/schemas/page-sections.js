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