export const parseAddress = (address: string): { street: string; city: string } => {
  const [streetAndPostal, city] = address.split(',').map(s => s.trim());
  const street = streetAndPostal.replace(/\d{2}-\d{3}/, '').trim();
  return { street, city };
};
