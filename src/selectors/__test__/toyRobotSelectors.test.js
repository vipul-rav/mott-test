import { moveToDirection, changeDirection } from '../toyRobotSelectors';

describe('MoveToDirection', () => {
    it('Direction -> North -> Column->1', () => {
        const result = moveToDirection({ row: '1', column: '1', direction: 'NORTH' }, []);
        expect(result.column).toBe('2');
    });
    it('Direction -> North -> Column->5', () => {
        const result = moveToDirection({ row: '1', column: '5', direction: 'NORTH' }, []);
        expect(result.column).toBe('1');
    });
    it('Direction -> East -> Row->1', () => {
        const result = moveToDirection({ row: '1', column: '1', direction: 'EAST' }, []);
        expect(result.row).toBe('2');
    });
    it('Direction -> East -> Row->5', () => {
        const result = moveToDirection({ row: '5', column: '1', direction: 'EAST' }, []);
        expect(result.row).toBe('1');
    });
    it('Direction -> SOUTH -> Column->1', () => {
        const result = moveToDirection({ row: '1', column: '2', direction: 'SOUTH' }, []);
        expect(result.column).toBe('1');
    });
    it('Direction -> SOUTH -> Column->1', () => {
        const result = moveToDirection({ row: '1', column: '1', direction: 'SOUTH' }, []);
        expect(result.column).toBe('5');
    });
    it('Direction -> WEST -> Row->2', () => {
        const result = moveToDirection({ row: '2', column: '1', direction: 'WEST' }, []);
        expect(result.row).toBe('1');
    });
    it('Direction -> WEST -> Row->1', () => {
        const result = moveToDirection({ row: '1', column: '1', direction: 'WEST' }, []);
        expect(result.row).toBe('5');
    });
    it('Wall placed', () => {
        const result = moveToDirection({ row: '1', column: '1', direction: 'NORTH' }, [{ row: '1', column: '2' }]);
        expect(result.column).toBe('1');
    });
    it('Direction -> WEST1', () => {
        const result = moveToDirection({ row: '1', column: '1', direction: 'WEST1' }, []);
        expect(result.row).toBe('1');
    });
});

describe('changeDirection', () => {
    it('Direction -> North -> isLeft->false', () => {
        const result = changeDirection({ direction: 'NORTH' }, false);
        expect(result.direction).toBe('EAST');
    });
    it('Direction -> North -> isLeft->true', () => {
        const result = changeDirection({ direction: 'NORTH' }, true);
        expect(result.direction).toBe('WEST');
    });
    it('Direction -> EAST -> isLeft->false', () => {
        const result = changeDirection({ direction: 'EAST' }, false);
        expect(result.direction).toBe('SOUTH');
    });
    it('Direction -> EAST -> isLeft->true', () => {
        const result = changeDirection({ direction: 'EAST' }, true);
        expect(result.direction).toBe('NORTH');
    });
    it('Direction -> SOUTH -> isLeft->false', () => {
        const result = changeDirection({ direction: 'SOUTH' }, false);
        expect(result.direction).toBe('WEST');
    });
    it('Direction -> SOUTH -> isLeft->true', () => {
        const result = changeDirection({ direction: 'SOUTH' }, true);
        expect(result.direction).toBe('EAST');
    });
    it('Direction -> WEST -> isLeft->false', () => {
        const result = changeDirection({ direction: 'WEST' }, false);
        expect(result.direction).toBe('NORTH');
    });
    it('Direction -> WEST -> isLeft->true', () => {
        const result = changeDirection({ direction: 'WEST' }, true);
        expect(result.direction).toBe('SOUTH');
    });
    it('Direction -> WEST -> isLeft->true', () => {
        const result = changeDirection({ direction: 'WEST1' }, true);
        expect(result.direction).toBe('WEST1');
    });
});
