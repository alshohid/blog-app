'use client'
import Image from 'next/image'
import newestPost from '@/lib/newestPost'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const LatestBlogComponent = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    ;(async () => {
      let post = await newestPost()

      setPosts(post)
    })()
  }, [])
  return (
    <div className="container mx-auto ">
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-3">
        {posts?.map((post, index) => {
          return (
            <Link key={index.toString()} href={`/blog/${post.id}`}>
              <div>
                <div className="bg-white shadow-lg hover:ring-2 rounded-lg overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={200}
                    height={150}
                    layout="responsive"
                    priority
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600">{post.short}</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default LatestBlogComponent
