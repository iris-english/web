import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Practice from "./components/pages/Practice";
import Contact from "./components/pages/Contact";
import Grammar from "./components/pages/Grammar";
import Vocabulary from "./components/pages/Vocabulary";
import Reading from "./components/pages/Reading";
import Listening from "./components/pages/Listening";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/practice" component={Practice} />
        <Route path="/contact-and-about-us" component={Contact} />
        <Route path="/grammar" component={Grammar} />'
        <Route path="/vocabulary" component={Vocabulary} />
        <Route path="/reading" component={Reading} />
        <Route path="/listening" component={Listening} />
      </Switch>
    </Router>
  );
}

export default App;
