import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  HeaderGroup as Header,
  FooterGroup as Footer,
  MotoProgress,
  BtnPlayer,
} from "../../components";
import { Container, VRContent } from "./index.styled";

const PolisportGroupPage = () => {
  const [data, setData] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const session = pathname.substr(
      pathname.lastIndexOf("/") + 1,
      pathname.length
    );

    switch (session) {
      case "polisport-bicycle":
        setData({
          color: "blue",
          titleMenu: "menu-ambiente-group.polisport-bicycle",
        });
        break;
      case "polisport-offroad":
        setData({
          color: "red",
          titleMenu: "menu-ambiente-group.polisport-offroad",
        });
        break;
      case "bobike":
        setData({
          color: "black",
          titleMenu: "menu-ambiente-group.bobike",
        });
        break;
      case "catlike":
        setData({
          color: "blue",
          titleMenu: "menu-ambiente-group.polisport-catlike",
        });
        break;
      default:
        return null;
    }
  }, [pathname]);

  return (
    <React.Fragment>
      {data !== null && (
        <Container>
          <Header color={data.color} />
          <VRContent className="d-flex justify-content-center align-items-center">
            <h3>3D content</h3>
          </VRContent>
          <BtnPlayer
            style={{ marginBottom: "80px" }}
            type={data.color}
            clickHandler={() => console.log("click black")}
          />
          <Footer className="inverse" />
          <MotoProgress
            leftDistance={0}
            type={data.color}
            bottomDistance={40}
          />
        </Container>
      )}
    </React.Fragment>
  );
};

export default PolisportGroupPage;
