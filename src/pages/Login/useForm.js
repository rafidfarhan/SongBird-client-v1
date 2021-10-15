import { useState} from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
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
      const {data} = await axios.post (`https://songbird-api-v1.herokuapp.com/api/v1/auth/login`,creds);
      console.log(data);
      setCredentialError();
    }
    catch(err){
      setCredentialError(err.response.data.error);
    }
    
}

  const handleSubmit = e => {
    e.preventDefault();
    loginReq(values);

    // if (!values.email) {
    //   errors.email = 'Enter your email';
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   setErrors({email:'Invalid email address'})
    // }
    // if (!values.password) {
    //   setErrors({password: 'Enter password'})
    // }
    // console.log(errors);
    // if (Object.keys(errors).length === 0) {
    //   loginReq(values);
    // }
  };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors]
  // );

  return { handleChange, handleSubmit, values, credentialError };
};

export default useForm;