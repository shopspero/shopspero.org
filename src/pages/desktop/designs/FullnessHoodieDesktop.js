import React, { useState } from "react";
import {
  HStack,
  VStack,
  Stack,
  Box,
  Text,
  Image,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import "../../../styles/desktop/FallStickerPage.css";
import Fade from "react-reveal/Fade";

const FullnessHoodieDesktop = () => {
  const [mainPhotoModal, setMainPhotoModal] = useState("none");
  const [leftPhotoModal, setLeftPhotoModal] = useState("none");
  const [rightPhotoModal, setRightPhotoModal] = useState("none");

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing="1.5rem"
      ml={{ base: "0", sm: "1rem" }}
      mt={{ base: "10px", sm: "none" }}
      pt={{ base: "none", lg: "100px" }}
    >
      <Stack
        display={mainPhotoModal}
        position="fixed"
        zIndex="1"
        left={0}
        top={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(0,0,0,0.9)"
        pt="25px"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <CloseButton
          _focus={{ boxShadow: "none" }}
          size="lg"
          onClick={() => {
            setMainPhotoModal("none");
          }}
          position="absolute"
          top="15px"
          right="30px"
          color="#ffffff"
        />
        <Image
          src={require("../../../images/design-photos/fullness1.jpg")}
          alt=""
          w="80%"
          h="90%"
          display="block"
          objectFit="contain"
        />
      </Stack>
      <Stack
        display={leftPhotoModal}
        position="fixed"
        zIndex="1"
        left={0}
        top={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(0,0,0,0.9)"
        direction="column"
        alignItems="center"
      >
        <Box h="500px" w="500px" pt="100px" pl={{ base: "85px", sm: "0px" }}>
          <Image
            src={require("../../../images/design-photos/fullness2.jpg")}
            alt=""
            w="80%"
            display="block"
            objectFit="contain"
          />
        </Box>

        <CloseButton
          _focus={{ boxShadow: "none" }}
          size="lg"
          onClick={() => {
            setLeftPhotoModal("none");
          }}
          position="absolute"
          top="15px"
          right="40px"
          color="#ffffff"
        />
      </Stack>
      <Stack
        display={rightPhotoModal}
        position="fixed"
        zIndex="1"
        left={0}
        top={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(0,0,0,0.9)"
        pt="25px"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <CloseButton
          _focus={{ boxShadow: "none" }}
          size="lg"
          onClick={() => {
            setRightPhotoModal("none");
          }}
          position="absolute"
          top="15px"
          right="40px"
          color="#ffffff"
        />
        <Image
          src={require("../../../images/design-photos/fullness3.jpg")}
          alt=""
          w="80%"
          h="90%"
          display="block"
          objectFit="contain"
        />
      </Stack>

      <VStack spacing="5px">
        <Fade bottom>
          <Box
            display="flex"
            justifyContent="center"
            align-items="center"
            overflow="hidden"
            width={{ base: "80vw", sm: "60vw", lg: "40vw" }}
            height={{ base: "20vh", sm: "40vh", lg: "40vh" }}
          >
            <Button
              onClick={() => {
                setMainPhotoModal("flex");
              }}
              w="100%"
              h="100%"
              border={0}
              p={0}
            >
              <Image
                src={require("../../../images/design-photos/fullness1.jpg")}
                alt=""
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Button>
          </Box>
        </Fade>
        <HStack spacing="5px">
          <Fade bottom>
            <Box
              display="flex"
              justifyContent="center"
              align-items="center"
              overflow="hidden"
              width={{
                base: "39vw",
                sm: "29.75vw",
                lg: "19.75vw",
              }}
              height={{
                base: "15vh",
                sm: "25vh",
                lg: "25vh",
              }}
            >
              <Button
                onClick={() => {
                  setLeftPhotoModal("flex");
                }}
                w="100%"
                h="100%"
                border={0}
                p={0}
              >
                <Image
                  src={require("../../../images/design-photos/fullness2.jpg")}
                  alt=""
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Button>
            </Box>
          </Fade>

          <Fade bottom>
            <Box
              display="flex"
              justifyContent="center"
              align-items="center"
              overflow="hidden"
              width={{
                base: "39vw",
                sm: "29.75vw",
                lg: "19.75vw",
              }}
              height={{
                base: "15vh",
                sm: "25vh",
                lg: "25vh",
              }}
            >
              <Button
                onClick={() => {
                  setRightPhotoModal("flex");
                }}
                w="100%"
                h="100%"
                border={0}
                p={0}
              >
                <Image
                  src={require("../../../images/design-photos/fullness3.jpg")}
                  alt=""
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Button>
            </Box>
          </Fade>
        </HStack>
      </VStack>
      <VStack textAlign="left" justifyContent="center" maxW="500px">
        <VStack alignItems="flex-start">
          <Fade bottom>
            <HStack alignItems="flex-start">
              <Text
                fontFamily="Lexend Deca"
                fontSize={{ base: "30px", sm: "45px" }}
                lineHeight={{ base: "35px", sm: "60px" }}
              >
                <b>FULLNESS</b> <br />
                HOODIE
              </Text>
              <Box
                bgColor="#5c6a6f"
                px={{ base: "4px", sm: "7px" }}
                py={{ base: "2px", sm: "5px" }}
              >
                <Text
                  fontFamily="Lexend Deca"
                  fontSize={{ base: "7px", sm: "10px" }}
                  color="white"
                >
                  NEW RELEASE!
                </Text>
              </Box>
            </HStack>
          </Fade>
          <Fade bottom>
            <Text
              fontFamily="Tenor Sans"
              fontSize={{ base: "10px", sm: "12px" }}
              py="10px"
            >
              “You make known to me the path of life; in your presence there is
              fullness of joy; at your right hands are pleasures forevermore.”
              <br></br>
              <b>Psalm 16:11 </b>
            </Text>
          </Fade>
          <Fade bottom>
            <Text
              fontFamily="Lexend Deca"
              fontSize={{ base: "10px", sm: "12px" }}
            >
              Spero’s hoodie is designed to be a reminder of the joy that can
              only be found in God. We define fullness as being complete—
              lacking in nothing as we seek the Lord. In the many moments of
              uncertainty that we face our team clings to the hope that God has
              a good & sovereign plan for us. We hope that you’re encouraged by
              this too!
            </Text>
          </Fade>
          <Box h={{ base: "30px", sm: "0px" }}></Box>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default FullnessHoodieDesktop;
