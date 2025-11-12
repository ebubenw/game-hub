import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import type { Game } from "@/hooks/useGames";
import { Card, CardBody } from "@chakra-ui/card";
import { Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageurl } from "@/services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray", "gray");
  const color = useColorModeValue("white", "dark");

  return (
    <>
      <Card padding="5" bg={bg} color={color}>
        <Image src={getCroppedImageurl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
