"use client";

import Loading from "@/ui/Loading";
import { useCreatePayment } from "@/hooks/usePayments";

const AddToPayment = () => {
  const { addPayment, isPending } = useCreatePayment();

  return (
    <button
      onClick={addPayment}
      className="mt-2 btn btn-active btn-primary w-full text-lg h-[45px] text-white"
    >
      {isPending ? <Loading /> : "ثبت سفارش"}
    </button>
  );
};

export default AddToPayment;
