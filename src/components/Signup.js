import React from "react";
import { useForm } from "react-hook-form";
// import { MDBInput } from "mdb-react-ui-kit";
import Multiselect from "multiselect-react-dropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export const Signup = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }
  return (
    <div className="container  sign_up_form_main shadow-md">
      <div className="row">
        <div className="col-md-6 p-0  form_det">
          <img
            src="https://shop.medall.in/shop/assets/hospital.jpg"
            alt="example"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6  p-0 m-0 form_main  shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>React Hook Form</h4>
            <label>Name</label>
            <input
              name="firstName"
              label="First Name"
              type="text"
              {...register("firstName")}
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>

            <label>Password</label>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>

            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
            <div className="form-group col">
              <label>Email</label>
              <input
                name="email"
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="d-flex justify-content-start align-items-left  mt-3 pt-2">
              <label htmlFor="male" className="mx-3">
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  name="gender"
                  value="Male"
                  className="form-check-input"
                  id="male"
                />{" "}
                Male
              </label>
              <label htmlFor="female">
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  name="gender"
                  value="Female"
                  className="form-check-input"
                  id="Female"
                />{" "}
                Female
              </label>
            </div>

            <label>Skills:</label>
            <Multiselect
              className="p-0 m-0"
              displayValue="key"
              onKeyPressFn={function noRefCheck() {}}
              onRemove={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              onSelect={function noRefCheck() {}}
              options={[
                {
                  cat: "Group 1",
                  key: "HTML",
                },
                {
                  cat: "Group 1",
                  key: "CSS",
                },
                {
                  cat: "Group 1",
                  key: "JAVASCRIPT",
                },
                {
                  cat: "Group 2",
                  key: "PHP",
                },
                {
                  cat: "Group 2",
                  key: "MYSQL",
                },
                {
                  cat: "Group 2",
                  key: "NODEJS",
                },
                {
                  cat: "Group 2",
                  key: "REACTJS",
                },
              ]}
              showCheckbox
            />
            <div>
              <label>IntrestOn:</label>
              <select className="form-control" {...register("Designation")}>
                <option value="React Js">React Js</option>
                <option value="Angular">Angular</option>
                <option value="Vue js">Vue js</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group form-check mt-1 pt-2">
              <input
                name="acceptTerms"
                type="checkbox"
                {...register("acceptTerms")}
                id="acceptTerms"
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="acceptTerms" className=" text-left">
                Accept Terms & Conditions
              </label>
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Register
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="btn btn-secondary mt-2"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
