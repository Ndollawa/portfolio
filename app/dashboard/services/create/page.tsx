"use client";

import React, {
  useState,
  FormEvent,
  useEffect,
  FormEventHandler,
  ChangeEvent,
} from "react";
import Header from "../../components/Header";

const CreateService = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
    status: "",
    icon: "",
    category: "",
    tags: "",
  });
  const handleInput: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.type === "file" ? uploadBg(e) : e.target.value,
    }));
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
    <>
      <Header title="create" />
      <div className="page">
        <div className="color-white p-10 my-10 r-10">
          <form>
            <div className="row gutter-2">
              <div className="mb-3 col-md-7">
                <label className="form-label">
                  <strong>Name or Title</strong>
                </label>
                <input
                  type="text"
                  className="form-control r-2"
                  placeholder=""
                  name="title"
                  value={formData.title}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="mb-3 col-md-3">
                <label className="form-label">
                  <strong>Icon Class</strong>
                </label>
                <input
                  type="text"
                  className="form-control r-2"
                  placeholder=""
                  name="icon"
                  value={formData.icon}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="mb-3 col-md-2">
                <label className="form-label">
                  <strong>Status</strong>
                </label>
                <select
                  id="inputState"
                  className="default-select form-control r-2 wide"
                  name="status"
                  value={formData.status}
                  onChange={(e) => handleInput(e)}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="mb-3 col-md-12">
                <label className="form-label">
                  <strong>Description</strong>
                </label>
                <input
                  type="text"
                  className="form-control r-2"
                  placeholder=""
                  name="description"
                  value={formData.description}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-6">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="d-flex flex-col p-5 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed r-4 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                        <span className="font-semibold">Click to upload</span>
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
                      alt="User Avatar"
                      width="240"
                    />
                  )}
                </div>
              </div>
              <div className="col-12">
                <label className="form-label">
                  <strong>Details</strong>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateService;
