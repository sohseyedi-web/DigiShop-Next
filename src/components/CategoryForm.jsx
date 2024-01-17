import { categoryTypes } from "@/constants/categoryTypes";
import Loading from "@/ui/Loading";
import SelectField from "@/ui/SelectField";
import TextField from "@/ui/TextField";
import React from "react";

const CategoryForm = ({ onSubmit, category, onChangeHandler, isLoading }) => {
  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <TextField
        label={"عنوان دسته بندی"}
        name="title"
        value={category.title || ""}
        onChange={onChangeHandler}
        placeholder="مثال : برنامه نویسی"
      />
      <TextField
        label={"توضیحات"}
        name="description"
        value={category.description || ""}
        onChange={onChangeHandler}
        placeholder={"توضیحاتی درباره پروژه بنویسید"}
      />
      <TextField
        label={"عنوان انگلیسی"}
        name="englishTitle"
        value={category.englishTitle || ""}
        onChange={onChangeHandler}
        placeholder={"مثال : design"}
      />
      <SelectField
        name="type"
        label={"دسته بندی"}
        options={categoryTypes}
        value={category.type || ""}
        onChange={onChangeHandler}
      />
      <button className="btn btn-primary text-white text-lg h-[45px] w-full">
        {isLoading ? <Loading /> : "تایید"}
      </button>
    </form>
  );
};

export default CategoryForm;
