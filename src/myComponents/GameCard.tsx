import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import type { Game } from "@/hooks/useGames";
import { Card, CardBody } from "@chakra-ui/card";
import { Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray", "gray");
  const color = useColorModeValue("white", "dark");

  return (
    <>
      <Card
        padding="5"
        bg={bg}
        color={color}
        borderRadius={10}
        overflow={"hidden"}
      >
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
