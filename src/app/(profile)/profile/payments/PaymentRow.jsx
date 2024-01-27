import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

const PaymentRow = ({ payment, index }) => {
  return (
    <tr key={payment._id}>
      <td className="table__td">{index + 1}</td>
      <td className="table__td  whitespace-nowrap truncate">
        {payment.invoiceNumber}
      </td>
      <td className="table__td  max-w-[280px] whitespace-nowrap truncate">
        {payment.description}
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
      <td className="table__td">
        {payment.status === "COMPLETED" ? (
          <span className="badge badge-success">موفق</span>
        ) : (
          <span className="badge badge-error">ناموفق</span>
        )}
      </td>
    </tr>
  );
};

export default PaymentRow;
