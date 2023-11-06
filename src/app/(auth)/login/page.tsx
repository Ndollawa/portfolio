"use client";
import useSWRMutation from "swr/mutation";
import { BsInfoCircleFill } from "react-icons/bs";
import { PulseLoader } from "react-spinners";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { loginUser, loginURI } from "@/utils/libs/auth";
import SocialAuth from "@/components/auth/SocialAuth";

const Login = () => {
  const initialState = {
    user: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialState,
  });
  const {
    trigger,
    isMutating,
    error: formError,
  } = useSWRMutation(loginURI, loginUser);
  const HandleLogin = (data: FieldValues) => {};
  return (
    <div className="auth">
      <div className="auth__box">
        <span className="borderline"></span>
        <form onSubmit={handleSubmit(HandleLogin)} className="form" action="">
          <h2>Login</h2>
          <div className="form__group">
            <div className="input__box">
              <input
                type="text"
                aria-invalid={errors.user ? true : false}
                {...register("user", {
                  required: "Username or email is required.",
                })}
              />
              <label htmlFor="">Username</label>
              <i
                className={`${
                  errors.user ? "border-2 border-solid border-red-600" : false
                }`}
              ></i>{" "}
              {errors.user && (
                <span className="fs-11 text-red-600">
                  <BsInfoCircleFill size={"0.8rem"} />
                  &ensp;
                  {errors.user.message}
                </span>
              )}{" "}
            </div>
            <div className="input__box">
              <input
                type="text"
                aria-invalid={errors.password ? true : false}
                {...register("password", {
                  required: "Password is required.",
                })}
              />
              <label htmlFor="">Password</label>
              <i
                className={`${
                  errors.password
                    ? "border-2 border-solid border-red-600"
                    : false
                }`}
              ></i>{" "}
              {errors.password && (
                <span className="fs-11 text-red-600">
                  <BsInfoCircleFill size={"0.8rem"} />
                  &ensp;
                  {errors.password.message}
                </span>
              )}{" "}
            </div>
          </div>
          <div className="form__links">
            <a href="forgot-password">Forgot Password</a>
            <a href="/register">Register</a>
          </div>
          <button type="submit" className="">
            Login
          </button>
          <SocialAuth />
        </form>
      </div>
    </div>
  );
};

export default Login;
