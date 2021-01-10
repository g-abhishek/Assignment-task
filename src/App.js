import logo from './logo.svg';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import MainComponent from './components/MainComponent';
import { createBrowserHistory } from 'history'

import Header from './components/Header.js'
import Filter from './components/Filter'
import ResultSection from './components/ResultSection.js'
import Pagination from './components/Pagination.js'
import Footer from './components/Footer.js'
import LoginPage from './components/Login/LoginPage';

const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <div className="App">        
          {/* <Header />
          <Filter /> */}

          <Router history={history}>
            <Switch>

              <Route path="/login" render={(props) => <LoginPage {...props} />} />
            <Route path="/" render={(props) => <MainComponent {...props} />} />
            
            {localStorage.getItem('tokn') ? <Redirect to="/" /> :<Redirect to="/login" />}

              
              {/* <Route path="/login">
                <LoginPage />
              </Route>

              <Route path="/">
                <MainComponent />
              </Route> */}
              
            </Switch>
          </Router>
          
          {/* <Pagination />
          <Footer /> */}
      </div>
    </Provider>
  );
}

export default App;
