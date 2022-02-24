import { useEffect, useState } from 'react'
import Post from './Post'

// import { Post } from '../../types/post'

// interface Props {
//   posts: [Post]
// }
const Posts = () => {
  const [postData, setPostData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPostData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!postData) return <p>No post</p>

  return (
    <div className="grid grid-cols-1 gap-3 py-2 sm:grid-cols-2 md:gap-6 md:py-6 lg:grid-cols-3">
      {postData.map((data, idx) => (
        <Post key={idx} data={data} />
      ))}
    </div>
  )
}

export default Posts
