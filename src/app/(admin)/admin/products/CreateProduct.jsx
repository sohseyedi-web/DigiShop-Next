"use client";
import { useGetCategories } from "@/hooks/useCategories";
import { useState } from "react";
import { useCreateProduct } from "@/hooks/useProducts";
import ProductForm from "@/components/ProductForm";

const CreateProduct = ({ onClose }) => {
  const { addProduct, isCreating } = useCreateProduct();
  const { data } = useGetCategories();
  const { categories } = data || {};

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    slug: "",
    price: "",
    offPrice: "",
    discount: "",
    brand: "",
    imageLink: "",
    countInStock: "",
  });
  const [tags, setTags] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data = { ...formState, tags, category: selectCategory };
    await addProduct(data, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <ProductForm
      onChange={onChangeHandler}
      tags={tags}
      setTags={setTags}
      formData={formState}
      loading={isCreating}
      onSubmit={handleSubmit}
      categories={categories}
      selectCategory={selectCategory}
      setSelectCategory={(e) => setSelectCategory(e.target.value)}
    />
  );
};

export default CreateProduct;
