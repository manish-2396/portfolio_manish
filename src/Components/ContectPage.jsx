import React from "react";
import {
  Box,
  Text,
  Center,
  Button,
  SimpleGrid,
  Input,
} from "@chakra-ui/react";

const ContectPage = () => {
  return (
    <Center position="absolute" top="200px"  width="100%">
      <SimpleGrid columns={[1, null , 2]} spacing={100}>
        <Box height="auto" pl={10}>
          <Box>
             <Text as="u" color="white" fontSize={45} >Address</Text>
          </Box>
          <Text as="samp" color="white" fontSize={30} >Word No 11 , Baihar</Text>
          <Text as="samp" color="white" fontSize={30} > Balaghat , MP 481111</Text>
          <Text as="samp" color="white" fontSize={30} > ,India</Text>
          <Text>Mail Id : manishchouhan2396@gmail.com</Text>
        </Box>
        <Box height="auto" pr={10}>
          <Text ml={3} as="u">Conect Us</Text>
          <Input m="1rem" type="text" placeholder="Enter Name" />
          <Input m="1rem" type="email" placeholder="Enter Email id" />
          <Input m="1rem" type="number" placeholder="Mobile Number" />
          <Button m="1rem" color="white"  bgColor="teal.300">Submit</Button>
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default ContectPage;
