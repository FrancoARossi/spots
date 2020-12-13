import { useSelector } from "react-redux";

const Spot = ({ id }) => {
  const spotsList = useSelector((state) => state.spots.spotsList);
  const spot = spotsList.filter((spot) => spot.id === id)[0];

  return (
    <div style={{position: "relative", top: "80px", textAlign: "center"}}>
      <h1 style={{ fontSize: "1.8rem"}}>{spot.name}</h1>
    </div>
  );
};

export default Spot;
