import React from "react";
import styled from "styled-components";
import NavLink from "../components/NavLink";
import Image from "next/image";
import Menu from "../assets/Icons/menu.svg";
import ResumeIcon from "../assets/Icons/resume.svg";
import TemplatesIcon from "../assets/Icons/templates.svg";

export default function Sidebar() {
  const [showMobileMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <MobileHeader>
        <StyledMenuIcon onClick={() => setShowMenu(true)} />
        <div className="logo">
          <Image alt="logo" src="/images/logo.png" width={115} height={70} />
        </div>
      </MobileHeader>
      <SideBarContainer showMobileMenu={showMobileMenu}>
        <LogoSection>
          <div className="img-placeholder">
            <Image alt="logo" src="/images/logo.png" width={230} height={140} />
          </div>
        </LogoSection>
        <nav>
          <NavList>
            <NavListItem>
              <NavLink href="/">
                <a>
                  <NavItemIcon as={ResumeIcon} />
                  <NavItemText>My Resumes</NavItemText>
                </a>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/templates">
                <a>
                  <NavItemIcon as={TemplatesIcon} />
                  <NavItemText>Templates</NavItemText>
                </a>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/design">
                <a>
                  <NavItemIcon as={ResumeIcon} />
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
  @media ${({ theme }) => theme.screenSize.tablet} {
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

const NavItemIcon = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  fill: #fff;
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
  background: #fff;
  height: 6rem;
  & > div.img-placeholder {
    width: 5rem;
    height: 3rem;
    margin: auto;
    padding-top: 14px;
  }
`;

const StyledMenuIcon = styled(Menu)`
  width: 1.7rem;
  height: 1.7rem;
  color: #000;
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
  @media ${({ theme }) => theme.screenSize.tablet} {
    display: none;
  }
`;
