import { useParams } from 'react-router-dom';
// import { sanityService, urlFor } from '../services/sanityService';
import { useState, useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const postData = await sanityService.getPost(slug);
        setPost(postData);
      } catch (err) {
        setError('Post not found');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-500">Post not found</p>
          <a href="/#blog" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          {post.image && (
            <img
              src={urlFor(post.image).width(800).height(400).url()}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          )}
          
          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Metadata */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{sanityService.formatDate(post.publishedAt)}</span>
              {post.author && (
                <>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </>
              )}
              {post.categories && post.categories.length > 0 && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post.categories.join(', ')}</span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg text-gray-600 mb-6 italic">
                {post.excerpt}
              </p>
            )}

            {/* Body Content */}
            <div 
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            {/* Back Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a 
                href="/#blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Back to all posts
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;