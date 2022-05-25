import React from "react";
import isEmpty from "validator/lib/isEmpty";
import axios from "axios";
import GetLayout from "../../helpers/getLayout";
// Component Import
import ControlText from "../../app/app-controls/app-control-input/ControlText";
import ControlButton from "../../app/app-controls/app-control-button/ControlButton";
// Hook Import
import { useRouter } from "next/router";
import { useState } from "react";
import useForm from "../../helpers/useForm";

const Login = () => {
  // Hook
  const router = useRouter();
  const [error, setError] = useState("");
  // Handle Validate Form
  const validate = (values) => {
    let errorsMsg = {};
    if (isEmpty(values.username)) {
      errorsMsg.username = "Please enter your Email";
    }
    if (isEmpty(values.password)) {
      errorsMsg.password = "Please enter your Password";
    }

    return errorsMsg;
  };
  const handleSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/login", data)
      .then((res) => {
        if (res.status === 200) {
          router.push("/admin");
        }
      })
      .catch((err) => {
        setError(err);
      });
  };
  const { values, errors, handleChange, onSubmit } = useForm(
    handleSubmit,
    {
      username: "",
      password: "",
    },
    validate
  );
  return (
    <div className="admin-login">
      <div className="admin-login-wrapper">
        {error && (
          <span className="admin-login-message">Wrong Credentials!</span>
        )}
        <h1>Admin Dashboard</h1>
        <form
          id="admin-login-form"
          className="admin-login-form"
          onSubmit={onSubmit}
        >
          <ControlText
            placeholder={"username"}
            name={"username"}
            onChange={handleChange}
            value={values.username}
          />
          <span>{errors?.username}</span>
          <ControlText
            placeholder={"password"}
            name={"password"}
            type={"password"}
            onChange={handleChange}
            value={values.password}
          />
          <span>{errors?.password}</span>
          <ControlButton className={"btn-teal"}>Sign In</ControlButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
GetLayout(Login);
