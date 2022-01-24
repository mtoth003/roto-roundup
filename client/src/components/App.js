import {BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState} from "react"
import Home from "../pages/Home";
import LoggedOutLanding from '../pages/LoggedOutLanding';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [websites, setWebsites] = useState([])
  const [forumPosts, setForumPosts] = useState([])

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  useEffect(() => {
    fetch("/websites")
      .then((resp) => resp.json())
      .then(data => setWebsites(data));
  }, []);

  useEffect(() => {
    fetch("/forum_posts")
      .then((res) => res.json())
      .then(data => setForumPosts(data))
  }, [])

  if(!authenticated){
    return <div></div>
  }
  
  return (
      <div className="App">
        <Router>
          {currentUser ? (
            <Home
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
              websites={websites}
              forumPosts={forumPosts}
            />
          ) : (
            <LoggedOutLanding setCurrentUser={setCurrentUser} />
          )}
        </Router>
      </div>
  );
}

export default App;
