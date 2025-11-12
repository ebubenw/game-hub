import useGenres from "@/hooks/useGenres";
import { HStack, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { getCroppedImageurl } from "@/services/image-url";

function GenreList() {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        ))}
      </Stack>
    </>
  );
}

export default GenreList;
