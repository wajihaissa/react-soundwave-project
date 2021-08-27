import './App.css';

import Home from './componenents/home/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Joinus from './componenents/JoinUs/Joinus';
import Discover from './componenents/discover/Discover';
import Footer from './componenents/footer/Footer';
import NavigationBar from './componenents/NavigationBar/NavigationBar';
import More from './componenents/More/More';
import {useState} from "react"
import Charts from './componenents/Charts/Charts';

function App() {
 
   return (
    <BrowserRouter>
    <div className="App">
      <NavigationBar/>
      <Switch>
      <Route  exact path="/" component={Home}/>
      <Route path="/JoinUS" component={Joinus}/>
      <Route path="/Discover" component={Discover}/>
      <Route path="/More" component={More}/>
      <Route path="/charts" component={Charts}/>
      
      




      </Switch>
      
      <Footer/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;

