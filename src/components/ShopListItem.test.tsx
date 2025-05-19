import { render, screen } from '@testing-library/react';
import { testShop } from '../db';
import { ShopListItem } from './ShopListItem';

test('renders ShopListItem component', () => {
  render(<ShopListItem shop={testShop} />);
  const linkElement = screen.getByText(/REGULAR/i);
  expect(linkElement).toBeInTheDocument();
});