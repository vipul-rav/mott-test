import { DIRECTION } from '../constants/stringConstant';
import { isWallPlaced } from '../validators/positionValidators';

const { NORTH, SOUTH, EAST, WEST } = DIRECTION;

export const moveToDirection = (values, wallPositions) => {
    const { direction, row, column } = values;
    const newDirection = { ...values };
    if (direction === NORTH) {
        if (column === '5') {
            newDirection.column = '1';
        } else {
            newDirection.column = String(Number(column) + 1);
        }
        return isWallPlaced(newDirection, wallPositions) ? values : newDirection;
    } else if (direction === EAST) {
        if (row === '5') {
            newDirection.row = '1';
        } else {
            newDirection.row = String(Number(row) + 1);
        }
        return isWallPlaced(newDirection, wallPositions) ? values : newDirection;
    } else if (direction === SOUTH) {
        if (column === '1') {
            newDirection.column = '5';
        } else {
            newDirection.column = String(Number(column) - 1);
        }
        return isWallPlaced(newDirection, wallPositions) ? values : newDirection;
    } else if (direction === WEST) {
        if (row === '1') {
            newDirection.row = '5';
        } else {
            newDirection.row = String(Number(column) - 1);
        }
        return isWallPlaced(newDirection, wallPositions) ? values : newDirection;
    }
    return values;
};

//turn to the left
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
