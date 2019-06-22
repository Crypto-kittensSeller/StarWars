function pagination(currentPage, totalPages) {
  const pages = [];
  if (totalPages < 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      if (i < currentPage + 3 && i > currentPage - 3) {
        pages.push(i);
      }
    }
  }
  return pages;
}

module.exports = pagination;
