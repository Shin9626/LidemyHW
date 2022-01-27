const join = require('./hw5_join')
const repeat = require('./hw5_repeat')

describe('join 測試:', () => {
    test('[1, 2, 3], O 的結果應該為: 1O2O3', ()=> {
        expect(join([1, 2, 3], 'O')).toBe('1O2O3');
    });

    test('[Jonathan, Joseph, Johnny], ★ 的結果應該為: Jonathan★Joseph★Johnny', () => {
        expect(join(['Jonathan', 'Joseph', 'Johnny'], '★')).toBe('Jonathan★Joseph★Johnny');
    });

    test('[Kono, Dio, Da], ---- 的結果應該為: Kono----Dio----Da', () => {
        expect(join(['Kono', 'Dio', 'Da'], '----')).toBe('Kono----Dio----Da');
    });
})

describe('repeat 測試:', () => {
    test('{123, 3} 的結果應該為: 123123123', () => {
        expect(repeat('123', 3)).toBe('123123123');
    });

    test('母搭, 5 的結果應該為: 母搭母搭母搭母搭母搭', () => {
        expect(repeat('母搭', 5)).toBe('母搭母搭母搭母搭母搭');
    });

    test('歐拉, 40 的結果應該為: 歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉', () => {
        expect(repeat('歐拉', 40)).toBe('歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉歐拉');
    });
})