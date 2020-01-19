import React from 'react';
import ReactPaginate from 'react-paginate';

import {
  WrapperPagination,
} from './styles';

function Pagination(props) {
  const {
    pageCount,
    pageRangeDisplayed = 2,
    marginPagesDisplayed = 2,
    onPageChange,
  } = props;

  return (
    <WrapperPagination>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        onPageChange={onPageChange}
      />
    </WrapperPagination>
  )
}

export default Pagination
