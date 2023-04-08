import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import Popup from "../../components/DesignPopup.js";
import "../../styles/desktop/DesignDesktop.css";
import Product from "../../components/Product";

import FullnessHoodieDesktop from "./designs/FullnessHoodieDesktop";
import WalkOnWaterDesktop from "./designs/WalkOnWaterDesktop.js";
import MountainMoverDesktop from "./designs/MountainMoverDesktop.js";
import SperoBearDesktop from "./designs/SperoBearDesktop.js";

import AbideHoodieDesktop from "./designs/AbideHoodieDesktop.js";
import HopeDesktop from "./designs/HopeDesktop.js";
import IAmThatGirlHatDesktop from "./designs/IAmThatGirlHatDesktop.js";

import MacronHoodieDesktop from "./designs/MacronHoodieDesktop.js";
import BlessedToBlessDesktop from "./designs/BlessedToBlessDesktop.js";
import BayAreaDesktop from "./designs/BayAreaDesktop.js";

import BerkeleyHoodieDesktop from "./designs/BerkeleyHoodieDesktop.js";
import RedeemedHoodie from "./designs/RedeemedHoodie.js";

import Navbar from "../../components/NavBar";
import Fade from "react-reveal/Fade";

import { Grid, VStack, Text, Box, Link } from "@chakra-ui/react";

import { productPreviewData, newReleaseData } from "./ProductPreviewData";

const DesignsDesktop = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();

  function renderSwitch(param) {
    switch (param) {
      case 11:
        return <FullnessHoodieDesktop />;
      case 10:
        return <RedeemedHoodie />;
      case 9:
        return <WalkOnWaterDesktop />;
      case 8:
        return <MountainMoverDesktop />;
      case 7:
        return <SperoBearDesktop />;
      case 6:
        return <AbideHoodieDesktop />;
      case 5:
        return <HopeDesktop />;
      case 4:
        return <IAmThatGirlHatDesktop />;
      case 3:
        return <MacronHoodieDesktop />;
      case 2:
        return <BlessedToBlessDesktop />;
      case 1:
        return <BayAreaDesktop />;
      case 0:
        return <BerkeleyHoodieDesktop />;
      default:
        return "";
    }
  }

  const togglePopup = (param) => {
    setIsOpen(!isOpen);
    window.value = param;
  };

  const productTiles = productPreviewData.map((product) => {
    return (
      <div
        className="design-desktop-product"
        onClick={() => togglePopup(product.index)}
      >
        <Product
          name={product.name}
          title={product.title}
          imageURL={product.image}
          price={product.price}
          index={product.index}
        />
      </div>
    );
  });

  const newReleaseTiles = newReleaseData.map((product) => {
    return (
      <div
        className="design-desktop-product"
        onClick={() => togglePopup(product.index)}
      >
        <Product
          name={product.name}
          title={product.title}
          imageURL={product.image}
          price={product.price}
          index={product.index}
        />
      </div>
    );
  });

  return (
    <div className="background-main">
      <Box
        w="100%"
        h="100%"
        onClick={(event) => {
          if (isOpen && popupRef.current === event.target) {
            togglePopup();
          }
        }}
      >
        <Navbar />
        <div className="design-desktop-popup">
          {isOpen && (
            <Popup
              content={<>{renderSwitch(window.value)}</>}
              handleClose={togglePopup}
              reference={popupRef}
            />
          )}
        </div>
        <VStack
          textAlign="center"
          px={{ base: "30px", lg: "100px" }}
          color="#5c6a6f"
          pt="25px"
          alignItems="start"
        >
          <Fade bottom>
            <Text
              fontFamily="Lexend Deca"
              fontSize={{ base: "3xl", sm: "5xl" }}
              border="none"
              borderBottom="3px solid #5c6a6f"
              marginBottom="5%"
            >
              NEW RELEASES
            </Text>
          </Fade>

          <Fade bottom>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScl1aqZNSQ1q9VnaQajA74m9s10Nm18aO_mikAHG8MwF9OidQ/viewform">
              <Text
                fontFamily="Lexend Deca"
                fontSize={"3xl"}
                border="none"
                // borderBottom="3px solid #5c6a6f"
                marginBottom="5%"
              >
                Preorder Our New Tote Bag!
              </Text>
            </Link>
          </Fade>

          <Grid
            py={10}
            templateColumns={{
              base: "repeat(1, 4fr)",
              sm: "repeat(2,4fr)",
              md: "repeat(3, 4fr)",
              lg: "repeat(4,4fr)",
            }}
            gap={1}
          >
            {newReleaseTiles}
          </Grid>
          <Fade bottom>
            <Text
              fontFamily="Lexend Deca"
              fontSize={{ base: "3xl", sm: "5xl" }}
              border="none"
              borderBottom="3px solid #5c6a6f"
              marginBottom="5%"
            >
              DESIGNS
            </Text>
          </Fade>
          <Grid
            py={10}
            templateColumns={{
              base: "repeat(1, 4fr)",
              sm: "repeat(2,4fr)",
              md: "repeat(3, 4fr)",
              lg: "repeat(4,4fr)",
            }}
            gap={1}
          >
            {productTiles}
          </Grid>
        </VStack>
        <Footer />
      </Box>
    </div>
  );
};

export default DesignsDesktop;
