"use client"
import ProductsListTabel from "./ProductsListTabel"

function Products() {
  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold ">محصولات سایت</h5>
        <button className="btn btn-neutral px-2">ایجاد محصول</button>
      </header>
      <hr className="border-slate-900 mb-3" />
      <ProductsListTabel/>
    </section>
  )
}

export default Products