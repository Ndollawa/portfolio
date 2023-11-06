import { memo } from "react";
import showToast from "@/utils/hooks/showToast";
import Swal from "sweetalert2";
import { categoryProps } from "@/interfaces/category.interface";
import { BiPencil, BiTrashAlt } from "react-icons/bi";

interface modalDataProps {
  modalData: {
    data: categoryProps | null;
    showModal: boolean;
  };
}
const CategoryTableData = ({ category, index, showEditForm }: any) => {
  const onDeleteCategory = async (id: String) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-sm m-2 btn-success",
        cancelButton: "btn btn-sm m-2 btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          // await deleteCategory({ _id: id });
          if ("isDelError")
            // return showToast("error", JSON.stringify(delerror?.data));
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Category has been deleted.",
              "success"
            );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Operation aborted, entry is safe :)",
            "error"
          );
        }
      });
  };
  //

  if (category) {
    const created = new Date(category.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const categoryData = {
      data: {
        id: category._id,
        title: category.title,
        status: category.status,
      },
      showModal: true,
    };
    let categoryStatus;
    switch (category.status) {
      case "pending":
        categoryStatus = (
          <span className="badge badge-primary">{category.status}</span>
        );
        break;
      case "active":
        categoryStatus = (
          <span className="badge badge-success">{category.status}</span>
        );
        break;
      case "inactive":
        categoryStatus = (
          <span className="badge badge-danger">{category.status}</span>
        );
        break;
      default:
        categoryStatus = "";
        break;
    }

    return (
      <>
        {" "}
        <tr key={category._id}>
          <td align="center">
            <input type="checkbox" name="checboxes" id="checkboxes" />
          </td>
          <td>{category.title}</td>
          <td>{category.type}</td>
          <td align="center">{categoryStatus}</td>
          {/* <td>{created}</td> */}
          <td>
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-info light shadow btn-xs sharp me-1"
                onClick={() => showEditForm(categoryData)}
              >
                <BiPencil />
              </button>
              <button
                className="btn btn-danger light shadow btn-xs sharp"
                onClick={() => onDeleteCategory(category._id)}
              >
                <BiTrashAlt />
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  } else return null;
};

export default memo(CategoryTableData);
