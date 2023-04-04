import React from "react";
import "../styles/Footer.css";
import Fade from "react-reveal/Fade";
import { HStack, Image, Box, Text } from "@chakra-ui/react";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Image
        src={require("../images/paintFooter.png")}
        w="100%"
        h="200px"
        pos="relative"
      />
      <Box
        w={{ base: "75%", sm: "50%", md: "35%", lg: "25%" }}
        pos="absolute"
        bottom="8"
        left="10"
        transition="width 0.25s"
      >
        <Text
          fontFamily="Tenor Sans"
          color="#5D6B6F"
          letterSpacing="1px"
          fontSize="10px"
          fontWeight="100"
        >
          “Are not two sparrows sold for a penny? Yet not one of them will fall
          to the ground outside your Father’s care. And even the very hairs of
          your head are all numbered.. So don’t be afraid; you are worth more
          than many sparrows.” - Matthew 10:29-31
        </Text>
      </Box>
      <HStack
        display={{ base: "none", sm: "flex" }}
        position="absolute" /*fixed*/
        bottom="10"
        right="10"
        spacing="1rem"
        zIndex="1000"
      >
        <Fade bottom>
          <Box w="30px" _hover={{ w: "34px" }} transition="width 0.25s">
            <a href="https://www.facebook.com/shopspero/">
              <Image
                src={require("../images/fb_white_icon.png")}
                alt="facebook-icon" //BOX PREVIOUSLY 23px and 27px for hover
              />
            </a>
          </Box>
        </Fade>
        <Fade bottom>
          <Box w="30px" _hover={{ w: "34px" }} transition="width 0.25s">
            <a href="https://www.instagram.com/shopspero/">
              <Image
                src={require("../images/instagram_white_icon.png")}
                alt="ig-icon"
              />
            </a>
          </Box>
        </Fade>
        <Fade bottom>
          <Box w="30px" _hover={{ w: "34px" }} transition="width 0.25s">
            <a href="https://shopspero.medium.com/">
              <Image
                src={require("../images/medium_white_icon.png")}
                alt="medium-icon"
              />
            </a>
          </Box>
        </Fade>
      </HStack>
    </React.Fragment>
  );
};

export default Footer;
