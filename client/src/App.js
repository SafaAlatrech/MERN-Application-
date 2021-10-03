
import "./App.css";
import ContactList from "./components/contactList";
import { Button } from "semantic-ui-react";
import { Route, Switch, Link } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <h1> ALATRECH SAFA MERN APP</h1>
      <Link to="/add">
        <Button inverted color="teal">
          ADD
        </Button>
      </Link>
      <Link to="/">
        <Button inverted color="blue">
          Contact List
        </Button>
      </Link>

      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
