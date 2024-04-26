import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const allusernames = [];
  const navigate = useNavigate();
  const initialValues = { username: "", code: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmitJoin = (e) => {
    e.preventDefault();
    setFormErrors(validateJoin(formValues));
  };

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    setFormErrors(validateCreate(formValues));
  };

  const validateCreate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      allusernames.concat("ahmad");
      console.log(allusernames);
      localStorage.removeItem("code");
      if (localStorage.getItem("username") === null) {
        localStorage.setItem("username", [formValues.username]);
      }
      let current = localStorage.getItem("username");
      console.log(current);
      // current.append("check");
      // localStorage.setItem("username", current);
      navigate("/lobby");
    }
    return errors;
  };

  const validateJoin = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.code) {
      errors.code = "Code is required";
    } else if (values.code.length !== 6) {
      errors.code = "Code must be equal to 6 characters";
    }
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("code", formValues.code);
      if (localStorage.getItem("username") === null) {
        localStorage.setItem("username", [formValues.username]);
      }
      navigate("/lobby");
    }
    return errors;
  };

  return (
    <div className="App">
      <h1>MeloMatch</h1>
      <div>
        <form>
          <div>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div>
              <label>Code</label>
              <input
                type="text"
                name="code"
                placeholder="Code"
                value={formValues.code}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.code}</p>
            <button onClick={handleSubmitJoin}> Join Game</button>
            <button onClick={handleSubmitCreate}>Create Game</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WelcomePage;
