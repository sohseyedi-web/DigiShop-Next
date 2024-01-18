import React from 'react'
import { useCreateCoupon } from '@/hooks/useCoupons';

const CreateCoupon = () => {

  const {addCoupon,isCreating} = useCreateCoupon()

  return (
    <div>CreateCoupon</div>
  )
}

export default CreateCoupon