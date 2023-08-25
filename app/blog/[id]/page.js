"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import postDetails from "@/lib/postDetails";

const PostDetails = ({params}) =>{
    const [singlePost,setSinglePost]= useState('')
    const {title={},content,img={}}=singlePost || {}
    const id= params.id;
      useEffect( ()=>{
        (async()=>{
           let singlePost = await postDetails(id)
           setSinglePost(singlePost)
        })()
      },[])
     
    return (
        <div>
            {
                singlePost ? (<div>
                  <div className="container mx-auto ">
      <div>
          
            
             <div >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    width={200}
                    height={200}
                    layout="responsive"
                    priority
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-600">{content}</p>
                  </div>
                </div>
              </div>
            
         
      </div>
    </div>
                </div>):(
                <div className="container h-screen mx-auto content-middle">
                  <h1 className='text-center text-3xl font-semibold text-red-600'>
                    There is no data found in database 
                  </h1>
                </div>)
            }
          
        </div>
    )
}
export default PostDetails;