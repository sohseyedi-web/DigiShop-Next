import React, { useState } from "react";
import { useCreateCoupon } from "@/hooks/useCoupons";
import { useGetProducts } from "@/hooks/useProducts";
import CouponForm from "@/components/CouponForm";
import { toast } from "react-hot-toast";

const CreateCoupon = ({ onClose }) => {
  const { addCoupon, isCreating } = useCreateCoupon();
  const { products } = useGetProducts();
  const [formData, setFormData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
    type: "percent",
  });
  const [productIds, setProductIds] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addCoupon(
        {
          ...formData,
          expireDate: new Date(expireDate).toISOString(),
          productIds: productIds.map((p) => p._id),
        },
        {
          onSuccess: () => onClose(),
        }
      );
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <CouponForm
      formData={formData}
      onChange={handleFormChange}
      onSubmit={handleSubmit}
      loading={isCreating}
      expireDate={expireDate}
      setExpireDate={setExpireDate}
      products={products}
      onChangeSelect={setProductIds}
    />
  );
};

export default CreateCoupon;
