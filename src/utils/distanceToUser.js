export const distanceToUser = ({ spot, userPosition }) => {
  const R = 6371;
  const omega1 = (userPosition.latitude * Math.PI) / 180;
  const omega2 = (spot.Latitude * Math.PI) / 180;
  const deltaOmega = ((spot.Latitude - userPosition.latitude) * Math.PI) / 180;
  const deltaLambda =
    ((spot.Longitude - userPosition.longitude) * Math.PI) / 180;

  const a =
    Math.sin(deltaOmega / 2) * Math.sin(deltaOmega / 2) +
    Math.cos(omega1) *
      Math.cos(omega2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in meters
};
