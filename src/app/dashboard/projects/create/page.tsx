"use client";

import React, {
  useState,
  FormEvent,
  useEffect,
  FormEventHandler,
  ChangeEvent,
} from "react";
import Header from "../../components/Header";
// import { Editor } from "@tinymce/tinymce-react";
import {
  IoMdPricetags,
  IoIosList,
  IoMdColorWand,
  IoIosCreate,
  IoIosClose,
} from "react-icons/io";
// import { useAddNewPostMutation } from "../postApiSlice";
// // import showToast from "../../../../../app/utils/hooks/showToast";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../../../auth/authSlice";
// import { useGetPostCategoryQuery } from "../../PostCategory/postCategoryApiSlice";

const CreateProject = () => {
  // const author = useSelector(selectCurrentUser);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
    status: "",
    category: "",
    tags: "",
  });

  const [previewImage, setPreviewImage] = useState("");
  const [tags, setTags] = useState<any>([]);
  const [tagName, setTagName] = useState("");

  const handleInput: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.type === "file" ? uploadBg(e) : e.target.value,
    }));
  };

  const createTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTagName(e.target.value);
  };
  // const tagwrapper= document.getElementsByClassName('tag-wrapper')!;
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
  // const {
  //   data: postCategory,
  //   isLoading: postCategoryIsLoading,
  //   isSuccess: postCategoryIsSuccess,
  //   isError: postCategoryIsError,
  //   error: postCategoryError,
  // } = useGetPostCategoryQuery("categoriesList", {
  //   pollingInterval: 15000,
  //   refetchOnFocus: true,
  //   refetchOnMountOrArgChange: true,
  // });
  // let categoryOptions;
  // if (postCategory) {
  //   const { entities } = postCategory;
  //   categoryOptions = Object.values(entities).map(
  //     (category: any, i: number) => (
  //       <option key={i} value={.category._id}>
  //         {category.title}
  //       </option>
  //     )
  //   );
  // }
  const removeTag = (key: string) => {
    setTags((tags: string[]) => {
      return tags.filter((tag) => tag !== key);
    });
    setTagName("");
  };
  // const [addNewPost, { isLoading, isSuccess, isError, error }]: any =
  //   useAddNewPostMutation();

  // const navigate = useNavigate()

  // React.useEffect(() => {
  //   if (isSuccess) {
  //     setTitle("");
  //     setDescription("");
  //     setBody("");
  //     setPreviewImage("");
  //     setTags([]);
  //     setTagName("");
  //     setPostBg(null);
  //   }
  // }, [isSuccess]);
  //
  // const canSave =
  // [title, description, body, postBg].every(Boolean) && !isLoading;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // if (canSave) {
    //   var formData = new FormData();
    //   formData.append("title", title);
    //   formData.append("description", description);
    //   formData.append("body", body);
    //   formData.append("tags", tags);
    //   formData.append("category", category);
    //   formData.append("status", status);
    //   formData.append("coverImage", postBg);
    //   formData.append("author", author._id!);
    //   await addNewPost(formData);
    //   if (isError)
    //     return showToast("error", JSON.stringify(error?.data?.message));
    //   showToast("success", "Post created successfully");
    // }
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
                    className="form-control r-2 p-3"
                    placeholder=""
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
                    className="default-select form-control r-2 p-3 wide"
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
                    className="form-control r-2 p-3"
                    placeholder=""
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
                    className="default-select form-control r-2 p-3 wide"
                    value={formData.category}
                    name="category"
                    onChange={(e) => handleInput(e)}
                  ></select>
                </div>
                <div className="col-12 my-4">
                  <label
                    htmlFor="postTag"
                    className="block text-sm font-medium text-gray"
                  >
                    Post Tags<span className="required"> * </span>
                  </label>
                  <div className="mt-1 d-flex rounded-md shadow-sm align-items-stretch overflow-hidden h-100">
                    <span className="d-flex w-10 align-items-center rounded-l-md border border-r-0  bg-secondary bg-opacity-10 px-3 text-xl ">
                      <IoMdPricetags fontSize={"1.5rem"} />{" "}
                    </span>
                    <div className="mt-1 rounded-md shadow-sm p-1 border-2 border-secondary rounded-sm d-flex flex-wrap align-items-center m-0 w-100">
                      {tags.map((tagName: string, i: number) => {
                        return (
                          <div
                            className="p-1 font-xs border border-secondary rounded-sm d-flex align-items-center bg-gray-light mx-1"
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
                        className="d-flex font-16 p-2 outline-none border-0 w-100 form-control r-2 p-3"
                        name="tags"
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
                        className="d-flex flex-col p-5 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                  {/* <Editor
                    tinymceScriptSrc={
                      process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                    }
                    onEditorChange={(newValue, editor) => setBody(newValue)}
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
                  /> */}
                </div>
              </div>
            </div>
          </fieldset>
          <div className="d-flex items-center justify-end w-full py-4 px-10">
            <button
              type="submit"
              className="w-14 h-10 p-2 bg-slate-300 shadow-md rounded-xl mr-5 r-3"
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

export default React.memo(CreateProject);
