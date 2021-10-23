import { useEffect,useState} from 'react';
import axios from 'axios';
import {useSelector,useDispatch} from "react-redux"; 
import {setToken,setUser } from '../redux/actions';
import setAxiosHeaders from '../utils/setAxiosHeaders';
import {api_base_url} from './constants'

const useLogin = () => {

  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch(); 

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [credentialError, setCredentialError] = useState();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const loginReq = async (creds) =>{
    try{
      const {data} = await axios.post (`${api_base_url}/auth/login`,creds);
      console.log(data);
      setCredentialError();
      dispatch(setToken(data.token));
    }
    catch(err){
      setCredentialError(err.response.data.error);
    }
    
}
const fetchUser = async (token) =>{
  if(token){
    try{
      setAxiosHeaders(token)
      const {data} = await axios.get (`${api_base_url}/auth/me`);
      //window.history.pushState({},null,"/home")
      console.log(data);
      dispatch(setUser(data.data));
    }
    catch(err){
      setCredentialError(err.response.data.error);
      console.log(err.response.data.error);
    }
  }
  else{
    return
  }
  
  
}

  const handleSubmit = e => {
    e.preventDefault();
    loginReq(values);
  };

    useEffect(()=>{
      fetchUser(userData.token);
   },[userData.token])
   

  return { handleChange, handleSubmit, values, credentialError };
};

export default useLogin;