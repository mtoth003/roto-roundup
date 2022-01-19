import {useEffect} from 'react'

function Forum() {
  useEffect(() => {
    fetch("api/forum_posts")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Hello from forum</h1>
    </div>
  )
}

export default Forum
