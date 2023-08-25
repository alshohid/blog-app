"use client"
import LatestBlogComponent from "@/Components/LatestBlogComponent";
 
const BlogPage =()=>{
    
    return (
        <div className='container mx-auto'>
      
      <div className="flex">
        <div>

     
           <section className="flex py-16 mt-4  shadow-sm bg-white w-[300px] black">
      <div className="container mx-auto flex items-center ">
        <div className="w-2/3 mx-auto ">
          <h1 className="text-xl  font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg md:text-xl mb-6">
            Explore a world of knowledge, inspiration, and creativity through our articles.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Read Articles
          </button>
        </div>
         
      </div>
    </section>
       </div>

         <div className="flex-auto w-auto items-center justify-center bg-slate-50">
          <div className="mt-2 p-10">
              <LatestBlogComponent/>
          </div>
        
         </div>
         <div className="flex-none w-[200px] mt-4  bg-white">
          <h1 className='text-2xl font-bold text-blue-900 text-center '> Blog</h1>
          <div> 
            <h1 className="text-xl text-blue-900 font-bold text-center">Important Links </h1>
            <ul className='text-center'>
              <li className="border bg-slate-300 p-2">
                Tour of India 
              </li>
               <li  className="border bg-slate-200 p-2">
                Tour of India 
              </li>
               <li  className="border bg-slate-300  p-2">
                Tour of India 
              </li>
               <li  className="border bg-slate-200 p-2">
                Tour of India 
              </li>
               <li  className="border p-2 bg-slate-300">
                Tour of India 
              </li>
               <li  className="border p-2 bg-slate-200">
                Tour of India 
              </li>
            </ul>
          </div>
            
           <div>
            
            
             </div>
         
         </div>
      </div>
      
     
       
    </div>

    )
}
export default BlogPage;