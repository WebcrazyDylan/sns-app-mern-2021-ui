import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import { io } from "socket.io-client";

function App() {
  const { user } = useContext(AuthContext);
  // const socket = useRef();

  // useEffect(() => {
  //   if (user._id) {
  //     socket.current = io(process.env.REACT_APP_SOCKET_URL);
  //     socket.current.emit("addUser", user._id);
  //   }
  // }, [user._id]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/login" exact>
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register" exact>
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {user ? <Messenger /> : <Redirect to="/register" />}
        </Route>
        <Route path="/profile/:username" exact>
          {user ? <Profile /> : <Redirect to="/register" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
