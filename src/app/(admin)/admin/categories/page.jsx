"use client";
import Modal from "@/ui/Modal";
import { useState } from "react";
import CategoryLists from "./CategoryLists";
import CreateCategory from "./CreateCategory";

function Categories() {
  const [open, setOpen] = useState(false);

  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold ">دسته بندی های سایت</h5>
        <button onClick={() => setOpen(true)} className="btn btn-neutral px-2">
          ایجاد دسته بندی
        </button>
        <Modal
          onClose={() => setOpen(!open)}
          open={open}
          title={"ایجاد دسته بندی "}
        >
          <CreateCategory onClose={() => setOpen(!open)} />
        </Modal>
      </header>
      <hr className="border-slate-900 mb-3" />
      <CategoryLists />
    </section>
  );
}

export default Categories;
