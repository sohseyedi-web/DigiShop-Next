import * as RiIcon from "react-icons/ri";
import { useGetCategories } from "@/hooks/useCategories";
import Loading from "@/ui/Loading";

const CategoryLists = () => {
  const { data, isLoading } = useGetCategories();
  const { categories } = data || {};

  if (isLoading) return <Loading />;
  if (!categories?.length) return <p>دسته بندی وجود ندارد</p>;

  return (
    <section className="flex items-center gap-4 flex-wrap">
      {categories?.map((item) => (
        <CategoryItem key={item?._id} item={item} />
      ))}
    </section>
  );
};

export default CategoryLists;

function CategoryItem({ item }) {
  return (
    <div
      className="lg:w-[24%] flex items-center justify-between h-[45px] md:w-[45%] w-full md:mx-0 mx-auto rounded-md bg-slate-200 shadow border px-2 py-1"
      key={item?._id}
    >
      <h6 className="text-lg font-semibold">{item?.title}</h6>
      <div className="flex items-center gap-x-4">
        <button className="text-indigo-800">
          <RiIcon.RiEdit2Line size={25} />
        </button>
        <button className="text-red-500">
          <RiIcon.RiDeleteBin2Line size={25} />
        </button>
      </div>
    </div>
  );
}
