"use client";

import { memo, FormEvent, useState, useEffect } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { IoMdPricetags, IoIosClose } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { PulseLoader } from "react-spinners";
import {
  useForm,
  Controller,
  useFieldArray,
  FieldValues,
} from "react-hook-form";

import PostCategoryTableData from "@/components/dashboard/categories/CategoryTableData";
import showToast from "@/utils/hooks/showToast";
// import initDataTables, { destroyDataTables } from "@/utils/initDataTables";
import EditPostCategoryForm from "@/components/dashboard/categories/EditCategoryForm";
import { categoryProps } from "@/interfaces/category.interface";
import { Header } from "@/components/dashboard/common";
import { categoryURI, createCategory } from "@/utils/libs/categories";
import { fetcher } from "@/utils/functions";

interface modalDataProps {
  data: categoryProps | null;
  showModal: boolean;
}
const Category = () => {
  const [modalData, setModalData] = useState<modalDataProps>({
    data: null,
    showModal: false,
  });
  const initialState: categoryProps = {
    title: "",
    type: "",
    status: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialState,
  });

  const {
    data: categories,
    error: getCategoriesError,
    isLoading,
  } = useSWR(categoryURI + "?type=post&status=active", fetcher);
  const showEditForm = (modalData: modalDataProps) => {
    setModalData(modalData);
  };
  const {
    trigger,
    isMutating,
    error: formError,
  } = useSWRMutation(categoryURI, createCategory);

  //   useEffect(() => {
  //     destroyDataTables($("#dataTable"));
  //     initDataTables($("#dataTable"), "All Post Category");
  //     return () => {
  //       destroyDataTables($("#dataTable"));
  //     };
  //   }, [postCategory]);
  let tableContent;

  tableContent = categories?.length
    ? categories.map((category: string | number, i: number) => (
        <PostCategoryTableData
          key={category._id}
          category={category}
          index={i}
          showEditForm={showEditForm}
        />
      ))
    : null;

  const onSubmit = async (data: FieldValues) => {
    await trigger(data as any);
    console.log(data);
    // reset();
    showToast("success", "Post category created successfully");
  };

  return (
    <div className="page">
      <Header title="Post > Categories" />
      <div className="w-100 py-5 ">
        <div className="container row gutter-3">
          <div className="col-md-4 col-sm-12">
            <div className="card">
              <div className="card-header fs-16 fw-semibold">
                Create Category
              </div>
              <div className="card-body">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row gutter-2"
                >
                  <div className="form- col-12">
                    <label className="form-label fs-12">
                      Title or Category
                    </label>
                    <input
                      type="text"
                      className={`form-control fs-12 color-dark input-md  r-2  py-2 px-4 ${
                        errors.title
                          ? "border-2 border-solid border-red-600"
                          : false
                      }`}
                      placeholder="Enter title"
                      id="title"
                      aria-invalid={errors.title ? true : false}
                      {...register("title", {
                        required: "title is required.",
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
                  <div className="form-group col-6">
                    <label className="form-label fs-12">Status</label>
                    <select
                      id="status"
                      className={`form-control input-md color-dark fs-12  r-2  py-2 px-4 ${
                        errors.title
                          ? "border-2 border-solid border-red-600"
                          : false
                      }`}
                      aria-invalid={errors.status ? true : false}
                      {...register("status", {
                        required: "status is required.",
                        minLength: {
                          value: 3,
                          message: "Status must be have at least 3 characters",
                        },
                        maxLength: {
                          value: 500,
                          message: "Status must be less than 500 characters",
                        },
                      })}
                    >
                      <option>Select...</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && (
                      <span className="fs-11 text-red-600">
                        <BsInfoCircleFill size={"0.8rem"} />
                        &ensp;
                        {errors.status.message}
                      </span>
                    )}{" "}
                  </div>
                  <div className="form-group col-6">
                    <label className="form-label fs-12">Type</label>
                    <select
                      id="type"
                      className={`form-control input-md color-dark fs-12  r-2  py-2 px-4 ${
                        errors.title
                          ? "border-2 border-solid border-red-600"
                          : false
                      }`}
                      aria-invalid={errors.type ? true : false}
                      {...register("type", {
                        required: "type is required.",
                        minLength: {
                          value: 3,
                          message: "Type must be have at least 3 characters",
                        },
                        maxLength: {
                          value: 500,
                          message: "Type must be less than 500 characters",
                        },
                      })}
                    >
                      <option>Select..</option>
                      <option value="post">Post</option>
                      <option value="project">Project</option>
                      <option value="service">Service</option>
                      {/* <option value="inactive">Inactive</option> */}
                    </select>
                    {errors.type && (
                      <span className="fs-11 text-red-600">
                        <BsInfoCircleFill size={"0.8rem"} />
                        &ensp;
                        {errors.type.message}
                      </span>
                    )}{" "}
                  </div>
                  <div className="col-12 d-flex justify-end">
                    <button
                      type="submit"
                      className="btn bg-purple-700 btn-sm"
                      disabled={isMutating || isSubmitting}
                    >
                      {isMutating || isSubmitting ? (
                        <PulseLoader size={".75rem"} className="color-white" />
                      ) : (
                        "Create"
                      )}
                    </button>
                  </div>
                </form>
                <div id="editCategory-holder">
                  {modalData?.showModal && (
                    <EditPostCategoryForm
                      modalData={modalData}
                      showEditForm={showEditForm}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title fs-14 font-weight-semibold">
                  All Categories
                </h4>
              </div>
              <div className="card-body">
                <div className="mb-5 d-flex"></div>
                <div className="table-responsive w-100 fs-14">
                  <table
                    id="dataTable"
                    className="table w-100 table-scrollable table-striped mt-10 table-bordered table-hover table-checkable order-column valign-middle border mb-0 align-items-centerid"
                  >
                    <thead>
                      <tr>
                        <th>
                          <input type="checkbox" name="" id="" />
                        </th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{tableContent}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Category);
