"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

type NavItem = {
  name: string;
  link: string;
};

interface NavbarProps {
  navItems: NavItem[];
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, className }) => {
  return (
    <NavContainer className={className ?? ""}>
      <NavList>
        {navItems.map((item: NavItem) => (
          <li key={`${item.name}-${item.link}`}>
            <NavLink href={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Navbar;


const NavContainer = styled.nav.attrs({ role: "navigation" })`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavList = styled.ul.attrs({ role: "list" })`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 16px 32px;
  border: 1px solid var(--border, #1e293b);
  border-radius: 16px;
  background: transparent;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  margin: 12px 0;

  li {
    list-style: none;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 0.02em;
  border-radius: 8px;
  transition: transform 0.15s, color 0.15s, background 0.15s;

  &:hover {
    color: #0070f3;
    background: #e6f0ff;
    transform: translateY(-2px) scale(1.05);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 112, 243, 0.08);
  }

  &:focus {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }
`;
