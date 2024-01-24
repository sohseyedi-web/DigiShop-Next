import { toStringCookies } from "./toStringCookies";

export const middlewareAuth = async (req) => {
  const { data } = await fetch(`${"http://localhost:5000/api/user/profile"}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: toStringCookies(req.cookies),
    },
  }).then((res) => res.json());

  const { user } = data || {};
  const roleUpdate = user?.role === "ADMIN" ? "admin" : "profile";
  return { roleUpdate, user };
};
