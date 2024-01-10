import { useGetCategories } from "@/hooks/useCategories";
import Loading from "@/ui/Loading";
import CategoryItem from "./CategoryItem";

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
