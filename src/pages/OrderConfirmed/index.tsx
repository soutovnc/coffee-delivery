import confirmedOrderImg from "../../assets/hero-order-confirmed.svg";
import { useTheme } from "styled-components";
import { OrderData } from "../Checkout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IntroItens } from "../../components/IntroItens";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { paymentMethods } from "../Checkout/components/CompleteOrder/PaymentMethodOption";
import { ForecastDeliveryText, LocaleDeliveryText, OrderConfirmedContainer, OrderDetailsContainer, PaymentDeliveryText, Subtittle, TitleText } from "./styles";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const { colors } = useTheme();
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer>
      <div>
        <TitleText>Uhul! Pedido confirmado</TitleText>
        <Subtittle>
          Agora é só aguardar que logo o café chegará até você!
        </Subtittle>
      </div>
      <section>
        <OrderDetailsContainer>
          <IntroItens
            icon={<MapPin weight="fill" />}
            iconBg={colors["purple"]}
            text={
              <LocaleDeliveryText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </LocaleDeliveryText>
            }
          />
          <IntroItens
            icon={<Clock weight="fill" />}
            iconBg={colors["yellow"]}
            text={
              <ForecastDeliveryText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </ForecastDeliveryText>
            }
          />
          <IntroItens
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["yellow-dark"]}
            text={
              <PaymentDeliveryText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </PaymentDeliveryText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderImg} />
      </section>
    </OrderConfirmedContainer>
  )
}
