import { useState } from "react";

const useForm = (callback, initialState = {}, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleInput = (e) => {
    const value = e.target.name;
    setErrors({...errors, [value]: undefined});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(validate(values)).length === 0) {
      setValues(initialState);
      setErrors({});
      // Xử lý callback sau khi submit form
      callback(values);
    } else {
      setErrors(validate(values));
    }
  };

  return { values, errors, handleChange, handleInput, onSubmit };
};

export default useForm;
