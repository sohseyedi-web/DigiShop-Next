"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import RadioInput from "@/ui/RadioInput";

const sortOptions = [
  {
    id: 1,
    value: "latest",
    label: "جدید ترین",
  },
  {
    id: 2,
    value: "earliest",
    label: "قدیمی ترین",
  },
  {
    id: 3,
    value: "popular",
    label: "محبوب ترین",
  },
];

const ProductsSort = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [sort, setSort] = useState(searchParams.get("sort"));

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, [searchParams]);

  return (
    <>
      <p>مرتب سازی</p>
      <ul className="space-y-4">
        {sortOptions?.map((item) => (
          <RadioInput
            id={item.id}
            label={item.label}
            value={item.value}
            name="product-sort"
            checked={sort === item.value}
            onChange={sortHandler}
          />
        ))}
      </ul>
    </>
  );
};

export default ProductsSort;
