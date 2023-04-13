import { FC } from 'react';
import ReactPaginate from 'react-paginate';

interface Props {
  amount: any;
  handlePageChange: any;
  page: number;
}

const Pagination: FC<Props> = ({ amount, handlePageChange, page }) => {
  return (
    <ReactPaginate
      pageCount={amount}
      previousLabel={null}
      nextLabel={null}
      containerClassName="flex"
      pageLinkClassName="p-3 bg-none border border-blog-blue
        rounded-lg hover:text-white hover:bg-blog-blue w-3/4
        mr-1 ml-1"
      activeLinkClassName="bg-blog-darkBlue text-white"
      onPageChange={handlePageChange}
      forcePage={page}
    />
  );
};

export default Pagination;
