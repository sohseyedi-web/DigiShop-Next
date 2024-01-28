import http from "./http";

export function getOTP(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOTP(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
export function completedUser(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function updateProfile(data) {
  return http.patch("/user/update", data).then(({ data }) => data.data);
}

export function logout() {
  return http.post("/user/logout");
}
