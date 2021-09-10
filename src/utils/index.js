import FirstStFloorPolinterMapComponent from "../components/maps/first-st-floor-polinter";
import FirststFloorPolisportPlasticsMapComponent from "../components/maps/first-st-floor-polisport-plastics";
import GroundFloorCLMMapComponent from "../components/maps/ground-floor-clm";
import GroundFloorPolinterMapComponent from "../components/maps/ground-floor-polinter";
import GroundFloorPolisportPlasticsMapComponent from "../components/maps/ground-floor-polisport-plastics";

export const isMobile = () => {
  return window.visualViewport.width < 811;
};

export const mobileClass = (string = "") => {
  return `${string}${isMobile() ? " mobile" : ""}`.trim();
};

export const Util = {};

export const getImage = (img) => {
  if (img.includes("http")) {
    return img;
  } else {
    return require("../assets/images/" + img).default;
  }
};

export const getVideo = (video) => {
  if (video.includes("http")) {
    return video.default;
  } else {
    return require("../assets/videos/" + video).default;
  }
}

export const getModel = (model) => {
  if (model.includes("http")) {
    return model.default;
  } else {
    return require("../assets/models/" + model).default;
  }
}

export const renderMap = (name, floor, mini = false) => {
  console.log("renderMap", name, floor, mini);
  /* Mapping by Joaquim
   * const firstStFloorPolinter = ["polinter open space"]
   * const firstStFloorPolisport = ["open-space", "reception", "officies-hall"]
   * const groundFloorCLM = ["storage", "entrance", "production"]
   * const groundFloorPolinter = ["entry", "dynamic warehouse", "polinter-shop-floor"]
   * const groundFloorPolisport = ["polisport-lab", "polisport-plastics-shop-floor", "material-inspection", "production-lines", "entrance-hall", "bicycle-warehouse"]
   */
  const firstStFloorPolinter = ["polinter-entry", "open-space"];
  const firstStFloorPolisport = ["open-space", "reception", "officies-hall", "entrance-hall"];
  const groundFloorCLM = ["storage", "entrance", "production"];
  const groundFloorPolinter = [
    "polinter-entry",
    "dynamic-warehouse",
    "polinter-shop-floor",
  ];
  const groundFloorPolisport = [
    "polisport-lab",
    "polisport-plastics-shop-floor",
    "material-inspection",
    "production-lines",
    "entrance-hall",
    "bicycle-warehouse",
  ];

  const url = window.location.hash; // use pathname if not using hashroute

  if (url.includes("polisport")) {
    console.log("polisport");
    if (
      firstStFloorPolisport.find((id) => id === name) &&
      floor === "1st-floor"
    ) {
      console.log("firstStFloorPolisport");
      return (
        <FirststFloorPolisportPlasticsMapComponent name={name} mini={mini} />
      );
    } else if (
      groundFloorPolisport.find((id) => id === name) &&
      floor === "ground"
    ) {
      console.log("groundFloorPolisport");
      return <GroundFloorPolisportPlasticsMapComponent id={name} mini={mini} />;
    }
  } else if (url.includes("polinter")) {
    console.log("polinter");
    if (
      firstStFloorPolinter.find((id) => id === name) &&
      floor === "1st-floor"
    ) {
      console.log("firstStFloorPolinter");
      return <FirstStFloorPolinterMapComponent name={name} mini={mini} />;
    } else if (
      groundFloorPolinter.find((id) => id === name) &&
      floor === "ground"
    ) {
      console.log("groundFloorPolinter");
      return <GroundFloorPolinterMapComponent id={name} mini={mini} />;
    }
  } else {
    console.log("clm");
    if (groundFloorCLM.find((id) => id === name) && floor === "ground") {
      console.log("groundFloorCLM");
      return <GroundFloorCLMMapComponent name={name} mini={mini} />;
    } else {
      return null;
    }
  }

  // if (firstStFloorPolinter.find((id) => id === name) && floor === "1st-floor") {
  //   console.log("firstStFloorPolinter");
  //   return <FirstStFloorPolinterMapComponent name={name} mini={mini} />;
  // } else if (
  //   firstStFloorPolisport.find((id) => id === name) &&
  //   floor === "1st-floor"
  // ) {
  //   console.log("firstStFloorPolisport");
  //   return (
  //     <FirststFloorPolisportPlasticsMapComponent name={name} mini={mini} />
  //   );
  // } else if (groundFloorCLM.find((id) => id === name) && floor === "ground") {
  //   console.log("groundFloorCLM");
  //   return <GroundFloorCLMMapComponent name={name} mini={mini} />;
  // } else if (
  //   groundFloorPolinter.find((id) => id === name) &&
  //   floor === "ground"
  // ) {
  //   console.log("groundFloorPolinter");
  //   return <GroundFloorPolinterMapComponent id={name} mini={mini} />;
  // } else if (
  //   groundFloorPolisport.find((id) => id === name) &&
  //   floor === "ground"
  // ) {
  //   console.log("groundFloorPolisport");
  //   return <GroundFloorPolisportPlasticsMapComponent id={name} mini={mini} />;
  // } else {
  //   return null;
  // }
};
