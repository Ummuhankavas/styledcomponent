import Button from "./styles/Button.styled";
import StyledHeader from "./styles/Header.styled";


const Header = () => {
  return (
    <div>
        <StyledHeader>
            <Button color='#A62440'>Aply Courses</Button>
            <Button bg='#A62440'>Talk to Adviser</Button>
        </StyledHeader>
    </div>
  );
};

export default Header;