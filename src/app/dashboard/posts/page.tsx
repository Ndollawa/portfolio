import { Header } from "@/components/dashboard/common";
import TableRow from "@/components/dashboard/posts/TableRow";
import React from "react";

const Posts = () => {
  return (
    <div className="page">
      <Header title="Post > Create New Post" />
      <div className="w-100 py-5 "></div>
      <div>
        <table className="table__bordered table__stripped table__hover table__scrollable">
          <thead>
            <th>
              <input type="checkbox" />
            </th>
            <th>S/N</th>
            <th>Image</th>
            <th>Title</th>
            <th>Date Published</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
