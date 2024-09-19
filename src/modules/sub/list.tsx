import { Flex } from "@chakra-ui/react";
import Card from "./card";

interface Restaurant {
  id: number;
  name: string;
  category: string;
  favorite: boolean;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
  onToggleFavorite: (id: number) => void;
}

const List: React.FC<RestaurantListProps> = ({
  restaurants,
  onToggleFavorite,
}) => {
  return (
    <Flex flex={1} flexDirection="column" gap={4}>
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          {...restaurant}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </Flex>
  );
};

export default List;
