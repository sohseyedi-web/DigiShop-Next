"use client";
import SidebarLayout from "@/components/SidebarLayout";
import { CustomNavlink } from "@/ui/CustomNavlink";
import { HiOutlineHome } from "react-icons/hi2";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <SidebarLayout>
      <CustomNavlink to={"/"}>
        <HiOutlineHome size={26} />
        <h6>صفحه اصلی</h6>
      </CustomNavlink>
      <CustomNavlink to={"/admin"}>
        <RiLayoutMasonryLine size={26} />
        <h6>داشبورد</h6>
      </CustomNavlink>
      <CustomNavlink to={"/admin/users"}>
        <FaUsers size={26} />
        <h6>لیست کاربران</h6>
      </CustomNavlink>
    </SidebarLayout>
  );
};

export default Sidebar;
