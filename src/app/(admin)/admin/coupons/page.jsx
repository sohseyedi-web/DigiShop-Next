"use client";
import Modal from "@/ui/Modal";
import React, { useState } from "react";
import CreateCoupon from "./CreateCoupon";
import CouponsListTable from "./CouponsListTable";

function Coupons() {
  const [open, setOpen] = useState(false);

  return (
    <section className="pt-3">
      <header className="flex items-center justify-between py-2">
        <h5 className="text-xl font-semibold">تخفیفات</h5>
        <button onClick={() => setOpen(true)} className="btn btn-neutral px-2">
          ایجاد تخفیف
        </button>
        <Modal
          onClose={() => setOpen(!open)}
          open={open}
          title={"ایجاد تخفیف "}
        >
          <CreateCoupon onClose={() => setOpen(!open)} />
        </Modal>
      </header>
      <hr className="border-slate-900 mb-3" />
      <CouponsListTable />
    </section>
  );
}

export default Coupons;
