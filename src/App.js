// import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddPlayer from './components/AddPlayer'
import EditPlayer from './components/EditPlayer'
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/add">
            <AddPlayer/>
          </Route>
          <Route exact path="/edit/:id">
            <EditPlayer />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
