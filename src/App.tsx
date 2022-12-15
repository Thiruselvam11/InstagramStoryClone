import * as React from "react";
import {
  ChakraProvider,
  Box,
  Image,
  theme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Container,
} from "@chakra-ui/react";
import './App.css'

export const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (

    <ChakraProvider theme={theme}>
      <Box
        
        height={"100vh"}
        width={"100%"}
        textAlign="center"
        fontSize="xl"
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        
        borderRadius={1000}
      >
        <Container 
        width={"100%"}
        height={"100px"}
        backgroundColor={"#F0EEEE"}
        display={"flex"}
        alignItems="center"
        gap={"20px"}
        borderColor={"#696868"}
        



                
        >
        <Image
          src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400011/alexvolot200400011.jpg?ver=6"
          width={"70px"}
          height="70px"
          onClick={() => {
            setIsOpen(true);
          }}
          gap="50px"
          borderRadius={1000}
          objectFit={"cover"}
        />
        <Image
          src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400011/alexvolot200400011.jpg?ver=6"
          width={"70px"}
          height="70px"
          onClick={() => {
            setIsOpen(true);
          }}
          borderRadius={1000}
          objectFit={"cover"}
        />
         <Image
          src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400011/alexvolot200400011.jpg?ver=6"
          width={"70px"}
          height="70px"
          onClick={() => {
            setIsOpen(true);
          }}
          borderRadius={1000}
          objectFit={"cover"}
        />
         <Image
          src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400011/alexvolot200400011.jpg?ver=6"
          width={"70px"}
          height="70px"
          onClick={() => {
            setIsOpen(true);
          }}
          borderRadius={1000}
          objectFit={"cover"}
        />
         <Image
          src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400011/alexvolot200400011.jpg?ver=6"
          width={"70px"}
          height="70px"
          onClick={() => {
            setIsOpen(true);
          }}
          borderRadius={1000}
          objectFit={"cover"}
        />
         <Image
          src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400011/alexvolot200400011.jpg?ver=6"
          width={"70px"}
          height="70px"
          onClick={() => {
            setIsOpen(true);
          }}
          borderRadius={1000}
          objectFit={"cover"}
        />
        <Image
          src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400011/alexvolot200400011.jpg?ver=6"
          width={"70px"}
          height="70px"
          onClick={() => {
            setIsOpen(true);
          }}
          borderRadius={1000}
          objectFit={"cover"}
        />
      </Container>
      </Box>
      <Modal
        isOpen={isOpen}
        size="full"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Stories</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            gap={"30px"}
          >
            <Image
              boxSize='200px 100px'
              borderRadius="8px"
              backgroundColor={"black"}
              src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400050/143771778-portrait-d-une-belle-femme-asiatique-%C3%A9l%C3%A9gante-dans-un-imperm%C3%A9able-%C3%A0-la-mode-%C3%A9coute-de-la-musique-dan.jpg?ver=6"
            />
            <Image
              boxSize='50px 50px'
              borderRadius="8px"
              backgroundColor={"black"}
              src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400050/143771778-portrait-d-une-belle-femme-asiatique-%C3%A9l%C3%A9gante-dans-un-imperm%C3%A9able-%C3%A0-la-mode-%C3%A9coute-de-la-musique-dan.jpg?ver=6"
            />
            <Image
              boxSize='100px'
              borderRadius="8px"
              backgroundColor={"black"}
              src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400050/143771778-portrait-d-une-belle-femme-asiatique-%C3%A9l%C3%A9gante-dans-un-imperm%C3%A9able-%C3%A0-la-mode-%C3%A9coute-de-la-musique-dan.jpg?ver=6"
            />
            <Image
              boxSize='100px'
              borderRadius="8px"
              backgroundColor={"black"}
              src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400050/143771778-portrait-d-une-belle-femme-asiatique-%C3%A9l%C3%A9gante-dans-un-imperm%C3%A9able-%C3%A0-la-mode-%C3%A9coute-de-la-musique-dan.jpg?ver=6"
            />
            <Image
              boxSize='100px'
              borderRadius="8px"
              backgroundColor={"black"}
              src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400050/143771778-portrait-d-une-belle-femme-asiatique-%C3%A9l%C3%A9gante-dans-un-imperm%C3%A9able-%C3%A0-la-mode-%C3%A9coute-de-la-musique-dan.jpg?ver=6"
            />

             
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
