import { Link } from "react-router-dom";

const SpotsList = ({ spotsList }) => {
  const spots = spotsList;

  return (
    <div>
      {spots.map((spot) => (
        <div>
          <Link key={spot.id} to={`/spot/${spot.id}`}>
            <button
              style={{
                zIndex: "10",
                justifyContent: "space-evenly",
                alignContent: "center",
                position: "relative",
                left: "50%",
                textAlign: "center",
              }}
              className="btn btn-lg btn-primary"
              key={spot.id}
            >
              {spot.name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SpotsList;
