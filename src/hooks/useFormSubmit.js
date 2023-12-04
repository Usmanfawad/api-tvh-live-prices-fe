import { useState } from 'react';
import axios from 'axios';


import formValidate from '../helpers/formValidate';

const useFormSubmit = (initialFormData, apiEndpoint) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const formValidateValue = formValidate(formData);
        console.log(formValidateValue);
        const response = await axios.post(apiEndpoint, formData);
        setResponse(response.data);
      
    } catch (error) {
        setError(error);
    } finally {
        setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    error,
    response,
    handleChange,
    handleSubmit,
  };
};

export default useFormSubmit