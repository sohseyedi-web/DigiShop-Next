import { useCreateCategory } from "@/hooks/useCategories";
import { useState } from "react";
import CategoryForm from "@/components/CategoryForm";

const CreateCategory = ({ onClose }) => {
  const { addCategory, isCreating } = useCreateCategory();

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    englishTitle: "",
    type: "",
  });

  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleCategoryForm = async (e) => {
    e.preventDefault();
    const newCategory = { ...formState };
    try {
      await addCategory(newCategory, {
        onSuccess: () => onClose(),
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <CategoryForm
      category={formState}
      onSubmit={handleCategoryForm}
      onChangeHandler={onChangeHandler}
      isLoading={isCreating}
    />
  );
};

export default CreateCategory;
