import CouponForm from "@/components/CouponForm";
import { useGetOneCoupon, useUpdateCoupon } from "@/hooks/useCoupons";
import { useGetProducts } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import { useState } from "react";
import { toast } from "react-hot-toast";

const EditCoupon = ({ id, onClose }) => {
  const { data, isLoading } = useGetOneCoupon(id);
  const { isUpdating, updateCoupons } = useUpdateCoupon();
  const { products } = useGetProducts();

  const { coupon } = data || {};

  const [formData, setFormData] = useState({
    code: coupon?.code,
    amount: coupon?.amount,
    usageLimit: coupon?.usageLimit,
    type: coupon?.type,
  });
  const [productIds, setProductIds] = useState(coupon?.productIds);
  const [expireDate, setExpireDate] = useState(new Date(coupon?.expireDate));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      await updateCoupons(
        {
          id: coupon?._id,
          data: {
            ...formData,
            expireDate: new Date(expireDate).toISOString(),
            productIds: productIds.map((p) => p._id),
          },
        },
        {
          onSuccess: () => onClose(),
        }
      );
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (!coupon?._id && isLoading) return <Loading />;

  return (
    <CouponForm
      loading={isUpdating}
      onChange={handleChange}
      onSubmit={handleEditCategory}
      formData={formData}
      expireDate={expireDate}
      onChangeSelect={setProductIds}
      products={products}
      setExpireDate={setExpireDate}
      defaultValue={coupon?.productIds}
    />
  );
};

export default EditCoupon;
