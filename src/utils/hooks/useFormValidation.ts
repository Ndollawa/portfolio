import {
  useState,
  FormEvent,
  useEffect,
  FormEventHandler,
  ChangeEvent,
} from "react";
const useFormValidation = (initialState: any, validate?: any) => {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleInput: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "file" ? upload(e) : value,
    }));
  };

  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) {
      const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
      setPreviewImage(fileurl);
      // console.log(file[0]);
      return file[0];
    }
    return null;
  };

  return {
    formData,
    setFormData,
    formErrors,
    isFormValid,
    handleInput,
    previewImage,
    upload,
    setPreviewImage,
  };
};
export default useFormValidation;
