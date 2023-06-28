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
  // console.log()
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
