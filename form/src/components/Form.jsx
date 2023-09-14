import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <div>
      <h1>Form validation</h1>
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              {...register("firstName", { required: "Fill the form" })} // Use register with a name
            />
            <br />
          </div>
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              {...register("email")} // Use register with a name
            />
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              {...register("password")} // Use register with a name
            />
          </div>
          <button type="submit" className="bg-dark text-light">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
