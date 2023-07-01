/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ParsedUrlQuery } from "querystring";
import queryString from "query-string";
export interface SearchQuery {
  priceRange: [number, number];
  tags: string[];
  category: string;
  brand: string;
}

const useSetQueryParams = <T extends SearchQuery>() => {
  const router = useRouter();
  const query = (router as any)?.query;

  const setQuery = (newQuery: Partial<T>) => {
    const mergedQuery = { ...query, ...newQuery };
    const stringifiedQuery = queryString.stringify(mergedQuery);

    router.push(`?${stringifiedQuery}`);
  };

  return { query: query as T, setQuery };
};

export default useSetQueryParams;
