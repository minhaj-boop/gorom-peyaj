import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';
import Breakfasts from './Pages/Home/Breakfasts/Breakfasts';
import Dinners from './Pages/Home/Dinners/Dinners';
import Home from './Pages/Home/Home/Home';
import Lunches from './Pages/Home/Lunches/Lunches';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/NotFound/PageNotFound';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/breakfasts">
            <Breakfasts></Breakfasts>
          </Route>

          <Route path="/lunches">
            <Lunches></Lunches>
          </Route>

          <Route path="/dinners">
            <Dinners></Dinners>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <Signup></Signup>
          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
