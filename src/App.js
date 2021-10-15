import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {useSelector} from "react-redux"; 

import Login from "./pages/Login/index.js"
import Home from './pages/Home'
import Signup from './pages/Signup'


const App = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <>
    
    <Router>
      <Switch>
      <Route path ='/' exact component = {userData.user? (Home):(Login)} ></Route>
      <Route path ='/signup' component =  {Signup}></Route>
      </Switch>
     
    </Router>
    </>
  );
}

export default App;
