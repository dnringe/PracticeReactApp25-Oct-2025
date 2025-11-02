import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
// in map not using keys (not acceptable) <<< index as key <<<<<<< unique it (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card?.card?.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
