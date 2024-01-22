import TextField from "@/ui/TextField";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Loading from "@/ui/Loading";
import RadioInput from "@/ui/RadioInput";
import Select from "react-select";

const CouponForm = ({
  onSubmit,
  formData,
  onChange,
  loading,
  expireDate,
  setExpireDate,
  products,
  onChangeSelect,
  defaultValue = "",
}) => {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <TextField
        label="کد"
        name="code"
        value={formData.code || ""}
        onChange={onChange}
      />
      <TextField
        label="مقدار"
        name="amount"
        value={formData.amount || ""}
        onChange={onChange}
      />
      <TextField
        label="ظرفیت"
        name="usageLimit"
        value={formData.usageLimit || ""}
        onChange={onChange}
      />

      <div>
        <label htmlFor="products" className="mb-2 block">
          شامل محصولات
        </label>
        <Select
          instanceId="products"
          isMulti
          onChange={onChangeSelect}
          options={products}
          getOptionLabel={(option) => option.title}
          getOptionValue={(option) => option._id}
          defaultValue={defaultValue}
        />
      </div>
      <div className="flex items-center gap-x-1 w-full">
        <div className="text-right w-1/2">
          <span className="mb-2 block">نوع کد تخفیف</span>
          <div className="flex items-center gap-x-4">
            <RadioInput
              checked={formData.type === "percent"}
              id="percent-type"
              name="type"
              label="درصد"
              value="percent"
              onChange={onChange}
            />
            <RadioInput
              checked={formData.type === "fixedProduct"}
              id="fixedProduct-type"
              name="type"
              label="قیمت ثابت"
              value="fixedProduct"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="text-right w-1/2">
          <span className="mb-2 block">تاریخ انقضا</span>
          <DatePicker
            inputClass="input input-bordered w-full focus:bg-white bg-gray-200 text-center transition-all duration-300 outline-none"
            style={{
              width: "100%",
            }}
            value={expireDate}
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-left"
            onChange={(date) => setExpireDate(date)}
          />
        </div>
      </div>
      <button className="btn btn-primary text-white text-lg h-[45px] w-full">
        {loading ? <Loading /> : "تایید"}
      </button>
    </form>
  );
};

export default CouponForm;
