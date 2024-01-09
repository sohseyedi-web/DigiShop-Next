"use client";
import ProductsListTabel from "./ProductsListTabel";
import { useState } from "react";
import Modal from "@/ui/Modal";
import CreateProduct from "./CreateProduct";

function Products() {
  const [open, setOpen] = useState(false);

  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold">محصولات سایت</h5>
        <button onClick={() => setOpen(true)} className="btn btn-neutral px-2">
          ایجاد محصول
        </button>
        <Modal
          onClose={() => setOpen(!open)}
          open={open}
          title={"ایجاد محصول "}
        >
          <CreateProduct onClose={() => setOpen(!open)} />
        </Modal>
      </header>
      <hr className="border-slate-900 mb-3" />
      <ProductsListTabel />
    </section>
  );
}

export default Products;
