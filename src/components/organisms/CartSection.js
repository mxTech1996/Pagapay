"use client";
import { useState } from "react";
import {
  CartSectionV2,
  Button,
  Payments,
  PaymentsV2,
  CartSection,
} from "ecommerce-mxtech";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { pageName } from "@/data";

const validDiscountCode = ["CAPAPAY10", "CAPAPAY20"];
const colorRed = "#1d4ed8";

const CartSectionComponent = () => {
  const [step, setStep] = useState("cart"); // cart | payment
  const [isValidDiscount, setIsValidDiscount] = useState(false);
  const router = useRouter();

  const onChangeDiscount = (value) => {
    setIsValidDiscount(validDiscountCode.includes(value));
  };

  return (
    <div className="w-full flex justify-center mt-10 mb-20">
      <div className="container px-4">
        <Button
          value="back"
          type="default"
          onClick={() => {
            if (step === "payment") {
              setStep("cart");
              return;
            }
            router.push("/#products");
          }}
          icon={<FaChevronLeft />}
          iconPosition="start"
          className="corp-btn-secondary flex items-center mb-5 w-28"
        >
          Back
        </Button>
        <div className="corp-surface flex flex-col gap-5 p-4 md:p-6">
          {step === "cart" && (
            <CartSectionV2
              variant="table"
              gridColumns={1}
              withDetails
              inputProps={{
                onInput: (e) => onChangeDiscount(e.target.value),
              }}
              isValidDiscountCode={isValidDiscount}
              totalDiscount={isValidDiscount ? 10 : 0}
              buttonCheckoutProps={{
                onClick: () => setStep(step === "cart" ? "payment" : "cart"),
                label: "Go to pay",
                className: "corp-btn-primary text-white w-full",
                style: {
                  color: "white",
                  backgroundColor: colorRed,
                },
              }}
            />
          )}

          {step === "payment" && (
            <PaymentsV2
              pageName={pageName}
              withCardPay
              isValidDiscountCode={isValidDiscount}
              handleChangeDiscountCode={onChangeDiscount}
              buttonBuyMoreProps={{
                label: "Buy more",
                onClick: () => router.push("/#products"),
              }}
              buttonGoHomeProps={{
                label: "Go home",
                onClick: () => router.push("/"),
              }}
              totalDiscount={isValidDiscount ? 10 : 0}
              buttonBackProps={{
                className: "corp-btn-secondary",
                label: "Back",
              }}
              buttonNextProps={{
                className: "corp-btn-primary text-white",
                style: {
                  color: "white",
                  backgroundColor: colorRed,
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSectionComponent;
