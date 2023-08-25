const postCategoryByList = async(id)=>{
    let res= await fetch(`https://basic-blog.teamrabbil.com/api/post-list/${id}`)
    if(!res.ok){
        throw new Error("PostCategory by list fetching problem ")
    }
    let data = await res.json()
    return  data;
}
export default postCategoryByList;