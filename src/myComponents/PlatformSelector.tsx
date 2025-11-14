import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>
            <HStack>
              {selectedPlatform?.name || "Platforms"}
              <Icon as={BsChevronDown} />
            </HStack>
          </Button>
        </MenuTrigger>

        <MenuPositioner>
          <Menu.Content>
            {data.map((platform) => (
              <MenuItem
                onClick={() => onSelectPlatform(platform)}
                value={""}
                key={platform.slug}
              >
                {platform.name}
              </MenuItem>
            ))}
          </Menu.Content>
        </MenuPositioner>
      </MenuRoot>
    </>
  );
}

export default PlatformSelector;
