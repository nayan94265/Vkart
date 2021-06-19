import './App.css';
import { BrowserRouter as Router ,  Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header'
// import Banner from './Components/Home/Banner'
import Home from './Components/Home'
import Cart from './Components/Cart/Cart'
import TemplateProvider from './Templates/TemplateProvider.js'
import ContextProvider from './context/ContextProvider';
import DetailView from './Components/ItemDetails/DetailView'
function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
    <Router>
      <Header />
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route exact path= '/cart' component={Cart} />
            {/* <Route exact path= '/product/:id' component={Product} /> */}
            <Route exact path= '/product/:id' component={DetailView} />
            {/* <Route component={NotFound} />  */}
          </Switch>
      </Router>
      </ContextProvider>
      </TemplateProvider>
  );
}

export default App;
