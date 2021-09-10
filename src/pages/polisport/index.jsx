import React, { useEffect, useState } from "react";
import { v4 as uuiv4 } from "uuid";
import { useParams, useLocation } from "react-router";
import { useResize } from "../../hooks";
import { getImage } from "../../utils";
import {
  Header,
  MenuCorporate,
  FooterPage as Footer,
  Infos,
  HotSpot,
} from "../../components";
import dados from "../../assets/mock-data/menu-corporate.json";
import {
  Container,
  MenuContainer,
  SpotsContainer,
  SpotContainer,
} from "./index.styled";
import { LoadingPage } from "..";

const PolisportPage = () => {
  const [menuId, setMenuId] = useState(null);
  const [info, setInfo] = useState(null);
  const { id } = useParams();
  const { pathname } = useLocation();
  const [hotSpots, setHotSpots] = useState([]);

  const { isMobile } = useResize();

  const getBackground = () => {
    const imagem = dados.find((imagem) => imagem.route.includes(id)).image;

    if (imagem) return getImage(imagem);
    else return null;
  };

  useEffect(() => {
    // // just for polisport
    // if(pathname.includes('polisport')) {
    // }
    setHotSpots([]);
    const spots = [];
    switch (id) {
      case "polisport-plastics":
        setMenuId(0);
        setInfo(
          <Infos
            key={uuiv4()}
            infos={{
              title: "infos.polisport-plastics.title",
              description: "infos.polisport-plastics.description",
            }}
          />
        );

        spots.push({
          x: "50",
          y: "40",
          type: "submenu",
          submenu: [
            {
              title: "menu-tooltip.polisport-bicycle",
              link: "/polisport-group/polisport-bicycle",
            },
            {
              title: "menu-tooltip.polisport-offroad",
              link: "/polisport-group/polisport-offroad",
            },
            { title: "menu-tooltip.bobike", link: "/polisport-group/bobike" },
            { title: 'menu-tooltip.catlike', link: '/polisport-group/catlike' }
          ],
        });

        spots.push({
          x: "55",
          y: "50",
          type: "submenu",
          submenu: [
            { title: "infos.visit-factory-title", link: "/vr/drone/1" },
          ],
        });

        setHotSpots(spots);

        break;
      case "polisport-molds":
        setMenuId(1);
        setInfo(
          <Infos
            key={uuiv4()}
            infos={{
              title: "infos.polisport-molds.title",
              description: "infos.polisport-molds.description",
            }}
          />
        );
        break;
      case "polinter-plastics":
        setMenuId(2);
        setInfo(
          <Infos
            key={uuiv4()}
            infos={{
              title: "infos.polinter-plastics.title",
              description: "infos.polinter-plastics.description",
            }}
          />
        );

        spots.push({
          x: "50",
          y: "56",
          type: "submenu",
          submenu: [
            { title: "infos.visit-factory-title", link: "/vr/drone/2" },
          ],
        });

        setHotSpots(spots);
        break;
      case "motorcycle-logistics-center":
        setMenuId(3);
        setInfo(
          <Infos
            key={uuiv4()}
            infos={{
              title: "infos.motorcycle-logistics-center.title",
              description: "infos.motorcycle-logistics-center.description",
            }}
          />
        );
        spots.push({
          x: "50",
          y: "50",
          type: "submenu",
          submenu: [
            { title: "infos.visit-factory-title", link: "/vr/drone/3" },
          ],
        });

        setHotSpots(spots);
        break;
      case "polipromotion":
        setMenuId(4);
        setInfo(
          <Infos
            key={uuiv4()}
            infos={{
              title: "infos.polipromotion.title",
              description: "infos.polipromotion.description",
            }}
          />
        );
        break;
      case "bobike":
        setMenuId(5);
        setInfo(
          <Infos
            key={uuiv4()}
            infos={{
              title: "infos.bobike.title",
              description: "infos.bobike.description",
            }}
          />
        );
        break;
      case "polistar":
        setMenuId(6);
        setInfo(
          <Infos
            key={uuiv4()}
            infos={{
              title: "infos.polistar.title",
              description: "infos.polistar.description",
            }}
          />
        );
        break;
      case "polisport-usa":
        setMenuId(7);
        setInfo(
          <Infos
            key={uuiv4()}
            infos={{
              title: "infos.polisport-usa.title",
              description: "infos.polisport-usa.description",
            }}
          />
        );
        break;
      default:
        setMenuId(null);
    }
  }, [id, pathname]);

  return (
    <React.Suspense fallback={<LoadingPage redirect={false} />}>
      <Container bg={getBackground}>
        <Header color="blue">{info}</Header>
        <SpotsContainer>
          {hotSpots.length > 0 &&
            hotSpots.map((hotspot) => {
              return (
                <SpotContainer
                  key={uuiv4()}
                  style={{
                    top: `${hotspot.y - (isMobile ? 10 : 0)}%`,
                    left: `${hotspot.x}%`,
                  }}
                >
                  <HotSpot type={hotspot.type} submenu={hotspot.submenu} />
                </SpotContainer>
              );
            })}
        </SpotsContainer>
        <Footer className="dark" />
        <MenuContainer>
          {menuId !== null && <MenuCorporate id={menuId} />}
        </MenuContainer>
      </Container>
    </React.Suspense>
  );
};

export default PolisportPage;
