import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./components/ui/auth/layout";
import AdminLayout from "./components/ui/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";

import ShoppingLayout from "./components/ui/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";
import PaypalReturnPage from "./pages/shopping-view/paypal-return";
import PaymentSuccessPage from "./pages/shopping-view/payment-success";
import SearchProducts from "./pages/shopping-view/search";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading)
    return (
      <Skeleton className="fixed inset-0 w-screen h-screen bg-black z-50" />
    );

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Land visitors on the store, not a login wall */}
        <Route path="/" element={<Navigate to="/shop/home" replace />} />

        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* Shop layout is NOT gated — public pages render freely */}
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="search" element={<SearchProducts />} />

          {/* Only these require login */}
          <Route
            path="account"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingAccount />
              </CheckAuth>
            }
          />
          <Route
            path="checkout"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingCheckout />
              </CheckAuth>
            }
          />
          <Route
            path="paypal-return"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <PaypalReturnPage />
              </CheckAuth>
            }
          />
          <Route
            path="payment-success"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <PaymentSuccessPage />
              </CheckAuth>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnauthPage />} />
      </Routes>
    </div>
  );
}

export default App;
