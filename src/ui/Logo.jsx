import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const Logo = () => {

    const isDark = localStorage.getItem("isDarkMode");

    return (
        <StyledLogo>
            <Img src={isDark ? '/logo-white.png' : '/logo.png'} alt="Logo" />
        </StyledLogo>
    );
};

export default Logo;