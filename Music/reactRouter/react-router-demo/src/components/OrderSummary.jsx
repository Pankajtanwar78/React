import { StyledButton } from "./styles/Button.styles";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {

  const navigate = useNavigate()

  return (
    <>
      <div>
        Order Confirmed!   
      </div>
      <StyledButton onClick={() => navigate(-1)}>Back</StyledButton>
    </>
  );
}

export default OrderSummary;
