import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { resList } from "../utils/mockData";
// in map not using keys (not acceptable) <<< index as key <<<<<<< unique it (best practice)
const Body = () => {
  // Local State Variable - Super powerful variable
  console.log("resList", resList);
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log("listOfRestaurants:::", listOfRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.card?.card?.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            // console.log("listOfRestaurants::::", listOfRestaurants);
            // console.log("filteredList:::", filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
