import { Button } from "@material-ui/core";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <nav>
      <ul>
        {pages.map((page, index) => {
          return (
            <button key={index} onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
