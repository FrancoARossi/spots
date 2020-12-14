import { useSelector } from "react-redux";

const Spot = ({ id }) => {
  const spotsList = useSelector((state) => state.spots.spotsList);
  const spot = spotsList.filter((spot) => spot.Id === id)[0];

  return (
    <div
      style={{
        position: "relative",
        top: "80px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", padding: "30px" }}>{spot.Name}</h2>
      <div style={{ fontSize: "1.1rem" }}>
        <p>{spot.Description}</p>
        <p>Tags: {spot.tags.join(", ")}</p>
      </div>
    </div>
  );
};

export default Spot;
