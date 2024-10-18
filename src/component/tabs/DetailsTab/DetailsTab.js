import UserContext from "@/context/UserContext";
import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";

const DetailsTab = () => {
  const { selectedMovie, setCartMovies, count, cartMovies, setCount } =
    useContext(UserContext);

    // Handle adding items to the cart.
  const handleAddList = () => {
    if (selectedMovie) {
      const newCartMovies = [...cartMovies, selectedMovie]; // Create a new array
      setCartMovies(newCartMovies); // Update state
      setCount(newCartMovies.length); // Set the new count based on the new array
    }
  };

   // Set cartMovies and cartCount data from local storage.
  useEffect(() => {
    localStorage.setItem("cartMovies", JSON.stringify(cartMovies));
    localStorage.setItem("cartCount", JSON.stringify(count));
  }, [cartMovies, count]);

  return (
    <>
      <div className="detail-tab  text-white">
        <div className="">
          <div className="details-cart ">
            <div className=" details-score">
              <div className="score-border">
                <p>Score</p>
                <p className="text-2xl font-bold">{selectedMovie.score}</p>
                <p className="small-text">{selectedMovie.scored_by} Users</p>
              </div>
                <div className="score-border">
                  <p>Ranked #{selectedMovie.rank}</p>
                  <div className="flex gap-10">
                    <p className="small-text">{selectedMovie.season}</p>
                    <p className="small-text">{selectedMovie.year}</p>
                  </div>
                </div>
                <div className="score-border">
                  <p>Popularity #{selectedMovie.popularity}</p>
                  <p className="small-text">
                    {selectedMovie.type}
                  </p>
                </div>
                <div>
                  <p>Members #{selectedMovie.members}</p>
                  <p className="small-text">{selectedMovie.studios[0].name}</p>
                </div>
              </div>
            <div>
              <Button onClick={handleAddList} className="tabs-button">
                Add to my Cart
              </Button>
            </div>
          </div>
        </div>
        <p className="para-text">Synopsis</p>
        <hr />
        <p className="text-4xl">{selectedMovie.synopsis}</p>
        {selectedMovie.background ? (
          <>
            <p className="para-text">Background</p>
            <hr />
            <p>{selectedMovie.background}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DetailsTab;
