import { couponListTableTHeads } from '@/constants/tableHeads';
import { useGetCoupons } from '@/hooks/useCoupons';
import Loading from '@/ui/Loading';
import Table from '@/ui/Table';
import CouponRow from './CouponRow';

const CouponsListTable = () => {

  const { data, isLoading } = useGetCoupons();

  const { coupons } = data || {};

  if (isLoading) return <Loading />;
  if (!coupons?.length) return <p>تخفیفی ایجاد نکردید</p>;

  return (
    <Table>
      <thead>
        <tr className=" text-gray-800">
          {couponListTableTHeads.map((item) => (
            <th key={item.id}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {coupons?.map((coupon, index) => (
          <CouponRow key={coupon._id} index={index} coupon={coupon} />
        ))}
      </tbody>
    </Table>
  )
}

export default CouponsListTable