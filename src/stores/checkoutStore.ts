"use client";

import { create } from "zustand";

export type DeliveryType = "standard" | "priority";
export type PaymentMethod = "card" | "payme" | "click" | "cash";

export type SheetType =
  | "address"
  | "promo"
  | "phone"
  | "courier"
  | "card"
  | null;

export type SavedCard = {
  id: string;
  maskedNumber: string;
  holder?: string;
  brand?: string;
};

export type SavedAddress = {
  id: string;
  title: string;
  subtitle?: string;
};

type PriceDetails = {
  itemsTotal: number;
  deliveryFee: number;
  serviceFee: number;
  priorityFee: number;
  total: number;
};

type CheckoutStore = {
  // delivery
  deliveryType: DeliveryType;
  setDeliveryType: (type: DeliveryType) => void;

  // saved addresses
  savedAddresses: SavedAddress[];
  setSavedAddresses: (addresses: SavedAddress[]) => void;
  addSavedAddress: (address: SavedAddress) => void;
  removeSavedAddress: (id: string) => void;

  selectedAddressId: string | null;
  setSelectedAddressId: (id: string | null) => void;
  selectSavedAddress: (id: string) => void;

  // selected address / details
  address: string | null;
  entrance: string;
  floor: string;
  apartment: string;
  doorCode: string;

  setAddress: (value: string) => void;
  setEntrance: (value: string) => void;
  setFloor: (value: string) => void;
  setApartment: (value: string) => void;
  setDoorCode: (value: string) => void;

  // courier
  courierInstructions: string;
  setCourierInstructions: (value: string) => void;

  // phone
  phone: string;
  setPhone: (value: string) => void;

  // options
  leaveAtDoor: boolean;
  toggleLeaveAtDoor: () => void;
  setLeaveAtDoor: (value: boolean) => void;

  // promo
  promoCode: string;
  setPromoCode: (value: string) => void;

  // payment
  paymentMethod: PaymentMethod;
  setPaymentMethod: (value: PaymentMethod) => void;

  savedCards: SavedCard[];
  setSavedCards: (cards: SavedCard[]) => void;
  addSavedCard: (card: SavedCard) => void;
  removeSavedCard: (id: string) => void;

  selectedCardId: string | null;
  setSelectedCardId: (id: string | null) => void;

  isAddingNewCard: boolean;
  setIsAddingNewCard: (value: boolean) => void;

  selectSavedCard: (id: string) => void;
  selectAddNewCard: () => void;
  selectPayme: () => void;
  selectClick: () => void;
  selectCash: () => void;

  needChange: boolean;
  toggleNeedChange: () => void;
  setNeedChange: (value: boolean) => void;

  changeAmount: string;
  setChangeAmount: (value: string) => void;

  // price
  itemsTotal: number;
  deliveryFee: number;
  serviceFee: number;
  priorityFee: number;
  total: number;
  setPriceDetails: (data: PriceDetails) => void;

  // ui
  openSheet: SheetType;
  open: (sheet: SheetType) => void;
  close: () => void;

  // utils
  resetCheckout: () => void;
};

const initialState = {
  deliveryType: "standard" as DeliveryType,

  // addresses
  savedAddresses: [
    {
      id: "1",
      title: "Ayriq Bol'g', ko'chasi, 7",
      subtitle: "Home",
    },
    {
      id: "2",
      title: "Amir Temur avenue, 15",
      subtitle: "Office",
    },
  ] as SavedAddress[],
  selectedAddressId: "1" as string | null,

  address: "Ayriq Bol'g', ko'chasi, 7" as string | null,
  entrance: "",
  floor: "",
  apartment: "",
  doorCode: "",

  courierInstructions: "",
  phone: "",

  leaveAtDoor: false,

  promoCode: "",

  paymentMethod: "card" as PaymentMethod,
  savedCards: [
    {
      id: "1",
      maskedNumber: "8600 12•• •••• 3456",
      brand: "UzCard",
    },
    {
      id: "2",
      maskedNumber: "9860 01•• •••• 7788",
      brand: "Humo",
    },
  ] as SavedCard[],
  selectedCardId: null,
  isAddingNewCard: true,

  needChange: false,
  changeAmount: "",

  itemsTotal: 0,
  deliveryFee: 0,
  serviceFee: 0,
  priorityFee: 0,
  total: 0,

  openSheet: null as SheetType,
};

