import styled, { css } from 'styled-components';

const Aside = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 300px;
  height: 100%;
  border-right: 1px solid #A9B2C9;
  box-sizing: border-box;
  padding-left: 64px;
`;
const Logo = styled.div`
  padding-top: 56px;
  padding-bottom: 88px;
  color: #29275F;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 2px;
`;
const Nav = styled.nav`
`;
const Icon = styled.span`
  font-size: 24px;
  color: #D3D2DD;
  margin-right: 24px;
  vertical-align: middle;
  transition: all 0.3s ease;
`;
const Text = styled.span`
  color: #D3D2DD;
  transition: all 0.3s ease;
`;
const NavLink = styled.div`
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  vertical-align: middle;

  a {
    width: 100%;
  }

  :after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2px;
    width:3px;
    height: 24px;
    transform: translateY(-50%);
    background-color: #FF808B;
    opacity: 0;
    transition: all 0.3s ease;
  }

  :hover {
    ${Icon} {
      color: #FF808B;
    }
    ${Text} {
      color: #141529;
      font-weight: 700;
    }
  }

  ${({ active }) => active && css`
    ${Icon} {
      color: #FF808B;
    }
    ${Text} {
      color: #141529;
      font-weight: 700;
    }
    :after {
      opacity: 1;
    }
  `}
`;

export {
  Aside,
  Logo,
  Nav,
  NavLink,
  Icon,
  Text,
}