import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styles/Button.styles';

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <div>
        Home Page
      </div>
      <StyledButton onClick={() => navigate('order-summary')}>Place Order</StyledButton>
    </>
  );
}

export default Home;
