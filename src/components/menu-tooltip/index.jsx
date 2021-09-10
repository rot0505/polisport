import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Text } from "..";
import { Container, Menu, ButtonMenu } from "./index.styled";

const MenuTooltipComponent = ({ submenu, history }) => {
  const [showShowrooms, setShowShowrooms] = useState(false);

  const handleClick = (str) => {
    console.log("clicado: ", str);
    history.push(str);
  };
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.05 } }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ delay: 0 }}
    >
      <Menu>
        {submenu.length > 0 &&
          submenu.map((button, index) => {
            return (
              <ButtonMenu key={index} onClick={() => handleClick(button.link)}>
                <Text
                  textTransform="uppercase"
                  letterSpacing=".8px"
                  lineHeight="26px"
                  fontSize="11px"
                  fontSizeMobile="11px"
                  fontWeight="500"
                  textId={button.title}
                />
              </ButtonMenu>
            );
          })}
      </Menu>
    </Container>
  );
};

MenuTooltipComponent.propTypes = {
  type: PropTypes.array,
};

export default withRouter(MenuTooltipComponent);
