import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { CheckoutPage } from "./pages/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home /> } />
        <Route path="/checkout" element={<CheckoutPage /> } />
      </Route>
    </Routes>
  )
}
