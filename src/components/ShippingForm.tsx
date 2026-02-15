"use client";

import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useT } from "@/i18n/t";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const t = useT();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const getErrorText = (field: keyof ShippingFormInputs) => {
    const err = errors[field];
    if (!err) return "";

    // Zod error types arrive as: err.type like "too_small", "invalid_string", "invalid_format", "custom"
    if (field === "email") {
      // email format
      if (err.type === "invalid_string") return t("errors.invalidEmail");
    }

    if (field === "phone") {
      // regex / digits
      if (err.type === "invalid_string") return t("errors.phoneDigits");
      // min/max length
      if (err.type === "too_small" || err.type === "too_big")
        return t("errors.phoneLength");
    }

    // generic required / too_small for min(1)
    if (err.type === "too_small") return t("errors.required");

    return t("errors.required");
  };

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleShippingForm)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          {t("common.name")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="name"
          placeholder={t("placeholders.name")}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{getErrorText("name")}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          {t("common.email")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="email"
          id="email"
          placeholder={t("placeholders.email")}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{getErrorText("email")}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          {t("common.phone")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="phone"
          placeholder={t("placeholders.phone")}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{getErrorText("phone")}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          {t("common.address")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="address"
          placeholder={t("placeholders.address")}
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{getErrorText("address")}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          {t("common.city")}
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="city"
          placeholder={t("placeholders.city")}
          {...register("city")}
        />
        {errors.city && (
          <p className="text-xs text-red-500">{getErrorText("city")}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        {t("common.continue")}
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default ShippingForm;