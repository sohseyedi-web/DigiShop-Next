"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { checkOTP } from "@/services/authServices";
let RESEND_TIME = 90;

const CheckOTP = ({ phoneNumber, onStep, onResend }) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: checkOTP,
  });


  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) return clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return onStep(3);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={checkOtpHandler}>
      <h4 className="text-xl text-gray-800 font-bold">کد تایید را وارد کنید</h4>
      <p className="my-2 m-0 font-medium">
        کد به شماره {phoneNumber} ارسال شده{" "}
        <span
          onClick={() => onStep((s) => s - 1)}
          className="font-bold cursor-pointer text-gray-800 underline"
        >
          بازگشت؟
        </span>
      </p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        inputStyle={{
          width: "11%",
          height: "45px",
          border: "1px solid #aaa",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
        }}
        containerStyle="flex flex-row-reverse justify-between"
        renderInput={(props) => <input type="number" {...props} />}
      />
      {time > 0 ? (
        <>
          <button className="mt-2 btn btn-active btn-primary w-full text-lg h-[45px] text-white">
            {isPending ? "لطفا صبر کنید" : "ثبت کد"}
          </button>
          <p className="mt-2 text-center text-gray-800">
            {time} ثانیه تا ارسال مجدد کد
          </p>
        </>
      ) : (
        <button onClick={onResend} className="mt-2 btn btn-active btn-info w-full text-lg h-[45px] text-white">
          ارسال مجدد کد؟
        </button>
      )}
    </form>
  );
};

export default CheckOTP;
