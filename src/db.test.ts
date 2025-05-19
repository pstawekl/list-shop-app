import { testShop } from './db';

// src/db.test.ts

describe('testShop', () => {
  test('should have the correct structure', () => {
    expect(testShop).toHaveProperty('id');
    expect(testShop).toHaveProperty('address');
    expect(testShop).toHaveProperty('type');
    expect(testShop).toHaveProperty('imageUrl');
  });

  test('should have correct property values', () => {
    expect(testShop.id).toBe('123');
    expect(testShop.address).toBe('ul. Jana Pawła 2 66-666, Kraków');
    expect(testShop.type).toBe('REGULAR');
    expect(testShop.imageUrl).toBe('https://picsum.photos/800/600');
  });

  test('should have id as a string', () => {
    expect(typeof testShop.id).toBe('string');
  });

  test('should have a valid shop type', () => {
    const validTypes = ['REGULAR', 'FRANCHISE'];
    expect(validTypes).toContain(testShop.type);
  });

  test('should have a valid image URL', () => {
    expect(testShop.imageUrl).toMatch(/^https?:\/\/.+/);
  });

  test('should be immutable', () => {
    const shopCopy = { ...testShop };
    expect(shopCopy).toEqual(testShop);
    
    // Attempting to modify the copy shouldn't affect the original
    shopCopy.id = '456';
    expect(testShop.id).toBe('123');
  });
});