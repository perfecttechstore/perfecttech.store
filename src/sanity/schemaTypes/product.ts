export const product = {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    { name: 'name', title: 'Product Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'category', title: 'Category', type: 'string', 
      options: { list: ['School', 'Safety', 'Corporate', 'Gifts'] } 
    },
    { name: 'image', title: 'Product Image', type: 'image' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'moq', title: 'Minimum Order Quantity', type: 'number' },
  ]
}