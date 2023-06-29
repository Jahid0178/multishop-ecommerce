/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

interface IProps {
  priceRange: [number, number];
  tags: string[];
  category: string;
  brand: string;
}

const useSetQueryParams = ({ priceRange, tags, category, brand }: IProps) => {
  const performApiCall = () => {
    // Convert the price range to a string representation
    const priceRangeString = priceRange.join(",");

    // Perform your API call here using the updated property values
    // You can make use of the fetch() or axios library to perform the actual API call
    // Example:
    fetch(
      `your-api-endpoint?priceRange=${priceRangeString}&tags=${JSON.stringify(
        tags
      )}&category=${category}&brand=${brand}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any API call errors
        console.error(error);
      });
  };

  useEffect(() => {
    const queryString = new URLSearchParams({
      price: priceRange.join(","),
      tags: tags.join(","),
      category,
      brand,
    }).toString();

    const currentUrl = window.location.href;
    const updatedUrl = `${currentUrl.split("?")[0]}?${queryString}`;

    window.history.replaceState(null, "", updatedUrl);

    // Perform API call here based on the updated properties
    performApiCall();
  }, [priceRange, tags, category, brand, performApiCall]);

  return null;
};

export default useSetQueryParams;
