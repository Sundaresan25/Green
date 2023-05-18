import React from "react";
import { styled } from "@mui/system";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dbdde2;
  padding: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Menu = styled("ul")`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const MenuItem = styled("li")`
  padding: 10px;
  margin: 0;
  color: black;
  border-top: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #f50057;
  }
`;

const LanguageSelect = styled("select")`
  background: #f5f5f9;
  border: none;
  padding: 0.5rem;
  margin-right: 1rem;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const SocialIcons = styled("div")`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const SocialIcon = styled("span")`
  margin: 0 0.5rem;
`;

const TopBar = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact us</MenuItem>
      </Menu>
      <div>
        <LanguageSelect>
          <option>Languages</option>
        </LanguageSelect>
        <SocialIcons>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
        </SocialIcons>
      </div>
    </Container>
  );
};

export default TopBar;
