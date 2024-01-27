"use client";
import { userPaymentTHeads } from "@/constants/tableHeads";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import Table from "@/ui/Table";
import PaymentRow from "./PaymentRow";

const PaymentsLists = () => {
  const { payments, isLoading } = useAuth();

  if (isLoading) return <Loading />;
  if (!payments?.length) return <p>سفارشی وجود ندارد</p>;

  return (
    <Table>
      <thead>
        <tr className=" text-gray-800">
          {userPaymentTHeads.map((item) => (
            <th key={item.id}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {payments?.map((payment, index) => (
          <PaymentRow key={payment._id} index={index} payment={payment} />
        ))}
      </tbody>
    </Table>
  );
};

export default PaymentsLists;
