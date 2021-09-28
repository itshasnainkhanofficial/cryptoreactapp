import { Exchanges, Homepage, News, CryptoCurrencies, CryptoDetails, Navbar, Footer } from './components';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptoCurrencies">
              <CryptoCurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  </div>
  );
}

export default App;
