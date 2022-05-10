import { validateRobotValues, isRobotPlaced, canWallPlaced, isWallPlaced } from '../positionValidators';

describe('validateRobotValues', () => {
    it('with error', () => {
        const result = validateRobotValues({ row: '', column: '', direction: '' });
        expect(result.error).toBe(true);
    });
    it('No error', () => {
        const result = validateRobotValues({ row: '1', column: '1', direction: 'NORTH' });
        expect(result).toBe(null);
    });
});

describe('isRobotPlaced', () => {
    it('No robot placed', () => {
        const result = isRobotPlaced({ row: '', column: '', direction: '' });
        expect(result).toBe(false);
    });
    it('Robot placed', () => {
        const result = isRobotPlaced({ row: '1', column: '1', direction: 'NORTH' });
        expect(result).toBe(true);
    });
    it('No Robot placed', () => {
        const result = isRobotPlaced();
        expect(result).toBe(false);
    });
});

describe('canWallPlaced', () => {
    it('No wall placed', () => {
        const result = canWallPlaced(null, null, null);
        expect(result).toBe(false);
    });
    it('Wall placed - no robot, no existing walls', () => {
        const result = canWallPlaced({ row: '1', column: '1' }, null, null);
        expect(result).toBe(true);
    });
    it('Wall placed - robot exist, no existing walls', () => {
        const result = canWallPlaced({ row: '1', column: '1' }, { row: '1', column: '1' }, []);
        expect(result).toBe(false);
    });
    it('Wall placed - no robot,  existing walls', () => {
        const result = canWallPlaced({ row: '1', column: '1' }, { row: '1', column: '2' }, [{ row: '1', column: '1' }]);
        expect(result).toBe(false);
    });
});

describe('isWallPlaced', () => {
    it('No wall placed', () => {
        const result = isWallPlaced({ row: '1', column: '1' }, []);
        expect(result).toBe(false);
    });
    it('Wall placed -', () => {
        const result = isWallPlaced({ row: '1', column: '1' }, [{ row: '1', column: '1' }]);
        expect(result).toBe(true);
    });
});
