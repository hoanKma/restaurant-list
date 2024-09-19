import { Flex, Text } from "@chakra-ui/react";
import { memo } from "react";
import { FeaturedIcon } from "../../assets/FeaturedIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { StarIcon } from "../../assets/StarIcon";
import ImageSlider from "./image-slider";

interface RestaurantCardProps {
  id: number;
  name: string;
  category: string;
  favorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const Card: React.FC<RestaurantCardProps> = () => {
  return (
    <Flex w="full" flexDirection={"column"} gap={2} position={"relative"}>
      <ImageSlider />
      <Flex
        position={"absolute"}
        right={2}
        top={2}
        bg={"red.100"}
        p={2}
        borderRadius={"full"}
      >
        <HeartIcon />
      </Flex>
      <Flex align={"center"} gap={1}>
        <FeaturedIcon />
        <Text color={"#FF692E"} fontSize={"xs"}>
          {"나카노시마×야키토리 상위 맛집"}
        </Text>
      </Flex>

      <Flex gap={1} justifyContent={"space-between"}>
        <Text color="#344054" fontWeight={"semibold"} noOfLines={1}>
          {
            "카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야"
          }
        </Text>
        <Flex gap={1} align={"center"}>
          <StarIcon />
          <Text color="#344054">4.8(120)</Text>
        </Flex>
      </Flex>

      <Text color="#475467" noOfLines={1}>
        {"최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는"}
      </Text>
      <Text color="#475467" noOfLines={1}>
        {"오사카 나카노시마 · 야키토리 · 4~6만원"}
      </Text>
      {/* <Button mt={2} onClick={() => onToggleFavorite(id)}>
        {favorite ? "Unmark Favorite" : "Mark as Favorite"}
      </Button> */}
    </Flex>
  );
};

export default memo(Card);
