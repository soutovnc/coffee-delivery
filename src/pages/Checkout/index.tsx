import { FormProvider, useForm } from "react-hook-form";
// import { CompleteOrder } from "./components/CompleteOrder";
import { useCart } from "../../hooks/useCart";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { CheckoutPageContainer } from "./styles";
import { CompleteOrder } from "./components/CompleteOrder";
import { SelectedCoffee } from "./components/SelectedCoffee";

enum PaymentMethod {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData;

export function CheckoutPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    }
  })

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutPageContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrder />
        <SelectedCoffee />
      </CheckoutPageContainer>
    </FormProvider>
  )
}
