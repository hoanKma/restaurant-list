import { SimpleGrid } from "@chakra-ui/react";
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
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={5}>
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          {...restaurant}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </SimpleGrid>
  );
};

export default List;
