export default {
  name: 'pageType',
  type: 'document',
  title: 'Page Type',
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
      description: 'This is used to idenity the page the content goes on',
    },
    {
      name: 'pageDescription',
      type: 'string',
      title: 'Description of the page',
      description: 'This can be used to help identify the page.',
    }
  ]
}