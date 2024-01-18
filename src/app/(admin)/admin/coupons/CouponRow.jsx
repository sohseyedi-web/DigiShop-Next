import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { RiEdit2Line } from "react-icons/ri";
import { HiTrash } from "react-icons/hi";
import { useRemoveCoupons } from "@/hooks/useCoupons";

const CouponRow = ({ coupon, index }) => {

  const {isDeleting,removeCoupons} = useRemoveCoupons()


  return (
    <tr key={coupon._id}>
      <td className="table__td">{index + 1}</td>
      <td className="table__td  whitespace-nowrap font-bold">{coupon.code}</td>
      <td className="table__td">
        <span className="badge badge--primary">{coupon.type}</span>
      </td>
      <td className="table__td">{coupon.amount}</td>
      <td className="table__td">
        <div className="space-y-2 flex flex-col items-start">
          {coupon.productIds.map((p) => {
            return <span className="badge badge--secondary">{p.title}</span>;
          })}
        </div>
      </td>
      <td className="table__td">{coupon.usageCount}</td>
      <td className="table__td">{coupon.usageLimit}</td>
      <td className="table__td">{toLocalDateStringShort(coupon.expireDate)}</td>
      <td className="table__td font-bold text-lg">
        <div className="flex items-center gap-x-4">
          <button onClick={() => removeCoupons(coupon._id)}>
            <HiTrash className="text-rose-600 w-6 h-6" />
          </button>
          <button>
            <RiEdit2Line className="w-6 h-6 text-secondary-600" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CouponRow;
