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
import { data } from "framer-motion/client";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>
            <HStack>
              Order by: relevance
              <Icon as={BsChevronDown} />
            </HStack>
          </Button>
        </MenuTrigger>

        <MenuPositioner>
          <Menu.Content>
            <MenuItem value="">relevance</MenuItem>
            <MenuItem value="">date added</MenuItem>
            <MenuItem value="">name</MenuItem>
            <MenuItem value="">release date</MenuItem>
            <MenuItem value="">popularity</MenuItem>
            <MenuItem value="">average rating</MenuItem>
          </Menu.Content>
        </MenuPositioner>
      </MenuRoot>
    </>
  );
}

export default SortSelector;
