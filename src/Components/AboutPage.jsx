import React from "react";
// import "../Style/AboutPageStyles.css";
import {
  Box,
  Image,
  Text,
  Center,
  VStack,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Center position="absolute" top="200px" width="100%">
      <VStack>
        <Heading>About Me</Heading>
        <Box>
          <Text fontSize={25} >Hello stranger! 👋, My name is</Text>
          <Text fontSize={25}  as="p">Manish Singh Chouhan</Text>
          <Text fontSize={25} >MERN Full Stack Developer</Text>
          <Text fontSize={25} >passionate about building digital products that </Text>
          <Text fontSize={25} > improve everyday experience for people.</Text>
        </Box>
        <SimpleGrid columns={[3, null, 7]} spacing="20px" maxW="70%" >
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/javascript.png" alt="JS" />
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML"/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/react-native.png" alt="react"/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/css3.png" alt=""/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/bootstrap.png" alt=""/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/chakra-ui.png" alt=""/>
          </Box>
          <Box>
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt=""/>
          </Box>
          <Box>
            <Image src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt=""/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/git.png" alt=""/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/redux.png" alt=""/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/express.png" alt=""/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/material-outlined/48/000000/json.png" alt=""/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/npm.png" alt=""/>
          </Box>
          <Box>
            <Image src="https://img.icons8.com/color/48/000000/material-ui.png" alt=""/>
          </Box>
        </SimpleGrid>
      </VStack>
    </Center>
  );
};

export default AboutPage;
