"use client";

import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useT } from "@/i18n/t";

const PaymentForm = () => {
  const t = useT();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const getErrorText = (field: keyof PaymentFormInputs) => {
    const err = errors[field];
    if (!err) return "";

    if (field === "cardHolder") {
      if (err.type === "too_small") return t("errors.required");
    }

    if (field === "cardNumber") {
      if (err.type === "too_small" || err.type === "too_big")
        return t("errors.cardNumberLength");
    }

    if (field === "expirationDate") {
      // regex mismatch usually comes as "invalid_string"
      return t("errors.expFormat");
    }

    if (field === "cvv") {
      if (err.type === "too_small" || err.type === "too_big")
        return t("errors.cvvLength");
    }

    return t("errors.required");
  };

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = () => {
    // later: submit payment
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="cardHolder" className="text-xs text-gray-500 font-medium">
          {t("common.nameOnCard")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder={t("placeholders.cardHolder")}
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{getErrorText("cardHolder")}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cardNumber" className="text-xs text-gray-500 font-medium">
          {t("common.cardNumber")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder={t("placeholders.cardNumber")}
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{getErrorText("cardNumber")}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="expirationDate" className="text-xs text-gray-500 font-medium">
          {t("common.expirationDate")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="expirationDate"
          placeholder={t("placeholders.expirationDate")}
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">{getErrorText("expirationDate")}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          {t("common.cvv")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cvv"
          placeholder={t("placeholders.cvv")}
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{getErrorText("cvv")}</p>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
        <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
        <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        {t("common.checkout")}
        <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
