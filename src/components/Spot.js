import { useSelector } from "react-redux";

const Spot = (id) => {
  const spotsList = useSelector((state) => state.spots.spotsList);
  const spot = spotsList.filter((spot) => {
    return spot.id === id;
  });

  return (
    <div>
      <h1>{spot.name}</h1>
    </div>
  );
};

export default Spot;
