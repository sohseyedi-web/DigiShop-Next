"use client";
import { useGetCategories } from "@/hooks/useCategories";
import { useState } from "react";
import { useGetProductById, useUpdateProduct } from "@/hooks/useProducts";
import ProductForm from "@/components/ProductForm";
import Loading from "@/ui/Loading";

const EditProduct = ({ onClose, id }) => {
  const { isUpdating, updateProducts } = useUpdateProduct();
  const { product } = useGetProductById(id);
  const { data } = useGetCategories();
  const { categories } = data || {};
  

  const [formState, setFormState] = useState({
    title: product?.title,
    description: product?.description,
    slug: product?.slug,
    price: product?.price,
    offPrice: product?.offPrice,
    discount: product?.discount,
    brand: product?.brand,
    imageLink: product?.imageLink,
    countInStock: product?.countInStock,
  });
  const [tags, setTags] = useState(product?.tags);
  const [selectCategory, setSelectCategory] = useState(product?.category);

  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  console.log(product)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProducts(
      {
        id :product?._id ,
        data: {
          ...formState,
          tags,
          category: selectCategory,
        },
      },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  if (isUpdating && !product) return <Loading />;

  return (
    <ProductForm
      onChange={onChangeHandler}
      tags={tags}
      setTags={setTags}
      formData={formState}
      loading={isUpdating}
      onSubmit={handleSubmit}
      categories={categories}
      selectCategory={selectCategory}
      setSelectCategory={(e) => setSelectCategory(e.target.value)}
    />
  );
};

export default EditProduct;
