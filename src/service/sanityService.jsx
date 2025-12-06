import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'blogproduction',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

// Image URL builder for Sanity images
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const sanityService = {
  // Get all published blog posts
  getPosts: async () => {
    try {
      const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
        _id,
        title,
        slug,
        excerpt,
        body,
        publishedAt,
        "image": mainImage.asset->,
        "author": author->name,
        "categories": categories[]->title
      }`;
      
      const posts = await client.fetch(query);
      return posts;
    } catch (error) {
      console.error('Error fetching posts from Sanity:', error);
      return [];
    }
  },

  // Get single post by slug
  getPost: async (slug) => {
    try {
      const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        excerpt,
        body,
        publishedAt,
        "image": mainImage.asset->,
        "author": author->name,
        "categories": categories[]->title
      }`;
      
      const post = await client.fetch(query, { slug });
      return post;
    } catch (error) {
      console.error('Error fetching post from Sanity:', error);
      return null;
    }
  },

  // Format date
  formatDate: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
};

export default client;