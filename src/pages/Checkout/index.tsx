import { FormProvider } from "react-hook-form";
import { CompleteOrder } from "./components/CompleteOrder";
import { useCart } from "../../hooks/useCart";

export function CheckoutPage() {

  return (
    <FormProvider>
      <CheckoutPageContainer>
        <CheckoutPage />


      </CheckoutPageContainer>
    </FormProvider>
  )
}
