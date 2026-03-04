import { create } from "zustand";

export type Address = {
  id: string;
  title: string;       // "Tashkent" or "Jiydali Bog’ ko‘chasi..."
  subtitle: string;    // "entrance 6, floor 2, apt -"
};

export type PaymentMethod = "cash" | "card" | "click" | "payme";

type CheckoutState = {
  // Address
  addresses: Address[];
  selectedAddressId?: string;

  // Address details (optional)
  entrance?: string;
  floor?: string;
  apartment?: string;
  doorCode?: string;

  // Other fields
  courierInstructions?: string;
  phone?: string;
  leaveAtDoor: boolean;

  // Promo
  promoCode?: string;

  // Payment
  paymentMethod: PaymentMethod;
  needChange: boolean;
  changeAmount?: string;

  // Card
  selectedCardId?: string; // later
  // UI actions
  setSelectedAddressId: (id: string) => void;
  setField: <K extends keyof Omit<CheckoutState,
    | "addresses"
    | "setSelectedAddressId"
    | "setField"
  >>(key: K, value: CheckoutState[K]) => void;
};

export const useCheckoutStore = create<CheckoutState>((set, get) => ({
  addresses: [
    { id: "addr1", title: "Tashkent", subtitle: "entrance 6, floor 2, apt -" },
    { id: "addr2", title: "Jiydali Bog‘ ko‘chasi, house 7", subtitle: "" },
  ],
  selectedAddressId: "addr1",

  entrance: "",
  floor: "",
  apartment: "",
  doorCode: "",

  courierInstructions: "",
  phone: "",
  leaveAtDoor: false,

  promoCode: "",

  paymentMethod: "cash",
  needChange: false,
  changeAmount: "",

  selectedCardId: undefined,

  setSelectedAddressId: (id) => set({ selectedAddressId: id }),

  setField: (key, value) => set({ [key]: value } as any),
}));