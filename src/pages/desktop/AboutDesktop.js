import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import Fade from "react-reveal/Fade";
import { HStack, Image, Text, Box, VStack } from "@chakra-ui/react";

const AboutDesktop = (props) => {
  return (
    <div className="background-main">
      <Box w="100%" h="100%" overflow="scroll">
        <Navbar />
        <VStack
          textAlign="center"
          px={{ base: "30px", lg: "100px" }}
          color="#5c6a6f"
          pt="25px"
          justifyContent="center"
        >
          <Fade bottom>
            <Text
              fontFamily="Lexend Deca"
              fontSize={{ base: "4xl", sm: "6xl" }}
              border="none"
              borderBottom="3px solid #5c6a6f"
            >
              ABOUT US
            </Text>
          </Fade>
          <Fade bottom>
            <Text
              fontFamily="Lexend Deca"
              fontSize={{ base: "10px", sm: "12px", md: "14px" }}
              lineHeight={{ base: "20px", sm: "30px" }}
              color="#5c6a6f"
              pb="20px"
              pt="30px"
              maxW="1000px"
            >
              We are a team of primarily UC Berkeley students dedicated to
              bridging <b>fashion and mission</b>. As a Christian organization,
              our heart is to advance the gospel through apparel that is
              empowered by Biblical truth and vision. Shop Spero aims to produce
              intentional designs that spark hope through everyday wear and
              conversation. 30% of all profits are donated to various
              social-good organizations both in and outside of the Bay Area such
              as{" "}
              <b>
                Compassion International, Imago Dei Clinic, Laundry Love, and
                Hands and Feet!
              </b>
            </Text>
          </Fade>
          <Fade bottom>
            <Image
              src={require("../../images/about-image-1.jpg")}
              maxW="1000px"
              pb={{ base: "50px", md: "100px" }}
            />
          </Fade>
          <HStack
            textAlign="left"
            color="#5c6a6f"
            spacing={{
              base: "25px",
              sm: "50px",
              md: "100px",
              lg: "150px",
            }}
            pb={{ base: "40px", sm: "75px" }}
          >
            <Fade bottom>
              <Box
                display="flex"
                justifyContent="center"
                align-items="center"
                overflow="hidden"
                width={{
                  base: "150px",
                  sm: "250px",
                  lg: "350px",
                }}
              >
                <Image
                  src={require("../../images/design-photos/abide-window.jpg")}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            </Fade>
            <VStack textAlign="left" color="#5c6a6f" align="left">
              <Fade bottom>
                <Text
                  fontFamily="Tenor Sans"
                  fontSize={{
                    base: "12px",
                    sm: "18px",
                    md: "20x",
                  }}
                  lineHeight={{ base: "20px", sm: "30px" }}
                  color="#5c6a6f"
                  pb={{ base: "5px", md: "20px" }}
                  maxW="300px"
                  textAlign="left"
                  pr="10px"
                >
                  <b>MISSION</b>
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  fontFamily="Lexend Deca"
                  fontSize={{
                    base: "6px",
                    sm: "12px",
                    md: "14px",
                  }}
                  lineHeight={{ base: "15px", sm: "30px" }}
                  color="#5c6a6f"
                  // pb="20px"
                  maxW="300px"
                  pr="10px"
                >
                  In Latin, the word "spero" means "<b>to hope</b>
                  ". Our vision is also inspired by <b>Matthew 10:29-31</b>,
                  where something as insignificant as a sparrow will be
                  remembered and cared for.
                  <br />
                  We want to expose the poverty in these neglected communities
                  through an innovative medium.{" "}
                  <b>
                    The goal of Spero is to bring hope to the hopeless and light
                    into darkness.
                  </b>
                </Text>
              </Fade>
            </VStack>
          </HStack>
          <HStack
            textAlign="left"
            color="#5c6a6f"
            pb={{ base: "40px", sm: "75px" }}
            spacing={{
              base: "25px",
              sm: "50px",
              md: "100px",
              lg: "200px",
            }}
            pl={{ lg: "65px" }}
          >
            <VStack
              textAlign="left"
              color="#5c6a6f"
              align="left"
              position="relative"
            >
              <Fade bottom>
                <Text
                  fontFamily="Tenor Sans"
                  fontSize={{
                    base: "12px",
                    sm: "18px",
                    md: "20x",
                  }}
                  lineHeight={{ base: "20px", sm: "30px" }}
                  color="#5c6a6f"
                  pb={{ base: "5px", sm: "20px" }}
                  maxW="300px"
                  textAlign="left"
                  pl="10px"
                >
                  <b>MATTHEW 10:29-31</b>
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  fontFamily="Lexend Deca"
                  fontSize={{
                    base: "6px",
                    sm: "12px",
                    md: "14px",
                  }}
                  lineHeight={{ base: "15px", sm: "30px" }}
                  color="#5c6a6f"
                  pb="20px"
                  maxW="225px"
                  pl="10px"
                >
                  "Are not two sparrows sold for a penny? And not one of them
                  will fall to the ground apart from your Father. But even the
                  hairs of your head are all numbered. Fear not, therefore; you
                  are of more value than many sparrows."
                </Text>
              </Fade>
            </VStack>
            <Fade bottom>
              <Box
                display="flex"
                justifyContent="center"
                align-items="center"
                overflow="hidden"
                width={{
                  base: "150px",
                  sm: "250px",
                  lg: "350px",
                }}
              >
                <Image
                  src={require("../../images/about-sticker.jpg")}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            </Fade>
          </HStack>
          <HStack
            textAlign="left"
            color="#5c6a6f"
            pb="150px"
            spacing={{
              base: "25px",
              sm: "50px",
              md: "100px",
              lg: "150px",
            }}
          >
            <Fade bottom>
              <Box
                display="flex"
                justifyContent="center"
                align-items="center"
                overflow="hidden"
                // height={{
                //     base: '163.5px',
                //     sm: '238px',
                //     lg: '300px',
                // }}
                width={{
                  base: "150px",
                  sm: "250px",
                  lg: "350px",
                }}
              >
                <Image
                  src={require("../../images/design-photos/abide-overlay.jpg")}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            </Fade>
            <VStack
              textAlign="left"
              color="#5c6a6f"
              align="left"
              // position="relative"
              // top="125px"
            >
              <Fade bottom>
                <Text
                  fontFamily="Tenor Sans"
                  fontSize={{
                    base: "12px",
                    sm: "18px",
                    md: "20x",
                  }}
                  lineHeight={{ base: "20px", sm: "30px" }}
                  color="#5c6a6f"
                  pb={{ base: "5px", sm: "20px" }}
                  maxW="300px"
                  textAlign="left"
                  pr="10px"
                >
                  <b>VISION</b>
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  fontFamily="Lexend Deca"
                  fontSize={{
                    base: "6px",
                    sm: "12px",
                    md: "14px",
                  }}
                  lineHeight={{ base: "15px", sm: "30px" }}
                  color="#5c6a6f"
                  pb={{ base: "50px", sm: "20px" }}
                  maxW="300px"
                  pr="10px"
                >
                  Our vision is inspired by Matthew 10:29-31, where something as
                  insignificant as a sparrow, will be remembered and cared for.
                  <br />
                  His eye is on the sparrow and He watches over us. And through
                  this we have identity and know our worth through Him.
                </Text>
              </Fade>
            </VStack>
          </HStack>
        </VStack>
        <Footer />
      </Box>
    </div>
  );
};

export default AboutDesktop;
