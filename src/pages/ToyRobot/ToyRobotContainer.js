import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToyRobotDashboard } from './ToyRobotDashboard';
import { validateRobotValues, isRobotPlaced, canWallPlaced, isWallPlaced } from '../../validators/positionValidators';
import { moveToDirection, changeDirection } from '../../selectors/toyRobotSelectors';

const initialValues = {
    row: '',
    column: '',
    direction: ''
};

const ToyRobotContainer = () => {
    const [robotPosition, setRobotPosition] = useState(null);
    const [wallPositions, setWallPosition] = useState([]);
    const [showReport, setReport] = useState(false);

    const formik = useFormik({
        initialValues,
        validate: (values) => validateRobotValues(values),
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            if (!isWallPlaced(values, wallPositions)) {
                setRobotPosition(values);
            }
            showReport && setReport(false);
        }
    });

    const reportClick = () => {
        isRobotPlaced(robotPosition) && setReport(true);
    };

    const placeWallClick = () => {
        const { values } = formik;
        if (canWallPlaced(values, robotPosition, wallPositions)) {
            setWallPosition([...wallPositions, { row: values.row, column: values.column }]);
        }
        showReport && setReport(false);
    };
    const moveClick = () => {
        if (robotPosition) {
            const newValues = moveToDirection(robotPosition, wallPositions);
            setRobotPosition(newValues);
        }
        showReport && setReport(false);
    };

    const directionChangeClick = (isLeft) => {
        if (robotPosition) {
            const newValues = changeDirection(robotPosition, isLeft);
            setRobotPosition(newValues);
        }
        showReport && setReport(false);
    };

    return (
        <ToyRobotDashboard
            formik={formik}
            robotPosition={robotPosition}
            placeWallClick={placeWallClick}
            moveClick={moveClick}
            directionChangeClick={directionChangeClick}
            reportClick={reportClick}
            showReport={showReport}
        />
    );
};

export { ToyRobotContainer };
