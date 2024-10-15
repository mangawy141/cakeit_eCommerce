export default {
  name: 'on_sale',
  title: 'On Sale',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{type: 'product'}], // Reference to the product schema
    },
    {
      name: 'discount',
      title: 'Discount (%)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(100),
    },
    {
      name: 'sale_end_date',
      title: 'Sale End Date',
      type: 'datetime',
    },
    {
      name: 'banner_image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'custom_message',
      title: 'Custom Message',
      type: 'string',
      description: 'Optionally provide a custom message for the sale (e.g., Limited time offer!).',
    },
  ],
}
