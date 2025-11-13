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

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

function SortSelector({ sortOrder, onSelectSortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rate" },
  ];

  const currentSortorder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>
            <HStack>
              Order by: {currentSortorder?.label || "Relevance"}
              <Icon as={BsChevronDown} />
            </HStack>
          </Button>
        </MenuTrigger>

        <MenuPositioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => onSelectSortOrder(order.value)}
                value={order.value}
                key={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
          </Menu.Content>
        </MenuPositioner>
      </MenuRoot>
    </>
  );
}

export default SortSelector;
