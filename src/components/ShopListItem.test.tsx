/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { testShop } from '../db';
import { ShopListItem } from './ShopListItem';

test('renders ShopListItem component', () => {
  render(<ShopListItem shop={testShop} />);
  const linkElement = screen.getByText(/REGULAR/i);
  expect(linkElement).toBeInTheDocument();
});

test('Google Maps button links to correct address URL', () => {
  render(<ShopListItem shop={testShop} />);

  const mapButton = screen.getByText(/Mapa/i);
  expect(mapButton).toBeInTheDocument();

  const mapLink = mapButton.closest('a');
  expect(mapLink).toHaveAttribute('href');

  const expectedAddress = encodeURIComponent(testShop.address);
  expect(mapLink?.getAttribute('href')).toContain(`query=${expectedAddress}`);

  const expectedGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${expectedAddress}`;
  expect(mapLink?.getAttribute('href')).toBe(expectedGoogleMapsUrl);

  expect(mapLink).toHaveAttribute('target', '_blank');
  expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');
});