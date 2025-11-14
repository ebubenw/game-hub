import useGenres, { type Genre } from "@/hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import getCroppedImageurl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading marginBottom={3}>Genres</Heading>
      <Stack>
        {data.map((genre) => (
          <HStack key={genre.id} paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageurl(genre.image_background)}
            />
            <Button
              whiteSpace="wrap"
              textAlign="left"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              variant="plain"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </Stack>
    </>
  );
}

export default GenreList;
