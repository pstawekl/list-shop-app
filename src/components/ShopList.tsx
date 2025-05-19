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

    // Znajdź element nagłówka po załadowaniu komponentu
    useLayoutEffect(() => {
        const timer = setTimeout(() => {
            const headerElement = document.querySelector('#header') as HTMLElement;
            if (headerElement) {
                setHeader(headerElement);
            }
        }, 100); // Zwiększone opóźnienie dla pewności

        return () => clearTimeout(timer);
    }, []);

    // Aktualizuj wymiary po znalezieniu nagłówka i przy zmianie rozmiaru okna
    useEffect(() => {
        const updateDimensions = () => {
            if (header) {
                // Obliczamy dostępną wysokość: wysokość okna minus wysokość nagłówka minus dodatkowy margines
                const calculatedHeight = window.innerHeight - header.clientHeight - 16; // 16px to margines dla bezpieczeństwa

                setDimensions({
                    height: calculatedHeight > 0 ? calculatedHeight : 0,
                    width: window.innerWidth
                });
            }
        };

        // Aktualizuj wymiary od razu i przy każdej zmianie rozmiaru okna
        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, [header]);

    if (isLoading) return <Spinner />;
    if (error) return <p className="p-4 text-red-600">{error}</p>;
    if (shops.length === 0) return <p className="p-4">No shops found.</p>;

    // Renderuj listę tylko gdy mamy obliczoną wysokość
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
