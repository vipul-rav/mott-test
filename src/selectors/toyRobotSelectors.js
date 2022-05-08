import { DIRECTION } from '../constants/stringConstant';
import { isWallPlaced } from '../validators/positionValidators';

const { NORTH, SOUTH, EAST, WEST } = DIRECTION;

export const moveToDirection = (values, wallPositions) => {
    const { direction, row, column } = values;
    const newDirection = { ...values };

    if (direction === NORTH) {
        newDirection.column = column === '5' ? '1' : String(Number(column) + 1);
    } else if (direction === EAST) {
        newDirection.row = row === '5' ? '1' : String(Number(row) + 1);
    } else if (direction === SOUTH) {
        newDirection.column = column === '1' ? '5' : String(Number(column) - 1);
    } else if (direction === WEST) {
        newDirection.row = row === '1' ? '5' : String(Number(row) - 1);
    }

    return isWallPlaced(newDirection, wallPositions) ? values : newDirection;
};

export const changeDirection = (values, isLeft) => {
    const { direction } = values;
    let newDirection = direction;

    if (direction === NORTH) {
        newDirection = isLeft ? WEST : EAST;
    } else if (direction === EAST) {
        newDirection = isLeft ? NORTH : SOUTH;
    } else if (direction === SOUTH) {
        newDirection = isLeft ? EAST : WEST;
    } else if (direction === WEST) {
        newDirection = isLeft ? SOUTH : NORTH;
    }

    return { ...values, direction: newDirection };
};
