import { useState} from 'react';
import axios from 'axios';

const useSignup = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState();
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
    signupReq(values);
  };

  const signupReq = async (values) =>{
    if (Object.keys(errors).length !== 0){
      try{
        const {data} = await axios.post(`https://songbird-api-v1.herokuapp.com/api/v1/auth/register`,{
          username: values.username,
          email: values.email,
          password: values.password
        });
        console.log(data);
        setApiError();
        setErrors({});
        setSignupSuccess(true);
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
      }
      
    }
    else{
      return
    }
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