import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/products-slice";
import adminOrderSlice from "./admin/order-slice";

import shopProductsSlice from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";
import commonFeatureReducer from "./common-slice";
import shopAddressSlice from "./shop/address-slice";
import shopOrderSlice from "./shop/order-slice";
import adminUsersReducer from "./admin/user-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,
    adminUsers: adminUsersReducer,
    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    commonFeature: commonFeatureReducer,
    shopAddress:shopAddressSlice,
     shopOrder: shopOrderSlice,
  },
});

export default store;