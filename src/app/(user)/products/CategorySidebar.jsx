"use client";
import CheckBox from "@/ui/CheckBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";

const CategorySidebar = ({ categories }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategory.includes(value)) {
      const categories = selectedCategory.filter((c) => c !== value);
      setSelectedCategory(categories);
      router.push(pathname + "?" + createQueryString("category", categories));
    } else {
      setSelectedCategory([...selectedCategory, value]);
      router.push(
        pathname +
          "?" +
          createQueryString("category", [...selectedCategory, value])
      );
    }
  };

  return (
    <div className="col-span-1">
      <p>دسته بندی ها</p>
      <ul className="space-y-4">
        {categories?.map((category) => (
          <CheckBox
            id={category._id}
            key={category._id}
            label={category.title}
            value={category.englishTitle}
            name="product-type"
            onChange={categoryHandler}
            checked={selectedCategory.includes(category.englishTitle)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
