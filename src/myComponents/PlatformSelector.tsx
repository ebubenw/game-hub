import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  HStack,
  Icon,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>
            <HStack>
              Platform
              <Icon as={BsChevronDown} />
            </HStack>
          </Button>
        </MenuTrigger>

        <MenuPositioner>
          <MenuContent>
            {data.map((platform) => (
              <MenuItem value={""} key={platform.id}>
                {platform.name}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuPositioner>
      </MenuRoot>
    </>
  );
}

export default PlatformSelector;
