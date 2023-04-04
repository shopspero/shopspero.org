import Footer from "../../components/Footer";
import "../../styles/desktop/HomeDesktop.css";

import Navbar from "../../components/NavBar";
import { Box } from "@chakra-ui/react";
import HomePagePanel from "../../components/HomePagePanel";

const HomePageDesktop = (props) => {
  return (
    <div className="background-main">
      <Box w="100%" h="100vh">
        <Navbar />
        <HomePagePanel />
      </Box>
      <Footer />
    </div>
  );
};

export default HomePageDesktop;
