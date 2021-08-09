import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPageLoader, toogleLoader } from './store/slices/rootSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function App() {
  const dispatch = useDispatch();
  const loader = useSelector(selectPageLoader);

  useEffect(() => {
    document.title = `Page loading ${loader}`;

    async function loadPage() {
      await timeout(3000)
      dispatch(toogleLoader(false))
      console.log(loader, 'gavna ty kysok');
      document.title = `Page loading ${loader}`;
    }

    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      {loader && <span>Loading...</span>}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
