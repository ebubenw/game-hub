import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { type Platform } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "@/hooks/useGenres";
import type { GameQuery } from "@/App";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10" gap={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            {" "}
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {data.map((game) => (
        <GameCardContainer key={game.id}>
          {game.background_image ? (
            <GameCard game={game} />
          ) : (
            <Image src={noImage} />
          )}
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
