import React from "react";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile";
import "../../styles/desktop/TeamDesktop.css";
import Fade from "react-reveal/Fade";
import Navbar from "../../components/NavBar";

import { TeamProfiles } from "./TeamProfileInfo";

import { Text, Box, VStack, Grid } from "@chakra-ui/react";

const TeamPage = (props) => {
  const profiles = TeamProfiles.map((profile) => {
    return (
      <Profile
        name={profile.name}
        title={profile.position}
        description={profile.description}
        imageURL={profile.image}
      />
    );
  });

  return (
    <div className="background-main">
      <Box w="100%" h="100%" overflow="scroll">
        <Navbar />
        <VStack
          textAlign="center"
          px={{ base: "30px", lg: "100px" }}
          color="#5c6a6f"
          pt="25px"
        >
          <Fade bottom>
            <Text
              fontFamily="Lexend Deca"
              fontSize={{ base: "4xl", sm: "6xl" }}
              border="none"
              borderBottom="3px solid #5c6a6f"
            >
              TEAM SPERO
            </Text>
          </Fade>
          <Fade bottom>
            <Text
              fontFamily="Tenor Sans"
              fontSize={{ base: "10px", sm: "12px", md: "14px" }}
              lineHeight={{ base: "25px", sm: "30px" }}
              color="#5c6a6f"
              py="20px"
              textAlign="left"
              maxWidth="1100px"
            >
              Shop Spero is comprised of a diverse group of Christians who all
              choose to use their talents and skills to glorify God through
              their work on this team. This staff strives to sharpen one another
              and inspire others to carry out God’s mission. Meet the staff that
              makes Shop Spero a reality.
            </Text>
          </Fade>
          <VStack spacing="5px">
            <Grid
              templateColumns={{
                base: "repeat(2, 5fr)",
                sm: "repeat(3,4fr)",
                md: "repeat(4, 3fr)",
                lg: "repeat(5,2fr)",
              }}
              gap={1}
            >
              {profiles}
            </Grid>
          </VStack>
          <Fade bottom>
            <Text
              fontFamily="Lexend Deca"
              fontSize={{ base: "4xl", sm: "6xl" }}
              border="none"
              borderBottom="3px solid #5c6a6f"
              pt="80px"
            >
              JOIN OUR TEAM
            </Text>
          </Fade>
          <Fade bottom>
            <Text
              fontFamily="Tenor Sans"
              fontSize={{ base: "10px", sm: "12px", md: "14px" }}
              lineHeight={{ base: "25px", sm: "30px" }}
              color="#5c6a6f"
              py="20px"
              maxWidth="1100px"
              textAlign="left"
              pb="120px"
            >
              Interesting in working with an amazingly creative team who loves
              God? We have finished actively recruiting, but if you are excited
              about using your creative talents to design apparel and
              merchandise that glorifies God, email us your resume at
              shopspero@gmail.com! We currently have a design team, marketing
              team, operations team, and web development team!
            </Text>
          </Fade>
        </VStack>
        <Footer />
      </Box>
    </div>
  );
};

export default TeamPage;
