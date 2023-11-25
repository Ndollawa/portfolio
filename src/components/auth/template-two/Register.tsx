"use client";
import { useRef } from "react";
import useSWRMutation from "swr/mutation";
import { BsInfoCircleFill } from "react-icons/bs";
import { PulseLoader } from "react-spinners";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { loginUser, loginURI } from "@/utils/libs/auth";
import SocialAuth from "../SocialAuth";
import Image from "next/image";
import { GiKey } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { FaKeycdn } from "react-icons/fa";

const Register = () => {
  const showPasswordRef = useRef(false);
  const showCPasswordRef = useRef(false);
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
    <>
      <div className="template-two">
        <div className="auth">
          <div className="auth__box">
            <div className="auth__box--intro">
              <div className="auth__box--intro__content">
                <h1 className="">Welcome back</h1>
                <p className="">
                  to Innoscripta AG Aggregator App! Discover cutting-edge
                  startups, connect with industry experts, stay informed with
                  the latest trends, personalize your feed, collaborate with
                  like-minded individuals, and innovate with confidence. Join us
                  in shaping the future and unlocking limitless possibilities
                  for transformative innovation.
                </p>
              </div>
            </div>
            <div className="auth__box--form">
              <div className="auth__box--form__card">
                <div className="logo">
                  <Image
                    src={`https://media.licdn.com/dms/image/C4D0BAQFbfUNKW2A-9Q/company-logo_200_200/0/1669909775579?e=1697673600&v=beta&t=TNyliwOuwNxQAfrDSOWtoavNoYIOsbATzST85YpJ_-U`}
                    alt={"logo"}
                    width={90}
                    height={10}
                    priority={true}
                  />
                  <h3 className="">Login </h3>
                </div>
                <form onSubmit={handleSubmit(HandleLogin)}>
                  <div className="form">
                    <div className="form__input">
                      <label
                        htmlFor="email"
                        className="block m-0 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                          <FiMail fontSize="1rem" />
                        </span>
                        <input
                          type="text"
                          className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#368299]-500  focus:outline-none focus:border-[#368299]-400"
                          placeholder="hello@example.com"
                          autoComplete="off"
                          id="email"
                          aria-invalid={errors.user ? true : false}
                          {...register("email", {
                            required: "Email is required.",
                          })}
                        />
                      </div>
                      {errors.email && (
                        <div
                          className="flex p-4 mb-4 text-xs mt-2 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          <svg
                            className="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Danger</span>
                          <div>
                            <span className="font-medium">
                              Ensure that these requirements are met:
                            </span>
                            <ul className="mt-1.5 ml-4 list-disc list-inside">
                              <li>
                                At least 10 characters (and up to 100
                                characters)
                              </li>
                              <li>
                                Must begin with letter followed by @ and a
                                provider. eg. youremail@provider.com
                              </li>
                              <li>Mustnend with a domain</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="form__input">
                      <label
                        htmlFor="password"
                        className="block m-0 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <div className="flex relative">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                          <GiKey fontSize="1rem" />
                        </span>
                        <input
                          type={showPasswordRef.current ? `text` : "password"}
                          placeholder="Password"
                          id="password"
                          aria-invalid={errors.password ? true : false}
                          {...register("password", {
                            required: "Password is required.",
                          })}
                        />
                        <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                          <svg
                            onClick={() => (showPasswordRef.current = false)}
                            className={`${
                              !showPasswordRef.current ? "hidden" : "show"
                            } h-4 text-[#368299]-700`}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                            ></path>
                          </svg>

                          <svg
                            onClick={() => (showPasswordRef.current = true)}
                            className={`${
                              showPasswordRef.current ? "hidden" : "show"
                            } h-4 text-[#368299]-700`}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                          >
                            <path
                              fill="currentColor"
                              d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      {errors.password && (
                        <div
                          className="flex p-4 mb-4 text-xs mt-2 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          <svg
                            className="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Error</span>
                          <div>
                            <span className="font-medium">
                              Ensure that these requirements are met:
                            </span>
                            <ul className="mt-1.5 ml-4 list-disc list-inside">
                              <li>
                                At least 8 characters (and up to 24 characters)
                              </li>
                              <li>
                                Must include uppercase and lowercase letters
                              </li>
                              <li>
                                Must include at least one special character,
                                e.g.,- % $ ! @ # ?
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="form__input">
                      <label
                        htmlFor="confirm-password"
                        className="block m-0 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm Password
                      </label>
                      <div className="flex relative">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                          <FaKeycdn fontSize="1rem" />
                        </span>
                        <input
                          type={showCPasswordRef.current ? `text` : "password"}
                          placeholder="Confirm password"
                          aria-invalid={errors.password ? true : false}
                          {...register("confirmPassword", {
                            required: "Password confirmation is required.",
                          })}
                          id="confirm-password"
                        />
                        <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                          <svg
                            onClick={() => showCPasswordRef.currentd(false)}
                            className={`${
                              !showCPasswordRef ? "hidden" : "show"
                            } h-4 text-[#368299]-700`}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                            ></path>
                          </svg>

                          <svg
                            onClick={() => (showCPasswordRef.current = true)}
                            className={`${
                              showCPasswordRef.current ? "hidden" : "show"
                            } h-4 text-[#368299]-700`}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                          >
                            <path
                              fill="currentColor"
                              d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      {errors.confirmPassword && (
                        <div
                          className="flex items-center p-2 mt-2 mb-4 text-xs text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                          role="alert"
                        >
                          <svg
                            className="flex-shrink-0 inline w-4 h-4 mr-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div>
                            <span className="font-medium">Error!</span>{" "}
                            Passwords do not match.
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="form-row flex content-between">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input text-[#358097] hover:text-purple"
                              id="basic_checkbox_1"
                              title="Trust this Device?"
                              //   onChange={toggleCheck}
                              //   checked={check}
                            />
                            &ensp;
                            <label
                              className="form-check-label text-xs"
                              htmlFor="basic_checkbox_1"
                            >
                              Trust this Device?
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs ml-auto">
                        <a
                          href="#"
                          className="text-purple-700 hover:text-purple-600"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-sm my-3">
                        <span className="text-nowrap flex justify-center items-center ">
                          {isMutating ? (
                            <>
                              Logging In{" "}
                              <PulseLoader
                                className="pt-1"
                                loading={isMutating}
                                color={"#ffffff"}
                                size={"0.4rem"}
                              />
                            </>
                          ) : (
                            "Login"
                          )}
                        </span>
                      </button>
                    </div>

                    <p className="text-gray-500 text-sm">
                      Don&apos;'t have an account?{" "}
                      <a
                        href="/register"
                        className="text-sm text-purple-700 hover:text-purple-700"
                      >
                        Register
                      </a>
                    </p>
                    <div className="flex justify-center gap-5 w-full ">
                      <SocialAuth />
                    </div>
                  </div>
                </form>
                <div className="mt-7 text-center text-gray-300 text-xs">
                  <span>
                    Copyright © {new Date().getFullYear()}&ensp;
                    <a
                      href="https://github.com/Ndollawa"
                      rel=""
                      target="_blank"
                      title="Codepen aji"
                      className="text-purple-500 hover:text-purple-600 "
                    >
                      {" "}
                      Ndubusisi
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <footer className="auth__footer">
            <div className="container p-5 mx-auto  d-flex items-center justify-contents-space-between ">
              <div className="d-flex mr-auto">
                <a
                  href="https://github.com/Ndollawa"
                  target="_blank"
                  title="Ollawa Ndubuisi github"
                  className="text-center text-gray-700 focus:outline-none"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/60238828?v=4"
                    alt="Ollawa Ndubuisi"
                  />
                  <p>
                    Ollawa <strong>Ndubuisi</strong>
                  </p>{" "}
                </a>
              </div>
            </div>
          </footer>

          <svg
            className="auth__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Register;
