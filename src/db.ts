import { Shop } from "./types/Shop";

export const testShop: Shop = {
  id: '123', 
  address: 'ul. Jana Pawła 2 66-666, Kraków', 
  type: 'REGULAR', 
  imageUrl: 'https://picsum.photos/800/600'
}

// Funkcja generująca 1000 przykładowych sklepów
const generateShops = (): Shop[] => {
  const shops: Shop[] = [];
  const types = ["REGULAR", "FRANCHISE"];
  const streets = [
    "Jana Pawła", "Mickiewicza", "Grunwaldzka", "Piotrkowska", "Marszałkowska", 
    "Długa", "Kościuszki", "Wolności", "Świętojańska", "Zamkowa", "Krakowska", 
    "Warszawska", "Poznańska", "Wrocławska", "Gdańska", "Toruńska", "Lubelska", 
    "Rzeszowska", "Białostocka", "Opolska", "Zielonogórska", "Szczecińska", "Bydgoska", 
    "Olsztyńska", "Koszalińska", "Słupska", "Sosnowiecka", "Radomska", "Kaliska", 
    "Elbląska", "Włocławska", "Siedlecka", "Płocka", "Tarnowska", "Częstochowska", 
    "Grudziądzka", "Leszczyńska", "Zamojska", "Łomżyńska", "Suwalska", "Chełmska"
  ];
  
  const cities = [
    "Warszawa", "Kraków", "Gdańsk", "Łódź", "Wrocław", "Gdynia", "Katowice", 
    "Tarnów", "Kielce", "Poznań", "Jelenia Góra", "Słupsk", "Toruń", "Lublin", 
    "Rzeszów", "Białystok", "Opole", "Zielona Góra", "Szczecin", "Bydgoszcz", 
    "Olsztyn", "Koszalin", "Sosnowiec", "Radom", "Kalisz", "Elbląg", "Włocławek", 
    "Siedlce", "Płock", "Częstochowa", "Grudziądz", "Leszno", "Zamość", "Łomża", 
    "Suwałki", "Chełm", "Przemyśl", "Krosno", "Sanok", "Jarosław"
  ];
  
  for (let i = 1; i <= 1000; i++) {
    const streetIndex = Math.floor(Math.random() * streets.length);
    const cityIndex = Math.floor(Math.random() * cities.length);
    const typeIndex = Math.floor(Math.random() * 2);
    const postalCode = `${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 900) + 100}`;
    const buildingNumber = Math.floor(Math.random() * 200) + 1;
    
    shops.push({
      id: i.toString(),
      address: `ul. ${streets[streetIndex]} ${buildingNumber} ${postalCode}, ${cities[cityIndex]}`,
      imageUrl: 'https://picsum.photos/800/600',
      type: types[typeIndex] as "REGULAR" | "FRANCHISE",
    });
  }
  
  return shops;
};

export const shopList: Shop[] = generateShops();