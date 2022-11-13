import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./components/topbar/topBar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Single from "./pages/single/single";
import Videos from "./pages/videos/videos";
// import Write from "./pages/write/write";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/footer/footer";
import { Context } from "./context/Context";
import ContactUs from './pages/contact-us/contact-us';
import Register from "./pages/register/register";
import Islam from './pages/Religion/islam';
import Religion from './pages/Religion/religion';
import Setting from "./pages/settings/setting";
import Write from "./pages/write/write";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Setting /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/religion">
          <Religion />
        </Route>
        <Route path="/islam">
          <Islam />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
