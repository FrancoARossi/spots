import {distanceToUser} from "./distanceToUser";

export const sortSpotsByDistanceToUser = (spotsList, userPosition) => {
    return spotsList.sort(
        (spot1, spot2) =>
            distanceToUser({
                spot: spot1,
                userPosition: userPosition,
            }) -
            distanceToUser({
                spot: spot2,
                userPosition: userPosition,
            })
    );
};
