import { useSelector } from "react-redux";

const Spot = ({ id }) => {
  const spotsList = useSelector((state) => state.spots.spotsList);
  const spot = spotsList.filter((spot) => spot.id === id)[0];

  return (
    <div>
      <h1>{spot.name}</h1>
    </div>
  );
};

export default Spot;
