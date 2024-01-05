import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
const SendOTP = ({ loading, onSubmit, onChange, phoneNumber }) => {
  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <h4 className="text-xl text-gray-800 font-bold">ورورد / ثبت نام</h4>
      <TextField
        label={"شماره موبایل"}
        onChange={onChange}
        name={"phoneNumber"}
        value={phoneNumber}
        placeholder="شماره موبایل را وارد کنید"
      />
      <button className="mt-2 btn btn-active btn-primary w-full text-lg h-[45px] text-white">
        {loading ? <Loading/> : "ورود"}
      </button>
      <p className="text-sm my-2 text-center">ورود شما به معنای پذیرش شرایط دیجی شاپ و قوانین حریم‌خصوصی است</p>

    </form>
  );
};

export default SendOTP;
