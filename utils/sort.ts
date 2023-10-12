export const sortCategoriesByDate = (a: ICategory, b: ICategory) => {
  if (a.updatedAt < b.updatedAt) return 1;
  if (a.updatedAt > b.updatedAt) return -1;
  return 0;
};

export const sortCategoriesByName = (a: ICategory, b: ICategory) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
};

export const sortProductsByDate = (a: IProduct, b: IProduct) => {
  if (a.updatedAt < b.updatedAt) return 1;
  if (a.updatedAt > b.updatedAt) return -1;
  return 0;
};

export const sortProductsByPurchaseNumber = (a: IProduct, b: IProduct) => {
  if (a.purchaseNumber < b.purchaseNumber) return 1;
  if (a.purchaseNumber > b.purchaseNumber) return -1;
  return 0;
};

export const sortProductsByName = (a: IProduct, b: IProduct) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
};

export const sortProductsByInventory = (a: IProduct, b: IProduct) => {
  if (a.inventory < b.inventory) return -1;
  if (a.inventory > b.inventory) return 1;
  return 0;
};

export const sortProductsByPriceAsc = (a: IProduct, b: IProduct) => {
  if (a.salePrice < b.salePrice) return -1;
  if (a.salePrice > b.salePrice) return 1;
  return 0;
};

export const sortProductsByPriceDesc = (a: IProduct, b: IProduct) => {
  if (a.salePrice < b.salePrice) return 1;
  if (a.salePrice > b.salePrice) return -1;
  return 0;
};

export const sortCustomerByDate = (a: ICustomer, b: ICustomer) => {
  if (a.createdAt < b.createdAt) return -1;
  if (a.createdAt > b.createdAt) return 1;
  return 0;
};

export const sortOrderByDate = (a: IOrder, b: IOrder) => {
  if (a.createdAt < b.createdAt) return 1;
  if (a.createdAt > b.createdAt) return -1;
  return 0;
};
