"use client";
import { useAuth, useUpadateUser } from "@/hooks/useAuth";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import { useState, useEffect } from "react";

const UserDetail = () => {
  const { user, isLoading } = useAuth();
  const { isUpdating, updateUserProfile } = useUpadateUser();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const sumbitHandler = async (e) => {
    e.preventDefault();
    await updateUserProfile(formData);
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoading) return <Loading />;

  console.log(formData)


  return (
    <form onSubmit={sumbitHandler} className="space-y-4 flex flex-col">
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"نام کاربری"}
          name={"name"}
          value={formData.name}
          onChange={onChangeHandler}
        />
      </div>
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"ایمیل"}
          name={"email"}
          value={formData.email}
          onChange={onChangeHandler}
        />
      </div>
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"شماره موبایل"}
          name={"phoneNumber"}
          value={formData.phoneNumber}
          onChange={onChangeHandler}
        />
      </div>
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"اطلاعات بیشتر"}
          name={"biography"}
          value={formData.biography}
          onChange={onChangeHandler}
          placeholder={"اطلاعات بیشتری از خودت بنویس"}
        />
      </div>
      <button className="btn btn-active btn-primary lg:w-[40%] w-full text-lg h-[45px] text-white">
        {isUpdating ? <Loading /> : "ویرایش اطلاعات"}
      </button>
    </form>
  );
};

export default UserDetail;
