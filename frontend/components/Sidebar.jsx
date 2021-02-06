import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import Icon from "../icons";

export default function Sidebar() {
  const [showMobileMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <MobileHeader>
        <Icon name="menu" onClick={() => setShowMenu(true)} />
        <div className="logo">
          <img alt="logo" src="/images/logo.png" />
        </div>
      </MobileHeader>
      <SideBarContainer showMobileMenu={showMobileMenu}>
        <LogoSection>
          <div className="img-placeholder">
            <img alt="logo" src="/images/logo.png" />
          </div>
        </LogoSection>
        <nav>
          <NavList>
            <NavListItem>
              <NavLink href="/">
                <a>
                  <Icon width={25} fill="white" name="create_resume" />
                  <NavItemText>My Resumes</NavItemText>
                </a>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/templates">
                <a>
                  <Icon width={25} fill="white" name="templates" />
                  <NavItemText>Templates</NavItemText>
                </a>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/design">
                <a>
                  <Icon width={25} fill="white" name="create_resume" />
                  <NavItemText>Design</NavItemText>
                </a>
              </NavLink>
            </NavListItem>
          </NavList>
        </nav>
      </SideBarContainer>
    </>
  );
}

const SideBarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.primary[700]};
  display: ${({ showMobileMenu }) => (showMobileMenu ? "block" : "none")};
  position: absolute;
  z-index: 11;
  width: 82%;
  height: 100vh;
  ${({ theme }) => theme.mediaQueries.tablet} {
    position: relative;
    display: block;
    width: 15rem;
    min-width: 15rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
`;

const NavListItem = styled.li`
  a {
    padding: 20px 2rem;
    display: flex;
    align-items: center;
    color: #fff;
  }
  a.active {
    background-color: ${({ theme }) => theme.colors.primary[800]};
  }
  a:not(.active):hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

const NavItemText = styled.span`
  padding-left: 1.5rem;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 11px;
  .active & {
    font-weight: 600;
  }
`;

const LogoSection = styled.div`
  height: max-content;
  padding: 10px;
  & > div.img-placeholder {
    width: 100%;
    height: auto;
    display: flex;
    padding: 10px 0;
    img {
      width: 115px;
      height: 60px;
      margin: auto;
    }
  }
`;

const MobileHeader = styled.div`
  top: 0;
  width: 100%;
  height: 50px;
  position: absolute;
  background: #fff;
  padding: 0 12px;
  display: flex;
  align-items: center;
  z-index: 10;
  .logo {
    width: 70px;
    margin: auto;
    padding-right: 20px;
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    display: none;
  }
`;
