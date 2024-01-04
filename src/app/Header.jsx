import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-gray-400 shadow">
      <nav className="flex items-center justify-between max-w-7xl mx-auto container lg:px-0 px-3">
        <div className="flex items-center gap-x-3">
          <h3 className="text-2xl font-semibold text-gray-800">دیجی شاپ</h3>
          <Link href={"/"}>خانه</Link>
          <Link href={"/products"}>فروشگاه</Link>
          <Link href={"/"}>ارتباط با ما</Link>
        </div>
        <Link href={"/auth"} className="btn btn--primary">
          ورود / ثبت نام
        </Link>
      </nav>
    </header>
  );
};

export default Header;
