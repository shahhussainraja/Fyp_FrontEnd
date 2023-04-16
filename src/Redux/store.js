import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'

// Seller

import authReducer from "../Pages/sellerProfile/features/auth/authSlice";
import customerReducer from "../Pages/sellerProfile/features/cutomers/customerSlice";
import productReducer from "../Pages/sellerProfile/features/product/productSlice";
import brandReducer from "../Pages/sellerProfile/features/brand/brandSlice";
import pCategoryReducer from "../Pages/sellerProfile/features/pcategory/pcategorySlice";
import colorReducer from "../Pages/sellerProfile/features/color/colorSlice";
import enquiryReducer from "../Pages/sellerProfile/features/enquiry/enquirySlice";
import uploadReducer from "../Pages/sellerProfile/features/upload/uploadSlice";
import couponReducer from "../Pages/sellerProfile/features/coupon/couponSlice";

export default configureStore({
    reducer: {
        //here userDetail is collection or reducer Name all will store
        userDetail : userReducer,
        //Seller
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        pCategory: pCategoryReducer,
        color: colorReducer,
        enquiry: enquiryReducer,
        upload: uploadReducer,
        coupon: couponReducer,
    },
  })    