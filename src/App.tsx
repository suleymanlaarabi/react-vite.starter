import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Flex
          h={"100vh"}
          w={"100vw"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          gap={5}
        >
          <Heading>Hello World !</Heading>
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default App;
