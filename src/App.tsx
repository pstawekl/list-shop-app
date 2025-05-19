import { useEffect, useState } from 'react';
import { ShopList } from './components/ShopList';
import { shopList } from './db';
import { Shop } from './types/Shop';

function App() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShops(shopList);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <h1 className="text-3xl font-bold text-center py-4" id="header">Lista sklepów</h1>
      <div className="flex-1 overflow-hidden">
        <ShopList shops={shops} isLoading={loading} />
      </div>
    </div>
  );
}

export default App;
