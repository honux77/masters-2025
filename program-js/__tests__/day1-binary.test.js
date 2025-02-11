const { dec2bin, bin2dec, printBin } = require('../day1-binary');

test('10진수에서 2진수를 변환이 잘 되어야 한다.', () => {
	expect(dec2bin(0)).toBe('00000000');
	expect(dec2bin(1)).toBe('00000001');
	expect(dec2bin(2)).toBe('00000010');
	expect(dec2bin(3)).toBe('00000011');
	expect(dec2bin(4)).toBe('00000100');
	expect(dec2bin(10)).toBe('00001010');
	expect(dec2bin(255)).toBe('11111111');		
});

test('2진수에서 10진수로 변환이 잘 되어야 한다.', () => {
	expect(bin2dec('00000000')).toBe(0);
	expect(bin2dec('00000001')).toBe(1);
	expect(bin2dec('00000010')).toBe(2);
	expect(bin2dec('00000011')).toBe(3);
	expect(bin2dec('00000100')).toBe(4);
	expect(bin2dec('00001010')).toBe(10);
	expect(bin2dec('11111111')).toBe(255);
});