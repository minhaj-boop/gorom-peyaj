import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch></Switch>
      </Router>
      <Banner></Banner>
    </div>
  );
}

export default App;
