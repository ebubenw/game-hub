import useGenres, { type Genre } from "@/hooks/useGenres";
import { Button, HStack, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { getCroppedImageurl } from "@/services/image-url";

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
      <Stack>
        {data.map((genre) => (
          <HStack key={genre.id} paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageurl(genre.image_background)}
            />
            <Button
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
