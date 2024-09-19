// src/pages/Restaurants.tsx
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import List from "./sub/list";

interface Restaurant {
  id: number;
  name: string;
  category: string;
  favorite: boolean;
}

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      // const response = await fetch("/api/restaurants");
      // const data = await response.json();
      setRestaurants([
        {
          id: 1,
          name: "Sushi Place",
          category: "SUSHI",
          favorite: false,
        },
        {
          id: 2,
          name: "Tonkatsu Heaven",
          category: "TONKATSU",
          favorite: true,
        },
        {
          id: 3,
          name: "Ramen World",
          category: "RAMEN",
          favorite: false,
        },
        {
          id: 4,
          name: "Unagi Delight",
          category: "UNAGI",
          favorite: true,
        },
        {
          id: 5,
          name: "Tempura Paradise",
          category: "TEMPURA",
          favorite: false,
        },
        {
          id: 6,
          name: "Yakitori Spot",
          category: "YAKITORI",
          favorite: false,
        },
        {
          id: 7,
          name: "Curry Corner",
          category: "CURRY",
          favorite: true,
        },
        {
          id: 8,
          name: "Sukiyaki Place",
          category: "SUKIYAKI",
          favorite: false,
        },
        {
          id: 9,
          name: "Yakiniku Grill",
          category: "YAKINIKU",
          favorite: true,
        },
        {
          id: 10,
          name: "Donburi Delight",
          category: "DONBURI",
          favorite: false,
        },
      ]);
    };

    fetchRestaurants();
  }, []);

  const toggleFavorite = async (id: number) => {
    await fetch(`/api/restaurants/${id}/favorite`, { method: "POST" });
    setRestaurants((prev: any) =>
      prev.map((restaurant: any) =>
        restaurant.id === id
          ? { ...restaurant, favorite: !restaurant.favorite }
          : restaurant
      )
    );
  };

  return (
    <Flex>
      <List restaurants={restaurants} onToggleFavorite={toggleFavorite} />
    </Flex>
  );
};

export default Restaurants;
