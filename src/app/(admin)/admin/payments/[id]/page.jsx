import { useGetPaymentById } from "@/hooks/usePayments";
import Loading from "@/ui/Loading";
import Link from "next/link";
import { useParams } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri";
import useMoveBack from '@/hooks/useMoveBack';

const SignlePayment = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPaymentById(id);
  const onBack = useMoveBack()

  console.log(data);

  if (isLoading) return <Loading />;

  return (
    <section>
      <header className="flex items-center gap-x-3">
        <span onClick={onBack} className="text-blue-500">
          <RiArrowRightSLine size={24} />
        </span>
        <h5>سفارش شماره 1</h5>
      </header>
      <hr className="border-slate-900 mb-3" />
      <p>{id}</p>
    </section>
  );
};

export default SignlePayment;
