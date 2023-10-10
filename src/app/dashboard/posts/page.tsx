import { Header } from "@/components/dashboard/common";
import React from "react";

const Posts = () => {
  return (
    <div className="page">
      <Header title="Post > Create New Post" />
      <div className="w-100 py-5 "></div>
      <div>
        <table className="table__bordered table__stripped table__hover table__scrollable">
          <thead>
            <th></th>
            <th>S/N</th>
            <th>Image</th>
            <th>Title</th>
            <th>Content</th>
            <th>Date Published</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>1</td>
              <td></td>
              <td>Help===</td>
              <td>some contents</td>
              <td>23rd Oct, 2023</td>
              <td>
                <span className="bg-green-600 px-2 py-1 r-1 fs-xs text-white">
                  Published
                </span>
              </td>
              <td>
                <div>
                  <button>edit</button>
                  <button>edit</button>
                  <button>edit</button>
                  <button>edit</button>
                  <button>edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>1</td>
              <td></td>
              <td>Help===</td>
              <td>some contents</td>
              <td>23rd Oct, 2023</td>
              <td>
                <span className="bg-orange-600 px-3 py-2 r-1 fs-xs text-white">
                  Draft
                </span>
              </td>
              <td>
                <div>
                  <button>edit</button>
                  <button>edit</button>
                  <button>edit</button>
                  <button>edit</button>
                  <button>edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>1</td>
              <td></td>
              <td>Help===</td>
              <td>some contents</td>
              <td>23rd Oct, 2023</td>
              <td>
                <span className="bg-green-300 px-2 py-1 r-1 fs-xs text-white">
                  Draft
                </span>
              </td>
              <td>
                <div>
                  <button className="btn">+</button>
                  <button className="btn">@</button>
                  <button className="btn">&</button>
                  <button className="btn">{"=>"}</button>
                  <button className="btn">*</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
