import { useEffect,useState} from 'react';
import axios from 'axios';
import {api_base_url} from './constants'

const useSignup = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
  };
  useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            signupReq(values);
            console.log(Object.keys(errors).length);
          }
        },
        [errors,values,isSubmitting]
      );


  const signupReq = async (values) =>{
    
    // if (Object.keys(errors).length === 0){
      try{
        const {data} = await axios.post(`${api_base_url}/auth/register`,{
          username: values.username,
          email: values.email,
          password: values.password
        });
        console.log(data);
        setApiError();
        setSignupSuccess(true);
        setIsSubmitting(false);
      }
      catch(err){
       
        if (err.response){
          if(err.response.data.error === 'Duplicate field value entered.'){
            setApiError('An account with this email already exists. Try again.');
          }
          else{
            setApiError(err.response.data.error);
          }
        }
        else{
          setApiError('Server Error.');
        }
        setSignupSuccess(false);
        setIsSubmitting(false);
      }
      
    // }
    // else{
    //   return
    // }
}
//   useEffect(
//     () => {
//       if (Object.keys(errors).length === 0 && isSubmitting) {
//         callback();
//       }
//     },
//     [errors]
//   );

  return { handleChange, handleSubmit, values, errors, apiError, signupSuccess};
};

export default useSignup;