export const validateRobotValues = (values) => {
    const { row, column, direction } = values;
    if (!row || !column || !direction) {
        return { error: true };
    }

    return null;
};

export const isRobotPlaced = (values) => {
    const { direction, row, column } = values;

    if (!direction || !row || !column) return false;
    return true;
};

export const canWallPlaced = (values, robotPosition, wallPositions) => {
    if (values) {
        const { row, column } = values;
        if (wallPositions) {
            const wallPlaced = isWallPlaced(values, wallPositions);
            if (wallPlaced) return false;
        }

        if (robotPosition && robotPosition.row === row && robotPosition.column === column) return false;
        return true;
    }
    return false;
};

export const isWallPlaced = (position, wallPositions) => {
    const { row, column } = position;
    const wallPlace = wallPositions.find((wall) => wall.row === row && wall.column === column);
    return !!wallPlace;
};
