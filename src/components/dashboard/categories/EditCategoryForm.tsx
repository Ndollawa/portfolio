import { memo, FormEvent, useState, useEffect } from "react";
import showToast from "@/utils/hooks/showToast";
import { categoryProps } from "@/interfaces/category.interface";

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

interface modalDataProps {
  modalData: {
    data: categoryProps | null;
    showModal: boolean;
  };
  showEditForm: any;
}
const EditPostCategoryForm = ({
  modalData: { data, showModal },
  showEditForm,
}: modalDataProps) => {
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
  const onSubmit = async (data: FieldValues) => {
    showToast("success", "Post category updated successfully");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="basic-form">
          <div className="form-group">
            <label className="form-label">
              <strong>Title or Category</strong>
            </label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div className="form-group">
            <label className="form-label">
              <strong>Status</strong>
            </label>
            <select
              id="inputState"
              className="default-select form-control wide"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="text-right">
            <button
              type="button"
              className="btn btn-dark btn-sm m-2"
              onClick={() => showEditForm({ data: null, showModal: false })}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-secondary btn-sm m-2"
              disabled={!"canSave"}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default memo(EditPostCategoryForm);
