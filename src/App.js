import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import PuffLoader from "react-spinners/PuffLoader";

import picture1 from "./images/home-bgimage.png";
import picture2 from "./images/about-bgimage.png";
import picture3 from "./images/paintFooter.png";

import picture4 from "./images/sliderimage1.jpg";
import picture5 from "./images/sliderimage2.jpg";
import picture6 from "./images/sliderimage3.jpg";
import picture7 from "./images/sliderimage4.jpg";
import picture8 from "./images/sliderimage5.jpg";

import picture9 from "./images/about-image-1.jpg";
import picture10 from "./images/about-sticker.jpg";
import picture11 from "./images/design-photos/abide-overlay.jpg";
import picture12 from "./images/design-photos/abide-window.jpg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      picture1,
      picture2,
      picture3,
      picture4,
      picture5,
      picture6,
      picture7,
      picture8,
      picture9,
      picture10,
      picture11,
      picture12,
    ];
    //setting src property forces browser to load images
    imgs.forEach((image) => {
      new Image().src = image;
    });
    if (isLoading === true) {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading">
            <PuffLoader size={50} color={"#dac4af"} />
          </div>
        </div>
      ) : (
        <Router basename={process.env.PUBLIC_URL}>
          <Main />
        </Router>
      )}
    </div>
  );
}

export default App;
