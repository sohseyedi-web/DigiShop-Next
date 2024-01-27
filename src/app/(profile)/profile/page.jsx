"use client";
import HeaderDashboard from "@/components/panel/TopPanel";
import Loading from "@/ui/Loading";
import { useAuth } from "@/hooks/useAuth";

const UserProfile = () => {
  const { user, isLoading } = useAuth();

  return (
    <section className="my-3 space-y-3">
      <HeaderDashboard user={user} />
      <h6 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
        آمار کلی
      </h6>
      <p className="my-2 ">در یک نما خلاصه ای از آمار خود را ببینید</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-between flex-wrap my-3  gap-y-3">
          soheil
        </div>
      )}
    </section>
  );
};

export default UserProfile;
