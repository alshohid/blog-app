import LatestBlogComponent from "@/Components/LatestBlogComponent";

 const HomePage = ()=>{
  return (
    <div className='container mx-auto'>
      <h1> Home page </h1>
      <div className="flex">
         <div className="flex-nome bg-red-500">
          <h1> Blog side section </h1>
         </div>
         <div className="flex-auto w-64 bg-green-300">
          <LatestBlogComponent/>
         </div>
         <div className="flex-none bg-slate-500">
          <h1>Right section in blog page</h1>
         </div>
      </div>
      
     
       
    </div>
  )
 }
 export default HomePage;