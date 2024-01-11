import { useGetPaymentById } from "@/hooks/usePayments";
import Loading from "@/ui/Loading";
import Link from "next/link";
import { useParams } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri";

const SignlePayment = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPaymentById(id);

  console.log(data);

  if (isLoading) return <Loading />;

  return (
    <section>
      <header className="flex items-center gap-x-3">
        <Link href={"/admin/payments"} className="text-blue-500">
          <RiArrowRightSLine size={24} />
        </Link>
        <h5>سفارش شماره 1</h5>
      </header>
      <hr className="border-slate-900 mb-3" />
      <p>{id}</p>
    </section>
  );
};

export default SignlePayment;
