import React, { useState } from "react";

import { Button, IconButton, Stack, Select, MenuItem } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Pagination: React.FC<IPaginationProps> = ({
  page,
  totalPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  // Handles previous page
  const handlePrevPage = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  // Handles next page
  const handleNextPage = () => {
    if (page < totalPage) {
      onPageChange(page + 1);
    }
  };

  // Handles page size change
  const handlePageSizeChange = (val: number | string) => {
    const newSize = val as number;
    setCurrentPageSize(newSize);
    onPageSizeChange(newSize);
  };

  return (
    <div className="flex items-center justify-between space-x-2 p-2">
      <div className="flex">
        <IconButton
          onClick={handlePrevPage}
          disabled={page === 1}
          className="text-gray-600 hover:bg-gray-200"
        >
          <ChevronLeft />
        </IconButton>

        <Stack direction="row" spacing={1} alignItems="center">
          {[...Array(totalPage).keys()].map((pageNumber) => (
            <Button
              key={pageNumber + 1}
              onClick={() => onPageChange(pageNumber + 1)}
              variant={page === pageNumber + 1 ? "contained" : "outlined"}
              className={
                page === pageNumber + 1
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              }
            >
              {pageNumber + 1}
            </Button>
          ))}
        </Stack>

        <IconButton
          onClick={handleNextPage}
          disabled={page === totalPage}
          className="text-gray-600 hover:bg-gray-200"
        >
          <ChevronRight />
        </IconButton>
      </div>
      <div className="flex items-center gap-2">
        <p>Records per page</p>
        <Select
          value={currentPageSize}
          onChange={(e) => handlePageSizeChange(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ borderRadius: 1, "& .MuiSelect-select": { paddingY: 1.5 } }}
        >
          {[5, 10, 50, 100].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Pagination;
