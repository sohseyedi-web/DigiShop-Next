import http from "./http";

export function getAllusers(data) {
  return http.get("/admin/user/list", data).then(({ data }) => data.data);
}
export function addNewCategories(data) {
  return http.post("/admin/category/add", data).then(({ data }) => data.data);
}
export function editCategory({ id, newCategory }) {
  return http
    .patch(`/admin/category/update/${id}`, newCategory)
    .then(({ data }) => data.data);
}
export function removeCategory(id) {
  return http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data);
}
