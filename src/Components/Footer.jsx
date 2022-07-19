import {
  SimpleGrid,
  Box,
  HStack,
  Text,
  Heading,
  Link,
  Image,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <SimpleGrid
      columns={[1, null, 2]}
      spacingX="40px"
      spacingY="20px"
      bgGradient="linear(to-r, green.200, pink.500)"
      pr={10}
      pl={10}
      pb={10}
      pt={5}
    >
      <Box height="auto" p={5}>
        <HStack>
          <Box mr={50} >
            <Image
              width="3rem"
              src="https://img.icons8.com/color/344/home--v1.png"
              alt=""
            />
          </Box>
          <Box>
            <Text fontSize={27} color="red.900">Word No 11 Baihar</Text>
            <Text fontSize={27} color="red.900">Balaghat MP , 481111 India</Text>
          </Box>
        </HStack>
        <HStack mt={2}>
          <Box mr={50} >
            <Image
              width="3rem"
              src="https://img.icons8.com/color/344/phone-ringing--v2.png"
              alt=""
            />
          </Box>
          <Box>
            <Text fontSize={27} color="red.900">+91 7020949932</Text>
          </Box>
        </HStack>
        <HStack mt={2}>
          <Box mr={50} >
            <Image
              width="3rem"
              src="https://img.icons8.com/color/344/gmail-login.png"
              alt=""
            />
          </Box>
          <Box>
            <Text fontSize={27} color="red.900">manishchouhan2396@gmail.com</Text>
          </Box>
        </HStack>
      </Box>
      <Box height="auto" p={5}>
        <Heading>Conect Us</Heading>
        <Text color="red.900">This is me Manish and Social Media Site</Text>
        <HStack mt={2}>
          <Box mr={50} >
            <Link href="https://github.com/manishchouhan2396" isExternal>
              <Image
                width="3rem"
                src="https://img.icons8.com/color/344/github--v1.png"
                alt="github"
              />
            </Link>
          </Box>
          <Box mr={50} >
            <Link
              href="https://www.linkedin.com/in/manish-singh-chouhan-6b823620b/"
              isExternal
            >
              <Image
                width="3rem"
                src="https://img.icons8.com/color/344/linkedin-circled--v1.png"
                alt="LinkedIn"
              />
            </Link>
          </Box>
        </HStack>
      </Box>
    </SimpleGrid>
  );
};

export default Footer;
