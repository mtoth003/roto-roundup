import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function SignUpPage({setCurrentUser}) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }

    fetch("api/signup", configObj).then((r) => {
      if(r.ok){
        r.json().then((user) => {
          setCurrentUser(user);
          navigate("/")
        })
      } else {
        r.json().then((errors) => {
          console.log(errors)
        })
      }
    })
  }
  return (
    <div className="page-container">
      <div className="form-container">
        <header className="signin-title">RotoRoundup</header>
        <form className="signin-register" onSubmit={handleSubmit}>
          <div className="field firstName">
            <div className="input-area">
              <input type="text" id="first_name" value={formData.first_name} onChange={(e) => handleChange(e)} placeholder='Enter First Name' />
            </div>
          </div>
          <div className="field lastName">
            <div className="input-area">
              <input type="text" id="last_name" value={formData.last_name} onChange={(e) => handleChange(e)} placeholder='Enter Last Name' />
            </div>
          </div>
          <div className="field username">
            <div className="input-area">
              <input type="text" id="username" value={formData.username} onChange={(e) => handleChange(e)} placeholder="Enter Username" />
            </div>
          </div>
          <div className="field email">
            <div className="input-area">
              <input type="text" id="email" value={formData.email} onChange={(e) => handleChange(e)} placeholder="Enter Email" />
            </div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input type="password" id="password" value={formData.password} onChange={(e) => handleChange(e)} placeholder="Enter Password" />
            </div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input type="password" id="password_confirmation" value={formData.password_confirmation} onChange={(e) => handleChange(e)} placeholder="Confirm Password" />
            </div>
          </div>
            <input type="submit" className="submit" value="Sign up" />
          </form>
        <div className="link-text"> Already registered ? <Link className="reg-link" to="/">Sign in</Link> </div>
      </div>
    </div>
  )
}

export default SignUpPage
