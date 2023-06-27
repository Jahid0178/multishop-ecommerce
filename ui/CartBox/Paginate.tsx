/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

interface ItemsProps {
  currentItems: (
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    // | React.PromiseLike<React.ReactNode>
    | null
    | undefined
  )[];
}

const Items: React.FC<ItemsProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
};

interface PaginateProps {
  itemsPerPage: number;
}

const Paginate: React.FC<PaginateProps> = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="pagination-container">
        <Items currentItems={currentItems} />
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel="next>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default Paginate;
