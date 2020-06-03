import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items) // Wrap the array to lodash list of items
    .slice(startIndex) // Slice the array starting from startIndex
    .take(pageSize) // No of items to slice
    .value(); // Map it back to an array
}
