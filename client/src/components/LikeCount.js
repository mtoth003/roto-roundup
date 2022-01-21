import {useState, useEffect} from 'react'

function LikeCount({likeCount}) {
  const initialCount = () => Number(window.localStorage.getItem('count')) || 0
  const [count, setCount] = useState(initialCount)
 

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count])

  return (
    <div>
      <button onClick={decrementCount}>down vote</button>
      <p>votes: {count}</p>
      <button onClick={incrementCount}>Up vote</button>
    </div>
  )
}

export default LikeCount
