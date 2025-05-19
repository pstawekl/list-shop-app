import { render, screen } from '@testing-library/react';
import { testShop } from '../db';
import { ShopListItem } from './ShopListItem';

test('renders ShopListItem component', () => {
  render(<ShopListItem shop={testShop} />);
  const linkElement = screen.getByText(/REGULAR/i);
  expect(linkElement).toBeInTheDocument();
});

test('Google Maps button links to correct address URL', () => {
  // Renderowanie komponentu z testowym sklepem
  render(<ShopListItem shop={testShop} />);

  // Znajdowanie przycisku/linku do mapy
  const mapButton = screen.getByText(/Mapa/i);
  expect(mapButton).toBeInTheDocument();

  // Sprawdzenie czy link ma odpowiedni atrybut href z poprawnym adresem URL Google Maps
  const mapLink = mapButton.closest('a');
  expect(mapLink).toHaveAttribute('href');

  // Sprawdzenie czy URL Google Maps zawiera zakodowany adres sklepu
  const expectedAddress = encodeURIComponent(testShop.address);
  expect(mapLink?.getAttribute('href')).toContain(`query=${expectedAddress}`);

  // Sprawdzenie poprawności pełnego URL
  const expectedGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${expectedAddress}`;
  expect(mapLink?.getAttribute('href')).toBe(expectedGoogleMapsUrl);

  // Sprawdzenie atrybutów dostępności i bezpieczeństwa
  expect(mapLink).toHaveAttribute('target', '_blank');
  expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');
});