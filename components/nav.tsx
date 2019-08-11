import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  /* color: #067df7; */
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 13px;
`;

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map(link => {
  return { ...link, key: `nav-link-${link.href}-${link.label}` };
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link passHref href="/">
          <StyledLink>Home</StyledLink>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <StyledLink href={href}>{label}</StyledLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;

/*
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
*/
