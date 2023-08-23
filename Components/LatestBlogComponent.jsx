'use client'
import Image from 'next/image'
import newestPost from '@/lib/newestPost'
import React, { useEffect, useState } from 'react'

const LatestBlogComponent = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    ;(async () => {
      let post = await newestPost()
      setPosts(post)
    })()
  }, [])
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={post.img}
                alt={post.title}
                width={200}
                height={200}
                layout="responsive"
                priority
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.short}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LatestBlogComponent
