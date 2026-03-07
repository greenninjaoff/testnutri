"use client";

import DeliveryType from "./DeliveryType";
import AddressBlock from "./AddressBlock";
import CourierInstructionsRow from "./CourierInstructionsRow";
import PhoneRow from "./PhoneRow";
import LeaveAtDoorToggle from "./LeaveAtDoorToggle";
import PromoRow from "./PromoRow";
import PaymentSection from "./PaymentSection";
import PriceDetails from "./PriceDetails";
import StickyOrderBar from "./StickyOrderBar";
import CourierInstructionsSheet from "./sheets/CourierInstructionsSheet";
import AddressSheet from "./sheets/AddressSheet";
import PhoneSheet from "./sheets/PhoneSheet";
import PromoSheet from "./sheets/PromoSheet";
import CardSheet from "./sheets/CardSheet";

const OrderStep2 = () => {
  return (
    <div className="flex flex-col gap-4 pb-28">

      <DeliveryType />
      <AddressBlock />
      <CourierInstructionsRow />
      <PhoneRow />
      <LeaveAtDoorToggle />
      <PromoRow />
      <PaymentSection />
      <PriceDetails />

      <StickyOrderBar />

      <CourierInstructionsSheet />
      <AddressSheet />
      <PhoneSheet />
      <PromoSheet />
      <CourierInstructionsSheet />
      <CardSheet />
    </div>
  );
};

export default OrderStep2;