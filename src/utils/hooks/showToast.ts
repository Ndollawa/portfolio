import { toast, ToastOptions } from "react-toastify";

// import { store } from '../../stores/store';
import "react-toastify/dist/ReactToastify.css";
const version: string = "dark";
// const version = store.getState().settingsConfig.dashboardConfig.layoutOptions.version
//    console.log(version)
const showToast = (type: any, message: any, options: ToastOptions = {}) => {
  message = message.toString();

  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme:
      version === "light" ? "light" : version === "dark" ? "dark" : "colored",
    ...options,
  });
};
export default showToast;
