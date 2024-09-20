import { Box, Flex } from "@chakra-ui/react";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { MappedCategory } from "../ultils/constant";
import { isEmpty } from "../ultils/helper";
import { trpc } from "../ultils/trpc";
import InputSearch from "./components/input-search";
import Loading from "./components/loading";
import NoData from "./components/no-data";
import TabsComponent from "./components/tabs-component";
import List from "./list";
import { RestaurantCardProps } from "./list/interface";

interface CategoryContextType {
  category: string | null;
  setCategory: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextType | null>(null);

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantCardProps[]>([]);
  const [category, setCategory] = useState<string | null>(
    MappedCategory?.[0]?.englishName || null
  );

  const { data: restaurantsData, isLoading } = trpc.getRestaurants.useQuery();

  const contextValue = useMemo(
    () => ({ category, setCategory }),
    [category, setCategory]
  );

  useEffect(() => {
    if (!isEmpty(restaurantsData)) {
      const filteredRestaurants = restaurantsData.filter(
        (restaurant: RestaurantCardProps) =>
          category === "ALL"
            ? true
            : category === "OTHER"
            ? restaurant?.category !== "ALL"
            : restaurant?.category === category
      );
      setRestaurants(filteredRestaurants);
    }
  }, [category, restaurantsData]);

  return (
    <CategoryContext.Provider value={contextValue}>
      <Flex flex={1} flexDirection="column">
        <Box position="sticky" top={0} zIndex={100} bg="white" pb={4}>
          <InputSearch />
          <TabsComponent />
        </Box>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            {restaurants.length === 0 ? (
              <NoData message="No restaurants available" />
            ) : (
              <List restaurants={restaurants} />
            )}
          </>
        )}
      </Flex>
    </CategoryContext.Provider>
  );
};

export default Restaurants;
export { CategoryContext };