const useCheckoutStore = create<CheckoutStore>((set, get) => ({
  ...initialState,

  // delivery
  setDeliveryType: (type) => set({ deliveryType: type }),

  // saved addresses
  setSavedAddresses: (addresses) =>
    set((state) => {
      const hasSelectedAddress =
        !!state.selectedAddressId &&
        addresses.some((a) => a.id === state.selectedAddressId);

      if (hasSelectedAddress) {
        const selected = addresses.find((a) => a.id === state.selectedAddressId);

        return {
          savedAddresses: addresses,
          address: selected?.title ?? state.address,
        };
      }

      if (addresses.length === 0) {
        return {
          savedAddresses: addresses,
          selectedAddressId: null,
          address: null,
        };
      }

      return {
        savedAddresses: addresses,
        selectedAddressId: addresses[0].id,
        address: addresses[0].title,
      };
    }),

  addSavedAddress: (addressItem) =>
    set((state) => ({
      savedAddresses: [...state.savedAddresses, addressItem],
    })),

  removeSavedAddress: (id) =>
    set((state) => {
      const nextAddresses = state.savedAddresses.filter((a) => a.id !== id);
      const removedSelected = state.selectedAddressId === id;

      if (removedSelected) {
        if (nextAddresses.length === 0) {
          return {
            savedAddresses: nextAddresses,
            selectedAddressId: null,
            address: null,
          };
        }

        return {
          savedAddresses: nextAddresses,
          selectedAddressId: nextAddresses[0].id,
          address: nextAddresses[0].title,
        };
      }

      return { savedAddresses: nextAddresses };
    }),

  setSelectedAddressId: (id) => set({ selectedAddressId: id }),

  selectSavedAddress: (id) => {
    const selected = get().savedAddresses.find((a) => a.id === id);
    set({
      selectedAddressId: id,
      address: selected?.title ?? null,
    });
  },

  // selected address / details
  setAddress: (value) => set({ address: value }),
  setEntrance: (value) => set({ entrance: value }),
  setFloor: (value) => set({ floor: value }),
  setApartment: (value) => set({ apartment: value }),
  setDoorCode: (value) => set({ doorCode: value }),

  // courier
  setCourierInstructions: (value) => set({ courierInstructions: value }),

  // phone
  setPhone: (value) => set({ phone: value }),

  // options
  toggleLeaveAtDoor: () =>
    set((state) => ({ leaveAtDoor: !state.leaveAtDoor })),
  setLeaveAtDoor: (value) => set({ leaveAtDoor: value }),

  // promo
  setPromoCode: (value) => set({ promoCode: value }),

  // payment
  setPaymentMethod: (value) => set({ paymentMethod: value }),

  setSavedCards: (cards) =>
    set((state) => {
      const hasSelectedCard =
        !!state.selectedCardId &&
        cards.some((c) => c.id === state.selectedCardId);

      if (state.paymentMethod !== "card") {
        return { savedCards: cards };
      }

      if (hasSelectedCard) {
        return {
          savedCards: cards,
          isAddingNewCard: false,
        };
      }

      if (cards.length === 0) {
        return {
          savedCards: cards,
          selectedCardId: null,
          isAddingNewCard: true,
        };
      }

      return {
        savedCards: cards,
        selectedCardId: null,
        isAddingNewCard: true,
      };
    }),

  addSavedCard: (card) =>
    set((state) => ({
      savedCards: [...state.savedCards, card],
    })),

  removeSavedCard: (id) =>
    set((state) => {
      const nextCards = state.savedCards.filter((card) => card.id !== id);
      const removedSelected = state.selectedCardId === id;

      if (removedSelected) {
        return {
          savedCards: nextCards,
          selectedCardId: null,
          isAddingNewCard: true,
          paymentMethod: "card" as PaymentMethod,
        };
      }

      return { savedCards: nextCards };
    }),

  setSelectedCardId: (id) => set({ selectedCardId: id }),

  setIsAddingNewCard: (value) => set({ isAddingNewCard: value }),

  selectSavedCard: (id) =>
    set({
      paymentMethod: "card",
      selectedCardId: id,
      isAddingNewCard: false,
      needChange: false,
      changeAmount: "",
    }),

  selectAddNewCard: () =>
    set({
      paymentMethod: "card",
      selectedCardId: null,
      isAddingNewCard: true,
      needChange: false,
      changeAmount: "",
    }),

  selectPayme: () =>
    set({
      paymentMethod: "payme",
      selectedCardId: null,
      isAddingNewCard: false,
      needChange: false,
      changeAmount: "",
    }),

  selectClick: () =>
    set({
      paymentMethod: "click",
      selectedCardId: null,
      isAddingNewCard: false,
      needChange: false,
      changeAmount: "",
    }),

  selectCash: () =>
    set({
      paymentMethod: "cash",
      selectedCardId: null,
      isAddingNewCard: false,
    }),

  setNeedChange: (value) => set({ needChange: value }),

  toggleNeedChange: () =>
    set((state) => ({
      needChange: !state.needChange,
      changeAmount: state.needChange ? "" : state.changeAmount,
    })),

  setChangeAmount: (value) => set({ changeAmount: value }),

  // price
  setPriceDetails: (data) => set(data),

  // ui
  open: (sheet) => set({ openSheet: sheet }),
  close: () => set({ openSheet: null }),

  // utils
  resetCheckout: () => set({ ...initialState }),
}));

export default useCheckoutStore;