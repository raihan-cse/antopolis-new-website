import './App.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Routing from './Routing'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import Notfound from './components/pages/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
            <Footer />
          </Route>
          <Route path='*'>
            <Notfound />
          </Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
