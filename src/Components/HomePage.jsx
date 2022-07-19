import React from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Image,
  Text,
  Center,
  VStack,
  Button,
} from "@chakra-ui/react";
import profile from "../picture/manish.jpg";

const HomePage = () => {
  return (
    <Center position="absolute" width="100%" top={100}>
      <VStack>
        <Image w={300} borderRadius="50%"  src={profile} />
        <Text as='cite' fontSize={35} m={3} >Hi I'M Manish Singh Chouhan</Text>
        <Text as='cite' fontSize={35} m={3} >MERN Full Stack Web Developer</Text>
        <Stack direction="row" spacing={2} align="center">
          <Button colorScheme="teal" variant="solid" m={3}>
            <Link to="/project">PROJECTS</Link>
          </Button>
          <Button colorScheme="teal" variant="solid" m={3} >
            <Link to="/contact">CONTECT</Link>
          </Button>
        </Stack>
      </VStack>
    </Center>
  );
};

export default HomePage;
