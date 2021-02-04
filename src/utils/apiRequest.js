import axiosAPI from "./axios";

const getUsers = ({ page, limit }) => {
  return axiosAPI
    .get(
      page
        ? limit
          ? `/users?page=${page}&limit=${limit}`
          : `/users?page=${page}`
        : "/users"
    )
    .then((response) => response.data);
};

const getStats = ({ id, dateIn, dateOut }) => {
  return axiosAPI
    .get(
      id
        ? dateIn && dateOut
          ? `/stats/${id}?dateIn=${dateIn}&dateOut=${dateOut}`
          : `/stats/${id}`
        : "/stats/1"
    )
    .then((response) => response.data);
};

export { getUsers, getStats };
