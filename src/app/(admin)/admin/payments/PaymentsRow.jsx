import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import Link from "next/link";
import {HiEye} from "react-icons/hi2";
const PaymentsRow = ({ index, payment }) => {
  return (
    <tr key={payment._id}>
      <td className="table__td">{index + 1}</td>
      <td className="table__td  whitespace-nowrap truncate">
        {payment.invoiceNumber}
      </td>
      <td className="table__td  max-w-[280px] whitespace-nowrap truncate">
        {payment.description}
      </td>
      <td className="table__td  whitespace-nowrap truncate">
        <div className="flex flex-col gap-y-2">
          {/* <span> {payment.user.name}</span> */}
          <span> {payment.user.email}</span>
          {/* <span className="font-bold">{payment.user.phoneNumber}</span> */}
        </div>
      </td>
      <td className="table__td">
        <div className="flex flex-col gap-y-2 items-start">
          {payment.cart.productDetail.map((product) => {
            return (
              <span className="badge badge-neutral" key={product._id}>
                {product.title}
              </span>
            );
          })}
        </div>
      </td>
      <td className="table__td font-bold text-lg">
        {toPersianNumbersWithComma(payment.amount)}
      </td>
      <td className="table__td">{toLocalDateStringShort(payment.createdAt)}</td>
      <td className="table__td text-white">
        {payment.status === "COMPLETED" ? (
          <span className="badge badge-success">موفق</span>
        ) : (
          <span className="badge badge-error">ناموفق</span>
        )}
      </td>
      <td className="table__td">
        <Link href={`/admin/payments/${payment._id}`}>
          <HiEye className="w-6 h-6 text-blue-500" />
        </Link>
      </td>
    </tr>
  );
};

export default PaymentsRow;
