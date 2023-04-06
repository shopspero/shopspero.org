import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from './components/Main'
import PuffLoader from 'react-spinners/PuffLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [];
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
