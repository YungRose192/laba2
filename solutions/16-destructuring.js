const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
    if (!Array.isArray(locations) || locations.length === 0) {
        return null;
    }

    if (!Array.isArray(point) || point.length !== 2 || !locations.every(loc => Array.isArray(loc) && loc.length === 2 && Array.isArray(loc[1]) && loc[1].length === 2)) {
        return null;
    }

    let nearest = null;

    if (locations.length > 0) {
        nearest = locations.sort(([, [x1, y1]], [, [x2, y2]]) => {
            const distA = getDistance(point, [x1, y1]);
            const distB = getDistance(point, [x2, y2]);
            return distA - distB;
        })[0];
    }

    return nearest || null;
};

// END
