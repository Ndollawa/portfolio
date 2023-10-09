"use client";

import React, {
  useState,
  FormEvent,
  useEffect,
  FormEventHandler,
  ChangeEvent,
} from "react";
import Header from "../../components/Header";
import { Editor } from "@tinymce/tinymce-react";
import {
  IoMdPricetags,
  IoIosList,
  IoMdColorWand,
  IoIosCreate,
  IoIosClose,
} from "react-icons/io";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { config } from "@/src/utils/config/config";
import { fetcher } from "@/src/utils/functions";

const url = config.baseURL + "/hackathon/registration";
async function registerUser(url: string, { arg }: { arg: string }) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const CreatePost = () => {
  // const author = useSelector(selectCurrentUser);
  const [formData, setFormData] = useState({
    title: undefined,
    description: undefined,
    body: undefined,
    status: undefined,
    category: undefined,
    tags: undefined,
  });

  const [previewImage, setPreviewImage] = useState("");
  const [tags, setTags] = useState<any>([]);
  const [tagName, setTagName] = useState("");

  const [success, setSuccess] = useState(false);
  const {
    trigger,
    isMutating,
    error: formError,
  } = useSWRMutation(url, registerUser /* options */);

  const handleInput: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.type === "file" ? uploadBg(e) : e.target.value,
    }));
  };

  const createTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTagName(e.target.value);
  };

  const addTag = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (tagName !== "") {
        setTags((tags: string[]) => {
          return [...tags, tagName];
        });
        setTagName("");
      }
    }
  };

  const removeTag = (key: string) => {
    setTags((tags: string[]) => {
      return tags.filter((tag) => tag !== key);
    });
    setTagName("");
  };

  const canSave = Object.values(formData).every(Boolean);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (canSave) {
      const result = await trigger(formData as any);
      //   if (isError)
      //     return showToast("error", JSON.stringify(error?.data?.message));
      //   showToast("success", "Post created successfully");
    }
  };
  const uploadBg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) {
      const fileurl = (window.URL || window.webkitURL).createObjectURL(file[0]);
      setPreviewImage(fileurl);
      return file[0];
    }
  };

  return (
    <div className="page">
      <Header title="Post > Create New Post" />
      <div className="w-100 card py-5 ">
        <form
          action=""
          id="createpost"
          className="form"
          encType="multipart/form-data"
          method="post"
          onSubmit={handleSubmit}
        >
          <fieldset className="p-2">
            <legend>New Post Data</legend>
            <div className="color-white p-10 my-10 r-10">
              <div className="row gutter-2">
                <div className="mb-3 col-md-9">
                  <label className="form-label">
                    <strong>Title or Heading</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control input-md r-2  py-2 px-4"
                    placeholder="Enter post title"
                    value={formData.title}
                    name="title"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="mb-3 col-md-3">
                  <label className="form-label">
                    <strong>Status</strong>
                  </label>
                  <select
                    id="status"
                    className="default-select form-control input-md r-2 py-2 px-4 wide"
                    name="status"
                    value={formData.status}
                    onChange={(e) => handleInput(e)}
                  >
                    <option value="published">Publish</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
                <div className="mb-3 col-md-8">
                  <label className="form-label">
                    <strong>Description</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control input-md r-2  py-2 px-4"
                    placeholder="Enteer post description"
                    name="description"
                    value={formData.description}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="mb-3 col-md-4">
                  <label className="form-label">
                    <strong>Category</strong>
                  </label>
                  <select
                    id="category"
                    className="default-select form-control input-md r-2  py-2 px-4 wide"
                    value={formData.category}
                    name="category"
                    onChange={(e) => handleInput(e)}
                  ></select>
                </div>
                <div className="col-12 my-4">
                  <label
                    htmlFor="postTag"
                    className="block text-sm  form-label text-gray"
                  >
                    Post Tags<span className="required"> * </span>
                  </label>
                  <div className="mt-1 d-flex color-light r-2 shadow-sm items-stretch overflow-hidden h-100">
                    <span className="d-flex w-10 items-center justify-center r-tl-2 r-bl-2  border border-r-0  px-3 text-xl ">
                      <IoMdPricetags fontSize={"1.5rem"} />{" "}
                    </span>
                    <div className="mt-1 shadow-sm p-1 border-2 border-secondary r-2 d-flex flex-wrap align-items-center m-0 w-100">
                      {tags.map((tagName: string, i: number) => {
                        return (
                          <div
                            className="py-1 pl-2 pr-1 fs-12 border border-secondary r-2 d-flex align-items-center color-dark text-white mx-1"
                            key={i}
                          >
                            <span>{tagName}</span>
                            <IoIosClose
                              className="text-sm ml-1.5"
                              onClick={(e) => removeTag(tagName)}
                            />
                          </div>
                        );
                      })}
                      <input
                        className="d-flex font-16 outline-none border-0 w-100 form-control input-md r-2 py-2 px-4"
                        name="tags"
                        placeholder="Add post tags"
                        value={tagName}
                        onChange={createTag}
                        onKeyDown={addTag}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row col-12 gutter-x-4 mt-3">
                  <div className="col-md-6">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="form-label d-flex flex-col p-5 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed r-2 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="d-flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
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
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          accept=".png, .jpg, .jpeg"
                          onChange={uploadBg}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    Preview
                    <div id="preview">
                      {previewImage && (
                        <img
                          className="img-responsive"
                          src={previewImage}
                          alt="post cover imager"
                          width="240"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label">
                    <strong>Response</strong>
                  </label>
                  <Editor
                    tinymceScriptSrc={"/tinymce/tinymce.min.js"}
                    onEditorChange={(newValue, editor) =>
                      "handleInput(newValue)"
                    }
                    value={formData.body}
                    init={{
                      height: 400,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "preview",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div className="d-flex items-center justify-end w-full py-4 px-10">
            <button
              type="submit"
              className="w-14 h-10 p-2 bg-slate-300 shadow-md r-2 mr-5 r-3"
              name=" "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-14 h-10 p-2 bg-purple-800 text-white shadow-md r-3 mr-5"
              name=" "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(CreatePost);
