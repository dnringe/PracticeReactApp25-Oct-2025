import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import { resList } from "../utils/mockData";
// in map not using keys (not acceptable) <<< index as key <<<<<<< unique it (best practice)
const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      info: {
        id: "736076",
        name: "S Kumar Wadewale",
        cloudinaryImageId: "e427d33a122a3a544fb83ee915a78114",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Snacks", "Fast Food", "Thalis"],
        avgRating: 3.3,

        sla: {
          deliveryTime: 38,
        },
      },
    },
    {
      info: {
        id: "736077",
        name: "KFC",
        cloudinaryImageId: "e427d33a122a3a544fb83ee915a78114",
        costForTwo: "₹400 for two",
        cuisines: ["South Indian", "Snacks", "Fast Food", "Thalis"],
        avgRating: 4.5,

        sla: {
          deliveryTime: 40,
        },
      },
    },
    {
      info: {
        id: "736078",
        name: "MCD",
        cloudinaryImageId: "e427d33a122a3a544fb83ee915a78114",
        costForTwo: "₹400 for two",
        cuisines: ["South Indian", "Snacks", "Fast Food", "Thalis"],
        avgRating: 4.1,

        sla: {
          deliveryTime: 40,
        },
      },
    },
  ]);
  // Normal JS Variable
  /*let listOfRestaurants2 = [
    {
      info: {
        id: "736076",
        name: "S Kumar Wadewale",
        cloudinaryImageId: "e427d33a122a3a544fb83ee915a78114",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Snacks", "Fast Food", "Thalis"],
        avgRating: 3.3,

        sla: {
          deliveryTime: 38,
        },
      },
    },
  ];*/
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
