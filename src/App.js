import './App.scss';
import { BrowserRouter as Router} from 'react-router-dom'
import Routing from './Routing'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Routing />
        <Footer />
      </Router >
    </div>
  );
}

export default App;
