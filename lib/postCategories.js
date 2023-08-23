const postCategories = async () => {
  let res = await fetch('https://basic-blog.teamrabbil.com/api/post-categories')
  if (!res.ok) {
    throw new Error('PostCategories  fetching problem')
  }
  let data = await res.json()
  return data
}
export default postCategories
