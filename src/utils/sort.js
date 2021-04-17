/**
 * Sorts stations in descending order
 * @param    {object} users
 * @param {String} sortOrder
 * @return   {number } returns an integer (negative, zero or positive)
 */
const sortItems = (users, sortOrder) => {
  console.log("asdfsadf" , users, sortOrder)
  return users.sort((a, b) => {
    if (sortOrder === "desc") {
      return b.date.format("YYYYMMDD") - a.date.format("YYYYMMDD");
    } else {
      return a.date.format("YYYYMMDD") - b.date.format("YYYYMMDD");
    }
  });
};

module.exports.sortItems = sortItems;
