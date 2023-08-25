const postDetails = async(id)=>{
    let res= await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
    if(!res.ok){
        throw new Error("Post Details fetching  problem")
    }
    let data= await res.json()
    return data?.postDetails
}
export default postDetails;