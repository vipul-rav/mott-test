import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToyRobotDashboard } from './ToyRobotDashboard';
import { validateRobotValues, isRobotPlaced, canWallPlaced } from '../../validators/positionValidators';
import { moveToDirection, changeDirection } from '../../selectors/toyRobotSelectors';
const initialValues = {
    row: '',
    column: '',
    direction: ''
};

const ToyRobotContainer = () => {
    const [robotPosition, setRobotPosition] = useState(null);
    const [wallPositions, setWallPosition] = useState([]);

    const formik = useFormik({
        initialValues,
        validate: (values) => validateRobotValues(values),
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            if (!robotPosition) {
                setRobotPosition(values);
            } else {
                const newValues = moveToDirection(robotPosition, wallPositions);
                setRobotPosition(newValues);
            }
        }
    });

    const placeWallClick = () => {
        const { values } = formik;
        if (canWallPlaced(values, robotPosition, wallPositions)) {
            setWallPosition([...wallPositions, { row: values.row, column: values.column }]);
        }
        console.log(wallPositions);
    };
    const moveClick = () => {
        if (robotPosition) {
            const newValues = moveToDirection(robotPosition, wallPositions);
            setRobotPosition(newValues);
        }
    };

    const directionChangeClick = (isLeft) => {
        if (robotPosition) {
            const newValues = changeDirection(robotPosition, isLeft);
            setRobotPosition(newValues);
        }
    };

    return (
        <ToyRobotDashboard
            formik={formik}
            robotPosition={robotPosition}
            isRobotPlaced={isRobotPlaced(formik.values)}
            placeWallClick={placeWallClick}
            moveClick={moveClick}
            directionChangeClick={directionChangeClick}
        />
    );
};

export { ToyRobotContainer };
