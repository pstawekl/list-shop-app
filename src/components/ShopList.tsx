import { useEffect, useLayoutEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Shop } from '../types/Shop';
import { ShopListItem } from './ShopListItem';
import Spinner from './Spinner';

type Props = {
    shops: Shop[];
    isLoading?: boolean;
    error?: string | null;
};

export const ShopList = ({ shops, isLoading, error }: Props) => {
    const [header, setHeader] = useState<HTMLElement | null>(null);
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: window.innerWidth
    });

    useLayoutEffect(() => {
        const timer = setTimeout(() => {
            const headerElement = document.querySelector('#header') as HTMLElement;
            if (headerElement) {
                setHeader(headerElement);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const updateDimensions = () => {
            if (header) {
                const calculatedHeight = window.innerHeight - header.clientHeight - 16;

                setDimensions({
                    height: calculatedHeight > 0 ? calculatedHeight : 0,
                    width: window.innerWidth
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, [header]);

    if (isLoading) return <Spinner />;
    if (error) return <p className="p-4 text-red-600">{error}</p>;
    if (shops.length === 0) return <p className="p-4">No shops found.</p>;

    return dimensions.height > 0 ? (
        <div className="w-full overflow-hidden">
            <List
                height={dimensions.height}
                width={dimensions.width}
                itemCount={shops.length}
                itemSize={100}
                className="border-t"
            >
                {({ index, style }: { index: number; style: React.CSSProperties }) => (
                    <div style={style}>
                        <ShopListItem shop={shops[index]} />
                    </div>
                )}
            </List>
        </div>
    ) : null;
};
