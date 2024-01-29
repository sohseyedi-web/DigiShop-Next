import Loading from "@/ui/Loading";
import SelectField from "@/ui/SelectField";
import TextField from "@/ui/TextField";
import { TagsInput } from "react-tag-input-component";

const productsFormData = [
  {
    id: 1,
    label: "عنوان",
    name: "title",
  },
  {
    id: 2,
    label: "توضیحات",
    name: "description",
  },
  {
    id: 3,
    label: "اسلاگ",
    name: "slug",
  },
  {
    id: 4,
    label: "برند",
    name: "brand",
  },
  {
    id: 5,
    label: "قیمت",
    name: "price",
  },
  {
    id: 6,
    label: "تخفیف",
    name: "discount",
  },
  {
    id: 7,
    label: "قیمت روی تخفیف",
    name: "offPrice",
  },
  {
    id: 8,
    label: "موجودی",
    name: "countInStock",
  },
  {
    id: 9,
    label: "لینک عکس محصول",
    name: "imageLink",
  },
];

const ProductForm = ({
  onSubmit,
  tags,
  setTags,
  categories,
  loading,
  onChange,
  formData,
  selectCategory,
  setSelectCategory,
}) => {
  return (
    <form className="space-y-4 overflow-y-auto h-[300px]" onSubmit={onSubmit}>
      {productsFormData.map((item) => {
        return (
          <TextField
            key={item.id}
            label={item.label}
            name={item.name}
            value={formData[item.name] ?? ""}
            onChange={onChange}
            placeholder={item.label}
          />
        );
      })}
      <div>
        <label className="mb-2 block" htmlFor="tags">
          تگ محصولات
        </label>
        <TagsInput id="tags" value={tags} onChange={setTags} name="tags" />
      </div>
      <SelectField
        name={"category"}
        options={categories}
        value={selectCategory || ""}
        onChange={setSelectCategory}
        label={"دسته بندی"}
      />
      <button className="btn btn-primary text-white text-lg h-[45px] w-full btn-active">
        {loading ? <Loading /> : "تایید"}
      </button>
    </form>
  );
};

export default ProductForm;
