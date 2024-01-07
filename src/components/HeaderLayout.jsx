import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import * as RiIcon from "react-icons/ri";

const HeaderLayout = () => {
  const { user, isLoading, role } = useAuth();

  return (
    <nav className="px-8 container mx-auto flex items-center justify-between py-4 shadow">
      <div className="flex items-center gap-x-6">
        <h1 className="text-2xl font-bold text-gray-800">دیجی شاپ</h1>
        <Link href={"/"} className="text-lg font-medium text-gray-700">
          خانه
        </Link>
        <Link href={"/"} className="text-lg font-medium text-gray-700">
          محصولات
        </Link>
        <Link href={"/"} className="text-lg font-medium text-gray-700">
          درباره ما
        </Link>
      </div>
      {user ? (
        <div
          className={`${
            isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
          } flex items-center gap-x-3`}
        >
          <Link href={`/${role}`} className="text-white btn btn-success">
            <RiIcon.RiUser6Line size={26} />
          </Link>
          <Link href={`/cart`} className="text-white btn btn-primary">
            <RiIcon.RiShoppingCartLine size={26} />
          </Link>
        </div>
      ) : (
        <Link href={"/auth"} className="px-3 btn btn-neutral">
          ورود / ثبت نام
        </Link>
      )}
    </nav>
  );
};

export default HeaderLayout;
