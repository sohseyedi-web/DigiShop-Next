"use client";
import { useState } from "react";
import CompleteProfile from "./CompleteProfile";
import CheckOTP from "./CheckOTP";
import SendOTP from "./SendOTP";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getOTP } from "@/services/authServices";

const AuthContainer = () => {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09168383108");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });

  const sendOtpHanlder = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data?.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTP
            onSubmit={sendOtpHanlder}
            loading={isPending}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTP
            onResend={sendOtpHanlder}
            onStep={setStep}
            phone={phoneNumber}
          />
        );
      case 3:
        return <CompleteProfile />;
      default:
        return null;
    }
  };

  return <div className="w-full py-2">{renderSteps()}</div>;
};

export default AuthContainer;
