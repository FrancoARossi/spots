import { Link } from "react-router-dom";

const SpotsList = ({ spotsList }) => {
  const spots = spotsList;

  return (
    <div style={{width: "100%", position: "absolute",top: "80px"}}>
      {spots.map((spot) => (
        <div>
          <Link key={spot.Id} to={`/spot/${spot.Id}`}>
            <button
              style={{width: "100%", marginTop: ".5em"}}
              className="btn btn-lg btn-primary"
              key={spot.Id}
            >
              {spot.Name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SpotsList;
