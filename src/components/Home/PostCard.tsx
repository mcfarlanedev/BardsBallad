import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`
  console.log(post)
  return (
    <Link to={url} className="w-full rounded bg-purple-600">
      {post.feature_image && (
        <img
          src={post.feature_image}
          className="bg-contain bg-center w-full h-56 rounded-t"
        />
      )}
      <div className="p-3">
        <h2 className="text-white">{post.title}</h2>
        <p className="text-gray-300">{post.excerpt.substring(0, 140)}...</p>
      </div>
    </Link>
  )
}

export default PostCard
