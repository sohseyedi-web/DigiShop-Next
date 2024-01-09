
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import {toLocalDateStringShort} from "@/utils/toLocalDate";


const UserListRow = ({ user, index }) => {
  const { role } = user;

  return (
    <tr key={user?._id}>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>
        <p
          className={`${
            role === "ADMIN"
              ? "text-green-500 font-bold"
              : "text-base font-medium"
          }`}
        >
          {user?.name}
        </p>
      </td>
      <td>{user?.email}</td>
      <td>{toPersianNumbers(user?.phoneNumber)}</td>
      <td>{toLocalDateStringShort(user?.createdAt)}</td>
      <td>مشاهده سوابق</td>
    </tr>
  );
};

export default UserListRow;
