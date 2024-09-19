import { Box, Button, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

interface RestaurantCardProps {
  id: number;
  name: string;
  category: string;
  favorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const Card: React.FC<RestaurantCardProps> = ({
  id,
  name,
  category,
  favorite,
  onToggleFavorite,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src="placeholder.jpg" alt={name} />
      <Text fontWeight="bold">{name}</Text>
      <Text color="gray.600">{category}</Text>
      <Button mt={2} onClick={() => onToggleFavorite(id)}>
        {favorite ? "Unmark Favorite" : "Mark as Favorite"}
      </Button>
    </Box>
  );
};

export default memo(Card);
