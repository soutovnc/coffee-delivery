import { FormProvider } from "react-hook-form";
import { CompleteOrder } from "./components/CompleteOrder";

export function CheckoutPage() {
  return (
    <FormProvider>
      <CheckoutPageContainer>
        <CheckoutPage />
        
      </CheckoutPageContainer>
    </FormProvider>
  )
}
