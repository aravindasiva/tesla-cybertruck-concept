import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import TeslaWord from "../svg/TeslaWord";

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const HeaderComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      color="black"
      {...props}
    >
      <Flex align="center" mr={5}>
        <TeslaWord w='150px' h='10px' fill='black' />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="solid"
          bg='black'
          color='#E7E7EA'
          _hover={{ bg: "#E7E7EA", color: "black", outlineColor: "black" }}
          _focus={{ outline: 'none' }}
        >
          Order now
        </Button>
      </Box>
    </Flex>
  );
};

export default HeaderComponent;





