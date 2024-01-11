import { adminPaymentListTableTHeads } from '@/constants/tableHeads';
import { usePayments } from '@/hooks/usePayments';
import Loading from '@/ui/Loading';
import Table from '@/ui/Table'
import PaymentsRow from './PaymentsRow';

const PaymentsLists = () => {

  const { payments, isLoading } = usePayments();


  if (isLoading) return <Loading />;
  if (!payments?.length) return <p>سفارشی وجود ندارد</p>;

  return (
    <Table>
       <thead>
        <tr className=" text-gray-800">
          {adminPaymentListTableTHeads.map((item) => (
            <th key={item.id}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {payments?.map((payment, index) => (
          <PaymentsRow key={payment._id} index={index} payment={payment} />
        ))}
      </tbody>
    </Table>
  )
}

export default PaymentsLists