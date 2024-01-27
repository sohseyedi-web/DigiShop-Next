"use client"
import SidebarLayout from "@/components/SidebarLayout";
import { CustomNavlink } from "@/ui/CustomNavlink";
import { HiOutlineHome, HiOutlineTruck } from "react-icons/hi2";
import { RiLayoutMasonryLine, RiUserSearchLine  } from "react-icons/ri";

const Sidebar = () => {
  return (
    <SidebarLayout>
      <CustomNavlink to={"/"}>
        <HiOutlineHome size={26} />
        <h6>صفحه اصلی</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile"}>
        <RiLayoutMasonryLine size={26} />
        <h6>داشبورد</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile/me"}>
        <RiUserSearchLine  size={26} />
        <h6>اطلاعات کاربری</h6>
      </CustomNavlink>
      <CustomNavlink to={"/profile/payments"}>
        <HiOutlineTruck size={26} />
        <h6>سفارشات</h6>
      </CustomNavlink>
    </SidebarLayout>
  );
};

export default Sidebar;
