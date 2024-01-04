import TextField from "@/ui/TextField";
const SendOTP = ({ loading, onSubmit, onChange, phoneNumber }) => {
  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <h4 className="text-xl text-gray-800">ورورد / ثبت نام</h4>
      <TextField
        label={"شماره موبایل"}
        onChange={onChange}
        name={"phone"}
        value={phoneNumber}
        placeholder="شماره موبایل را وارد کنید"
      />
      <button className="mt-2 btn btn__primary">
        {loading ? "لطفا صبر کنید" : "ارسال کد"}
      </button>
    </form>
  );
};

export default SendOTP;
