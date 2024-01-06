export const middlewareAuth = async(req) => {
  let strCookie = "";
  req.cookies.getAll().forEach((item) => {
    strCookie += `${item?.name}=${item?.value}; `;
  });

  const { data } = await fetch(`${"http://localhost:5000/api/user/profile"}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: strCookie,
    },
  }).then((res) => res.json());

  const { user } = data || {};
  const roleUpdate = user?.role === "ADMIN" ? "admin" : "profile";
  return { roleUpdate, user };
};
