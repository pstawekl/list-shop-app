import { parseAddress } from './parseAddress';

test('parseAddress should correctly parse a valid address', () => {
	const address = 'ul. Jana Pawła 2 66-666, Kraków';
	const expected = { street: 'ul. Jana Pawła 2', city: 'Kraków' };

	expect(parseAddress(address)).toEqual(expected);
});

test('parseAddress should return null for an invalid address', () => {
	const address = 'Invalid Address';
	expect(parseAddress(address)).toEqual({ street: 'Invalid Address', city: undefined });
});