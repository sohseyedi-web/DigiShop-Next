import React from "react";
import { useCreateCategory } from "@/hooks/useCategories";
import { useState } from "react";
import TextField from "@/ui/TextField";

const CreateProduct = ({ onClose }) => {
  const { addCategory, isCreating } = useCreateCategory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [englishTitle, setEnglishTitle] = useState("");

  return (
    <form className="space-y-3">
      <TextField
        label={"عنوان دسته بندی"}
        name="title"
        register={register}
        required
        errors={errors}
        placeHolder="مثال : برنامه نویسی"
        validationSchema={{
          required: "عنوان دسته بندی ضرروی است",
        }}
      />
      <TextField />
      <TextField
        label={"عنوان انگلیسی"}
        name="englishTitle"
        errors={errors}
        placeHolder={"مثال : design"}
        required
        register={register}
        validationSchema={{
          required: "عنوان انگلیسی ضرروی است",
        }}
      />
    </form>
  );
};

export default CreateProduct;
