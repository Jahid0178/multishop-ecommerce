import { CompanyProductTypes } from "../interface/interface";
export const getExpiredProducts = (
  products: CompanyProductTypes[]
): CompanyProductTypes[] => {
  const currentDate: Date = new Date();
  const currentMonth: number = currentDate.getMonth() + 1; // Months are zero-based, so we add 1.
  const currentYear: number = currentDate.getFullYear();
  const expiredProducts: CompanyProductTypes[] = [];

  for (const product of products) {
    const [productYear, productMonth] = product.date.split("-").map(Number);

    if (
      productYear < currentYear ||
      (productYear === currentYear && productMonth < currentMonth)
    ) {
      if (product.types === "company" || product.types === "public") {
        expiredProducts.push(product);
      }
    }
  }

  return expiredProducts;
};

export const getNewAndOldCompanyProducts = (
  products: CompanyProductTypes[]
): {
  newCompanyProducts: CompanyProductTypes[];
  oldCompanyProducts: CompanyProductTypes[];
} => {
  const currentDate: Date = new Date();
  const thresholdInDays: number = 30;
  const newCompanyProducts: CompanyProductTypes[] = [];
  const oldCompanyProducts: CompanyProductTypes[] = [];

  for (const product of products) {
    if (product.types === "company") {
      const productDate: Date = new Date(product.date);
      const timeDiff: number = currentDate.getTime() - productDate.getTime();
      const diffInDays: number = timeDiff / (1000 * 3600 * 24);
      if (diffInDays <= thresholdInDays) {
        newCompanyProducts.push(product);
      } else {
        oldCompanyProducts.push(product);
      }
    }
  }

  return { newCompanyProducts, oldCompanyProducts };
};

export const getNewAndOldPublicProducts = (
  products: CompanyProductTypes[]
): {
  newPublicProducts: CompanyProductTypes[];
  oldPublicProducts: CompanyProductTypes[];
} => {
  const currentDate: Date = new Date();
  const thresholdInDays: number = 30;
  const newPublicProducts: CompanyProductTypes[] = [];
  const oldPublicProducts: CompanyProductTypes[] = [];

  for (const product of products) {
    if (product.types === "public") {
      const productDate: Date = new Date(product.date);
      const timeDiff: number = currentDate.getTime() - productDate.getTime();
      const diffInDays: number = timeDiff / (1000 * 3600 * 24);

      if (diffInDays <= thresholdInDays) {
        newPublicProducts.push(product);
      } else {
        oldPublicProducts.push(product);
      }
    }
  }

  return { newPublicProducts, oldPublicProducts };
};

// GENERATE RANDOM DATA
type Category = "electronics" | "technology" | "food" | "clothes";
type ProductType = "company" | "public";

export interface Item {
  id: string;
  title: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  types: ProductType;
  date: Date;
}

const categories: Category[] = ["electronics", "technology", "food", "clothes"];
const productTypes: ProductType[] = ["company", "public"];

function getRandomDate(start: Date, end: Date): Date {
  const startDate = start.getTime();
  const endDate = end.getTime();
  const randomTime = Math.random() * (endDate - startDate) + startDate;
  return new Date(randomTime);
}

export function generateRandomItem(): Item {
  const id = Math.random().toString(36).substr(2, 9);
  const title = `Item ${id}`;
  const price = Math.random() * 1000;
  const category = categories[Math.floor(Math.random() * categories.length)];
  const image =
    category === "clothes"
      ? "https://images.unsplash.com/photo-1561526116-e2460f4d40a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=270&q=80"
      : category === "technology"
      ? "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=270&q=80"
      : category === "electronics"
      ? "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=270&q=80"
      : "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=270&q=80";
  const rating = Math.floor(Math.random() * 5) + 1;
  const types = productTypes[Math.floor(Math.random() * productTypes.length)];

  // Generate a random date within the range of the current month, previous month, and two months ago
  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const twoMonthsAgoStart = new Date(now.getFullYear(), now.getMonth() - 2, 1);
  const date = getRandomDate(twoMonthsAgoStart, currentMonthStart);

  return { id, title, price, category, image, rating, types, date };
}
