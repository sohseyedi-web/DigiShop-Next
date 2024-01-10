import { useCreateCategory } from "@/hooks/useCategories";
import Loading from "@/ui/Loading";
import SelectField from "@/ui/SelectField";
import TextField from "@/ui/TextField";
import { useState } from "react";
import { categoryTypes } from "@/constants/categoryTypes";

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
    <form className="space-y-3" onSubmit={handleCategoryForm}>
      <TextField
        label={"عنوان دسته بندی"}
        name="title"
        value={formState.title}
        onChange={onChangeHandler}
        placeholder="مثال : برنامه نویسی"
      />
      <TextField
        label={"توضیحات"}
        name="description"
        value={formState.description}
        onChange={onChangeHandler}
        placeholder={"توضیحاتی درباره پروژه بنویسید"}
      />
      <TextField
        label={"عنوان انگلیسی"}
        name="englishTitle"
        value={formState.englishTitle}
        onChange={onChangeHandler}
        placeholder={"مثال : design"}
      />
      <SelectField
        name="type"
        label={"دسته بندی"}
        options={categoryTypes}
        value={formState.type}
        onChange={onChangeHandler}
      />
      <button className="btn btn-primary text-white text-lg h-[45px] w-full">
        {isCreating ? <Loading /> : "تایید"}
      </button>
    </form>
  );
};

export default CreateCategory;
