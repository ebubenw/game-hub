import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { HStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <ColorModeButton whiteSpace="nowrap" onChange={toggleColorMode} />
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
