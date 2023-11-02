import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import Footer from './components/Footer';
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/support" component={Footer} />
    </Switch>
  </Router>
);

export default App;
