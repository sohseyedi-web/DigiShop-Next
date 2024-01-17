import CategoryForm from "@/components/CategoryForm";
import { useGetCategoryById, useUpdateCategory } from "@/hooks/useCategories";
import Loading from "@/ui/Loading";
import { useState } from "react";
import { toast } from "react-hot-toast";

const EditCategory = ({ id, onClose }) => {
  const { data, isLoading } = useGetCategoryById(id);
  const { category } = data || {};
  const [formData, setFormData] = useState({
    title: category?.title,
    description: category?.description,
    englishTitle: category?.englishTitle,
    type: category?.type,
  });
  const { isUpdating, updateCategories } = useUpdateCategory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryForm = async (e) => {
    e.preventDefault();
    try {
      await updateCategories(
        {
          id: category?._id,
          data: {
            ...formData,
          },
        },
        {
          onSuccess: () => onClose(),
        }
      );
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (!category?._id && isLoading) return <Loading />;

  return (
    <CategoryForm
      category={formData}
      isLoading={isUpdating}
      onChangeHandler={handleChange}
      onSubmit={handleCategoryForm}
    />
  );
};

export default EditCategory;
