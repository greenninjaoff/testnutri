import { z } from "zod";

export type LocaleKey = "ru" | "uz" | "en";

export type ProductI18n = {
  name?: string;
  description?: string;
  tagline?: string;
};

export type ProductVariant = {
  sku: string;                // unique per variant
  flavorKey?: string;         // optional: used like "Double_Chocolate"
  netWeight?: string;         // "40g", "700g", etc
  price: number | null;       // can be null in seed data
  image?: string;

  i18n: Partial<Record<LocaleKey, ProductI18n>>;
};

export type ProductType = {
  id: number;
  baseName: string;
  category: string;
  type: string;
  series: string;

  netWeightOptions: string[];

  commonI18n: Partial<Record<LocaleKey, { note?: string }>>;

  variants: ProductVariant[];
};

export type CartItemType = {
  productId: number;
  sku: string;
  quantity: number;

  // snapshot fields for UI
  name: string;
  price: number;              // normalize null → 0 at add time
  image?: string;
  netWeight?: string;
  flavorKey?: string;

  // optional metadata for filtering/display
  category?: string;
  type?: string;
  series?: string;
};

export type CartItemsType = CartItemType[];

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type AddToCartInput = Omit<CartItemType, "quantity"> & {
  quantity?: number;
};

export type CartStoreActionsType = {
  addToCart: (item: AddToCartInput) => void;
  removeFromCart: (item: Pick<CartItemType, "productId" | "sku">) => void;
  updateQuantity: (
    item: Pick<CartItemType, "productId" | "sku">,
    quantity: number
  ) => void;
  clearCart: () => void;
};

/* =======================
   FORMS (UNCHANGED)
   ======================= */

export const shippingFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phone: z
    .string()
    .min(7)
    .max(10)
    .regex(/^\d+$/),
  address: z.string().min(1),
  city: z.string().min(1),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1),
  cardNumber: z.string().min(16).max(16),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/),
  cvv: z.string().min(3).max(3),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;