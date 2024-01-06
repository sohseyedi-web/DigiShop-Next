"use client";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import Link from "next/link";
import React from "react";

const HeaderLayout = () => {
  const { user, isLoading, role } = useAuth();

  return (
    <header className="w-full py-2 shadow">
      <nav className="flex items-center justify-between max-w-7xl mx-auto container lg:px-0 px-3">
        <div className="flex items-center gap-x-3">
          <h3 className="text-2xl font-semibold text-gray-800">دیجی شاپ</h3>
          <Link className="text-xl" href={"/"}>
            خانه
          </Link>
          <Link className="text-xl" href={"/products"}>
            فروشگاه
          </Link>
          <Link className="text-xl" href={"/"}>
            ارتباط با ما
          </Link>
        </div>
        {!user ? (
          <Link href={"/auth"} className="btn btn-neutral">
            ورود / ثبت نام
          </Link>
        ) : (
          <Link href={`/${role}`} className="btn btn-success text-white">
            {isLoading ? <Loading /> : user?.name}
          </Link>
        )}
      </nav>
    </header>
  );
};

export default HeaderLayout;
