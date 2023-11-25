"use client";
import { memo, useState, KeyboardEvent, FormEvent, ChangeEvent } from "react";
import { Header } from "@/components/dashboard/common";
import { Editor } from "@tinymce/tinymce-react";
import { IoMdPricetags, IoIosClose } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { config, tinymceOptions } from "@/utils/config/config";
import Image from "next/image";
import { PostInterface } from "@/interfaces/post.interface";
import { PulseLoader } from "react-spinners";
import {
  useForm,
  Controller,
  useFieldArray,
  FieldValues,
} from "react-hook-form";
import { showToast } from "@/utils/hooks";
import {
  fetcher,
  toTitleCase,
  splitTags,
  objectToJSON,
} from "@/utils/functions";
import { projectURI, createProject } from "@/utils/libs/projects";
import { categoryURI } from "@/utils/libs/categories";

const CreateProject = () => {
  const [tagName, setTagName] = useState("");

  const [previewImage, setPreviewImage] = useState("");
  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) {
      const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
      setPreviewImage(fileurl);
      // console.log(file[0]);
      setValue("image", file[0] as any);
    }
  };
  const initialState: PostInterface = {
    title: "",
    description: "",
    body: "",
    status: "",
    category: "",
    tags: [],
    image: null,
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

  const [success, setSuccess] = useState(false);

  const {
    trigger,
    isMutating,
    error: formError,
  } = useSWRMutation(postURI, createProject);

  const {
    data: categories,
    error: getCategoriesError,
    isLoading,
  } = useSWR(categoryURI, fetcher);

  const createTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTagName(e.target.value);
  };

  const addTag = (
    e: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      if (tagName !== "") {
        const ptags = getValues("tags");
        setValue("tags", [
          ...new Set([...(ptags as string[]), ...splitTags(tagName)]),
        ]);
        setTagName("");
      }
    }
  };

  const removeTag = (key: string) => {
    const ptags = getValues("tags") as string[];
    setValue(
      "tags",
      ptags.filter((tag) => tag.toLowerCase() !== key.toLowerCase())
    );
    setTagName("");
  };

  const formSubmit = async (data: FieldValues) => {
    const bodyContent = new FormData();
    for (const key in data) {
      bodyContent.append(
        key,
        /*formData[key] instanceof Array
          ? JSON.stringify(formData[key])
          :*/ data[key]
      );
    }
    await trigger(bodyContent as any);
    // if (formError) return console.log(formError);
    showToast("sucess", "Yup it works");
    reset();
    setPreviewImage("");
  };
  return (
    <div className="page">
      <Header title="Post > Create New Post" />
      <div className="w-100 py-5 ">
        <form
          className="form color-white center p-8 r-5"
          onSubmit={handleSubmit(formSubmit)} //
        >
          <div className="">
            <div className="row gutter-2">
              <div className="mb-3 md:col-9">
                <label className="form-label" htmlFor="title">
                  Title or Heading
                </label>
                <input
                  type="text"
                  className={`form-control input-md  r-2  py-2 px-4 ${
                    errors.title
                      ? "border-2 border-solid border-red-600"
                      : false
                  }`}
                  placeholder="Enter post title"
                  id="title"
                  aria-invalid={errors.title ? true : false}
                  {...register("title", {
                    required: "Post title is required.",
                    minLength: {
                      value: 3,
                      message: "Title must be have at least 3 characters",
                    },
                    maxLength: {
                      value: 500,
                      message: "Title must be less than 500 characters",
                    },
                  })}
                />
                {errors.title && (
                  <span className="fs-11 text-red-600">
                    <BsInfoCircleFill size={"0.8rem"} />
                    &ensp;
                    {errors.title.message}
                  </span>
                )}{" "}
              </div>
              <div className="mb-3 md:col-3">
                <label className="form-label" htmlFor="status">
                  Status
                </label>
                <select
                  id="status"
                  className={`form-control input-md  r-2  py-2 px-4 wide ${
                    errors.title
                      ? "border-2 border-solid border-red-600"
                      : false
                  }`}
                  aria-invalid={errors.status ? true : false}
                  {...register("status", {
                    required: "Post Status is required.",
                  })}
                >
                  <option value="">Select ...</option>
                  <option value="published">Publish</option>
                  <option value="draft">Draft</option>
                </select>{" "}
                {errors.status && (
                  <span className="fs-11 text-red-600">
                    <BsInfoCircleFill size={"0.8rem"} />
                    &ensp;
                    {errors.status.message}
                  </span>
                )}{" "}
              </div>
              <div className="mb-3 md:col-8">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <input
                  type="text"
                  className={`form-control input-md  r-2  py-2 px-4 ${
                    errors.title
                      ? "border-2 border-solid border-red-600"
                      : false
                  }`}
                  placeholder="Enter post description"
                  id="description"
                  aria-invalid={errors.description ? true : false}
                  {...register("description", {
                    required: "Post description is required.",
                    minLength: {
                      value: 60,
                      message: "Title must be have at least 3 characters",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Title must be less than 500 characters",
                    },
                  })}
                />
                {errors.description && (
                  <span className="fs-11 text-red-600">
                    <BsInfoCircleFill size={"0.8rem"} />
                    &ensp;
                    {errors.description.message}
                  </span>
                )}{" "}
              </div>
              <div className="mb-3 md:col-4">
                <label className="form-label" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  className={`form-control input-md  r-2  py-2 px-4 ${
                    errors.title
                      ? "border-2 border-solid border-red-600"
                      : false
                  }`}
                  aria-invalid={errors.category ? true : false}
                  {...register("category", {
                    required: "Post category is required.",
                  })}
                >
                  <option value="">Select ...</option>
                  {categories?.map((c: any, i: number) => (
                    <option value={c._id} key={i}>
                      {c.title}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className="fs-11 text-red-600">
                    {" "}
                    <BsInfoCircleFill size={"0.8rem"} />
                    &ensp;
                    {errors.category.message}
                  </span>
                )}{" "}
              </div>
              <div className="col-12 my-4">
                <label
                  htmlFor="postTag"
                  className="block text-sm  form-label text-gray"
                >
                  Post Tags<span className="required"> * </span>
                </label>
                <div className="mt-1 d-flex gap-y-4 color-light r-2 shadow-sm ai-stretch overflow-hidden h-100">
                  <span className="d-flex w-10 ai-center jc-center r-tl-2 r-bl-2 border px-3 text-xl ">
                    <IoMdPricetags fontSize={"1.5rem"} />{" "}
                  </span>
                  <div className="mt-1 shadow-sm p-1 border-2 border-secondary r-2 d-flex flex-wrap align-ai-center m-0 w-100">
                    {watch("tags")?.map((tagName: string, i: number) => {
                      return (
                        <div
                          className="py-1 pl-2 pr-1 fs-12 border border-secondary r-2 d-flex align-ai-center color-dark text-white mx-1"
                          key={i}
                        >
                          <span>{tagName}</span>
                          <IoIosClose
                            className="fs-sm ml-1.5"
                            onClick={(e) => removeTag(tagName)}
                          />
                        </div>
                      );
                    })}
                    <input
                      className="d-flex font-16 outline-none border-0 w-100 form-control input-md r-2 py-2 px-4"
                      type="text"
                      placeholder="Add post tags"
                      id="postTag"
                      value={tagName}
                      onKeyDown={addTag}
                      onChange={createTag}
                      aria-invalid={errors.tags ? true : false}
                    />
                    {errors.tags && (
                      <span className="fs-11 text-red-600">
                        <BsInfoCircleFill size={"0.8rem"} />
                        &ensp;
                        {errors.tags.message}
                      </span>
                    )}{" "}
                  </div>
                </div>
              </div>
              <div className="row col-12 gutter-x-4 mt-3">
                <div className="md:col-6">
                  <div className="d-flex ai-center jc-center w-full">
                    <label
                      htmlFor="image"
                      className="form-label d-flex flex-column  p-5 ai-center jc-center w-full h-64 border-2 border-gray-300 border-dashed r-2 cursor-pointer"
                    >
                      <div className="d-flex flex-column  ai-center jc-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          aria-d-none="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>
                          <br />
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <Controller
                        control={control}
                        name={"image"}
                        rules={{
                          required: "Post cover image is required.",
                        }}
                        render={({ field: { value, onChange, ...field } }) => {
                          return (
                            <input
                              id="image"
                              type="file"
                              className="d-none"
                              accept=".png, .jpg, .jpeg,image/*"
                              // value={(value as any)?.fileName as string}
                              onChange={upload}
                              aria-invalid={errors.image ? true : false}
                            />
                          );
                        }}
                      />
                      {errors.image && (
                        <span className="fs-11 text-red-600">
                          <BsInfoCircleFill size={"0.8rem"} />
                          &ensp;
                          {errors.image.message}
                        </span>
                      )}{" "}
                    </label>
                  </div>
                </div>
                <div className="md:col-6">
                  Preview
                  <div id="preview">
                    {previewImage && (
                      <Image
                        className="img-responsive"
                        src={previewImage}
                        alt="post cover image"
                        width={650}
                        height={350}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="body">
                  Response
                </label>
                <Controller
                  control={control}
                  name={"body"}
                  rules={{
                    required: "Post content is required.",
                  }}
                  render={({ field: { value, onChange, ...field } }) => {
                    return (
                      <Editor
                        tinymceScriptSrc={"/tinymce/tinymce.min.js"}
                        onEditorChange={(newValue, editor) =>
                          setValue("body", newValue)
                        }
                        id="body"
                        value={value}
                        init={tinymceOptions}
                      />
                    );
                  }}
                />
                {errors.body && (
                  <span className="fs-11 text-red-600">
                    <BsInfoCircleFill size={"0.8rem"} />
                    &ensp;{errors.body.message}
                  </span>
                )}
              </div>
            </div>{" "}
            <div className="d-flex ai-center jc-end w-full py-4 px-10">
              <button
                type="button"
                className="btn bg-gray-300 shadow-md mr-5 r-3"
                name=" "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn d-flex ai-center jc-center bg-purple-800 text-white shadow-md r-3 mr-5"
                name=" "
                disabled={isMutating || isSubmitting}
              >
                {isMutating || isSubmitting ? (
                  <PulseLoader size={".5rem"} color={"#fff"} />
                ) : (
                  "Submit "
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(CreateProject);
