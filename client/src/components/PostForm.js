import {useState} from 'react'
import {useNavigate} from 'react-router'

function PostForm() {
  const [posts, setPosts] = useState([])
  const [postFormData, setPostFormData] = useState({
    title: "",
    content: "",
    like_count: 0,
    dislike_count: 0,
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setPostFormData({...postFormData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(postFormData),
    };

    fetch("api/forum_posts", configObj).then((res) => {
      if(res.ok){
        res.json().then((post) => {
          setPosts([...posts, post])
          navigate("/forum_posts")
          window.location.reload(false)
        })
      } else {
        res.json().then(errors => {
          console.log(errors)
        })
      }
    })
    setPostFormData({
      title: "",
      content: "",
      like_count: 0,
      dislike_count: 0,
    })
    console.log(postFormData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label><br></br>
        <input type="text" id="title"  onChange={(e) => handleChange(e)} placeholder='Add a title' />
        <input type="text" id="content"  onChange={(e) => handleChange(e)} placeholder='Enter your message'/>
        <input type="submit" value="Submit Post"/>
      </form>
    </div>
  )
}

export default PostForm
