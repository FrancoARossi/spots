import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateSpots } from "../slices/spotsSlice";
import { Marker } from "react-map-gl";
import { GiPositionMarker } from "react-icons/gi";

export default function SpotsMarkers() {
  const dispatch = useDispatch();

  const spots = useSelector((state) => state.spots);

  const getSpots = () => {
    fetch("http://localhost:3000/spots")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((spot) =>
          dispatch(
            updateSpots({
              id: spot.id,
              name: spot.name,
              descripcion: spot.descripcion,
              latitude: spot.latitude,
              longitude: spot.longitude,
            })
          )
        );
      });
  };

  useEffect(() => {
    getSpots();
    // eslint-disable-next-line
  }, []);

  return spots.map((spot) => (
    <Marker latitude={spot.latitude} longitude={spot.longitude}>
      <GiPositionMarker size={30} />
    </Marker>
  ));
}
