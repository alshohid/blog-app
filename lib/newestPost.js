 const  newestPost =async()=>{
    let res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest')
  if (!res.ok) {
    throw new Error(' newest post  fetching problem')
  }
  let data = await res.json()
  return data
 }
 export default newestPost;