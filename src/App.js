import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {useSelector} from "react-redux"; 

import Login from "./pages/Login/index.js"
import Main from './components/Main'
import Signup from './pages/Signup'
import ForgotPass from './pages/ForgotPass'


const App = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <>
    
    <Router>
      <Switch>
      <Route path ='/' exact component = {userData.user? (Main):(Login)} ></Route>
      <Route path ='/signup' component =  {Signup}></Route>
      <Route path ='/forgotpassword' component =  {ForgotPass}></Route>
      </Switch>
     
    </Router>
    </>
  );
}

export default App;
