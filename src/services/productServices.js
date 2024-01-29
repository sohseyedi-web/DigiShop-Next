import http from "./http";

export function getProducts(qs, cookies) {
  return http
    .get(`/product/list?${qs}`, {
      headers: {
        Cookies: cookies,
      },
    })
    .then(({ data }) => data.data);
}

export function getProductById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export function getProductBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export function productLiked(id) {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}
export function addNewProduct(data) {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export function removeProduct(id) {
  return http
    .delete(`/admin/product/remove/${id}`)
    .then(({ data }) => data.data);
}

export function updateProduct({id, data}) {
  return http
    .patch(`/admin/product/update/${id}`, data)
    .then(({ data }) => data.data);
}

export function changeDiscountProduct(id, data) {
  return http
    .patch(`/admin/product/change-discount-status/${id}`, data)
    .then(({ data }) => data.data);
}
