// app/cart/page.tsx
import { Suspense } from "react";
import CartClient from "./CartClient";

function CartFallback() {
  return <div className="p-6">Loading cart...</div>;
}

export default function CartPage() {
  return (
    <Suspense fallback={<CartFallback />}>
      <CartClient />
    </Suspense>
  );
}
