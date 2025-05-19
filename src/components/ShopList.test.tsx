import { render } from '@testing-library/react';
import { testShop } from '../db';
import { ShopList } from './ShopList';

test('renders ShopList component', () => {
	const { container } = render(<ShopList shops={[testShop]} />);
	expect(container).toBeInTheDocument();
});