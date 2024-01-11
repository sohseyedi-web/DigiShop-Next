"use client";
import PaymentsLists from "./PaymentsLists";

function Payments() {
  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold ">سفارشات</h5>
      </header>
      <hr className="border-slate-900 mb-3" />
      <PaymentsLists />
    </section>
  );
}

export default Payments;
