import { useUserList } from "@/hooks/useUserList";
import Loading from "@/ui/Loading";
import Table from "@/ui/Table";
import UserListRow from "./UserListRow";

const UserListTable = () => {
  const { users, isLoading } = useUserList();

  if (isLoading) return <Loading />;

  return (
    <Table>
      <thead>
        <tr className=" text-gray-800">
          <th>#</th>
          <th>نام کاربری</th>
          <th>ایمیل</th>
          <th>شماره موبایل</th>
          <th>تاریخ عضویت</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => (
          <UserListRow key={user._id} index={index} user={user} />
        ))}
      </tbody>
    </Table>
  );
};

export default UserListTable;
