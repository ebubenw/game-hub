import useGenres from "@/hooks/useGenres";
import {
  HStack,
  Image,
  List,
  ListItem,
  ListRoot,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getCroppedImageurl } from "@/services/image-url";

function GenreList() {
  const { data } = useGenres();

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
