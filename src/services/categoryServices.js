import http from "./http";

export function getCategory() {
  return http.get("/category/list").then(({ data }) => data.data);
}

export function getCategoryById(id) {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
}

export function addNewCategory(id) {
  return http.post(`/admin/category/add${id}`).then(({ data }) => data.data);
}

export function updateCategory(id, data) {
  return http
    .patch(`/admin/category/update/${id}`, data)
    .then(({ data }) => data.data);
}

export function removeCategory(id) {
  return http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data);
}
