export const getPagesToShow = (count, page) => {
  const pages = [];
  const showMaxPage = 6;
  const start = Math.max(1, page - showMaxPage + 1) + 1; // Starting index
  const length = page - start + 1; // Calculate the length to push

  if (page <= showMaxPage) {
    for (let i = 1; i <= Math.min(page, showMaxPage); i++) {
      pages.push(i);
    }
    return pages;
  }

  // Logic to determine which pages to show
  if (count < showMaxPage - 1) {
    // Show first X pages and the last page
    pages.push(
      ...Array.from(
        { length: Math.min(page, showMaxPage) - 1 },
        (_, i) => i + 1
      )
    );
    if (page > showMaxPage) pages.push("...");
    if (page > showMaxPage) pages.push(page);
  } else if (count - 1 > page - showMaxPage + 1) {
    // Show last X pages and the first page
    pages.push(1);
    if (count + 1 >= showMaxPage) pages.push("...");

    if (length > 0) {
      // Ensure length is positive
      pages.push(...Array.from({ length }, (_, i) => start + i));
    }
  } else {
    // Show around the current page
    pages.push(1);
    if (count >= showMaxPage - 1) pages.push("...");

    for (let i = count - 1; i <= count + 1; i++) {
      if (i > 0 && i < page + 1) pages.push(i);
    }
    if (count < page + showMaxPage) pages.push("...");
    pages.push(page);
  }
  return pages;
};
