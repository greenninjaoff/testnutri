"use client";

import useCheckoutStore from "@/stores/checkoutStore";
import { MapPin, ChevronRight } from "lucide-react";

const inputClassName =
  "w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-lime-400";

const AddressBlock = () => {
  const address = useCheckoutStore((s) => s.address);
  const open = useCheckoutStore((s) => s.open);

  const entrance = useCheckoutStore((s) => s.entrance);
  const setEntrance = useCheckoutStore((s) => s.setEntrance);

  const floor = useCheckoutStore((s) => s.floor);
  const setFloor = useCheckoutStore((s) => s.setFloor);

  const apartment = useCheckoutStore((s) => s.apartment);
  const setApartment = useCheckoutStore((s) => s.setApartment);

  const doorCode = useCheckoutStore((s) => s.doorCode);
  const setDoorCode = useCheckoutStore((s) => s.setDoorCode);

  return (
    <section className="rounded-[28px] bg-[#f5f5f3] p-4 sm:p-5">
      <h2 className="mb-4 text-[18px] font-semibold text-neutral-900">
        Where to
      </h2>

      <button
        type="button"
        onClick={() => open("address")}
        className="mb-4 flex w-full items-start justify-between rounded-2xl bg-white px-4 py-4 text-left transition hover:bg-neutral-50"
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
            <MapPin className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-900">
              {address || "Select address"}
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Choose delivery location
            </p>
          </div>
        </div>

        <ChevronRight className="mt-1 h-5 w-5 text-neutral-400" />
      </button>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-2 block text-xs font-medium text-neutral-500">
            Entrance
          </label>
          <input
            type="text"
            value={entrance}
            onChange={(e) => setEntrance(e.target.value)}
            placeholder="6"
            className={inputClassName}
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-neutral-500">
            Door phone
          </label>
          <input
            type="text"
            value={doorCode}
            onChange={(e) => setDoorCode(e.target.value)}
            placeholder="2"
            className={inputClassName}
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-neutral-500">
            Apartment
          </label>
          <input
            type="text"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            placeholder="2"
            className={inputClassName}
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-neutral-500">
            Floor
          </label>
          <input
            type="text"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            placeholder="2"
            className={inputClassName}
          />
        </div>
      </div>
    </section>
  );
};

export default AddressBlock;