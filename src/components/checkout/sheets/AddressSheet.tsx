"use client";

import BottomSheet from "@/components/ui/BottomSheet";
import useCheckoutStore from "@/stores/checkoutStore";
import { MapPin } from "lucide-react";

const AddressSheet = () => {
    const openSheet = useCheckoutStore((s) => s.openSheet);
    const close = useCheckoutStore((s) => s.close);

    const savedAddresses = useCheckoutStore((s) => s.savedAddresses);
    const selectedAddressId = useCheckoutStore((s) => s.selectedAddressId);
    const setSelectedAddressId = useCheckoutStore((s) => s.setSelectedAddressId);
    const setAddress = useCheckoutStore((s) => s.setAddress);

    const isOpen = openSheet === "address";

    const handleSelect = (id: string, title: string) => {
        setSelectedAddressId(id);
        setAddress(title);
        close();
    };

    return (
        <BottomSheet open={isOpen} onClose={close} title="My addresses">
            <div className="space-y-3">
                {savedAddresses.map((item) => {
                    const active = item.id === selectedAddressId;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => handleSelect(item.id, item.title)}
                            className={`flex w-full items-start justify-between rounded-2xl border bg-white px-4 py-4 text-left transition ${active
                                    ? "border-lime-400 bg-lime-50"
                                    : "border-neutral-200 hover:bg-neutral-50"
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                                    <MapPin className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-neutral-900">
                                        {item.title}
                                    </p>
                                    {item.subtitle && (
                                        <p className="mt-1 text-xs text-neutral-500">
                                            {item.subtitle}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div
                                className={`mt-1 h-5 w-5 rounded-full border-2 ${active
                                        ? "border-lime-500 bg-lime-400"
                                        : "border-neutral-300 bg-white"
                                    }`}
                            />
                        </button>
                    );
                })}

                <button
                    type="button"
                    className="mt-2 h-[44px] w-full rounded-[18px] bg-neutral-100 text-[15px] font-medium text-neutral-900 transition hover:bg-neutral-200 active:scale-[0.995]"
                >
                    Select a different address
                </button>
            </div>
        </BottomSheet>
    );
};

export default AddressSheet;