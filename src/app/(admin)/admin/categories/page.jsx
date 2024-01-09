"use client";
import CategoryLists from "./CategoryLists";

function Categories() {
  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold ">دسته بندی های سایت</h5>
        <button className="btn btn-neutral px-2">ایجاد دسته بندی</button>
      </header>
      <hr className="border-slate-900 mb-3" />
      <CategoryLists />
    </section>
  );
}

export default Categories;
