import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import StyledHeader, {Logo, Nav} from "./styles/Header.styled";


const Header = () => {
  return (
    <div>
        <StyledHeader>
           <Container>
            <Nav>
                <Logo src='./images/logo.png'></Logo>
                <div>
                    <Button color='#A62440'>Aply Courses</Button>
                    <Button bg='#A62440'>Talk to Adviser</Button>
                </div>
            </Nav>
           </Container>
            
        </StyledHeader>
    </div>
  );
};

export default Header;