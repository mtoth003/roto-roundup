import {useState} from 'react'
import {Link} from 'react-router-dom'

function LoginPage({setCurrentUser}) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    const configObg = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    }
    e.preventDefault();
    fetch("/login", configObg).then((r) => {
      if(r.ok){
        r.json().then((user) => {
          setCurrentUser(user)
        })
      } else {
        r.json().then((err) => {
          setErrors(err.errors)
        })
      }
    })
  }

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value
    })
  }
  return (
    <div className="page-container">
      <div className="form-container">
        <header className="signin-title">RotoRoundup</header>
        <form className="signin-register" onSubmit={handleSubmit}>
          <div className="field username">
            <div className="input-area">
              <input type="text" id="username" className="login-details" value={loginData.username} placeholder="Username" onChange={(e) => handleChange(e)} />
            </div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input type="password" id="password" className="login-details" value={loginData.password} placeholder="Password" onChange={(e) => handleChange(e)} />
            </div>
          </div>
            <input type="submit" className="submit" value="Sign in" />
        </form>
        <div className="link-text"> Need an account ? <Link className="reg-link" to="/signup">Sign up now</Link></div>
      </div>
    </div>
  )
}

export default LoginPage
