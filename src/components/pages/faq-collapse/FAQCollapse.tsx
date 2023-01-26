import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as RI from 'react-icons/bs';

const FAQCollapse: React.FC = () => {
  return (
    <Chakra.Flex
      flexDir='column'
      alignItems='center'
      w='100vw'
      h='92vh'
      bgColor='#F0F0F0'
      fontFamily='Sofia Sans'
    >
      <Chakra.Heading fontFamily='Mulish' py='3rem'>
        Collapsible FAQ
      </Chakra.Heading>
      <Chakra.Accordion
        defaultIndex={[0]}
        allowMultiple
        w={['80vw', '70vw', '60vw', '50vw']}
      >
        <Chakra.AccordionItem p='8px'>
          <Chakra.Heading as='h2'>
            <Chakra.AccordionButton>
              <Chakra.Box
                as='span'
                display='flex'
                alignItems='center'
                flex='1'
                textAlign='left'
              >
                <Chakra.Icon
                  as={RI.BsFillPatchQuestionFill}
                  mr='8px'
                  fontSize='22px'
                />
                Why shouldn't we trust atoms?
              </Chakra.Box>
              <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
          </Chakra.Heading>
          <Chakra.AccordionPanel fontSize='14px' color='gray.500' pb={4}>
            They make up everything.
          </Chakra.AccordionPanel>
        </Chakra.AccordionItem>
        <Chakra.AccordionItem p='8px'>
          <Chakra.Heading as='h2'>
            <Chakra.AccordionButton>
              <Chakra.Box
                as='span'
                display='flex'
                alignItems='center'
                flex='1'
                textAlign='left'
              >
                <Chakra.Icon
                  as={RI.BsFillPatchQuestionFill}
                  mr='8px'
                  fontSize='22px'
                />
                What type of fish is made out of 2 sodium atoms?
              </Chakra.Box>
              <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
          </Chakra.Heading>
          <Chakra.AccordionPanel fontSize='14px' color='gray.500' pb={4}>
            2 Na
          </Chakra.AccordionPanel>
        </Chakra.AccordionItem>
        <Chakra.AccordionItem p='8px'>
          <Chakra.Heading as='h2'>
            <Chakra.AccordionButton>
              <Chakra.Box
                as='span'
                display='flex'
                alignItems='center'
                flex='1'
                textAlign='left'
              >
                <Chakra.Icon
                  as={RI.BsFillPatchQuestionFill}
                  mr='8px'
                  fontSize='22px'
                />
                What do rich clouds do?
              </Chakra.Box>
              <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
          </Chakra.Heading>
          <Chakra.AccordionPanel fontSize='14px' color='gray.500' pb={4}>
            They make it rain!
          </Chakra.AccordionPanel>
        </Chakra.AccordionItem>
        <Chakra.AccordionItem p='8px'>
          <Chakra.Heading as='h2'>
            <Chakra.AccordionButton>
              <Chakra.Box
                as='span'
                display='flex'
                alignItems='center'
                flex='1'
                textAlign='left'
              >
                <Chakra.Icon
                  as={RI.BsFillPatchQuestionFill}
                  mr='8px'
                  fontSize='22px'
                />
                Why are chemists excellent for solving problems?
              </Chakra.Box>
              <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
          </Chakra.Heading>
          <Chakra.AccordionPanel fontSize='14px' color='gray.500' pb={4}>
            They have all the solutions.
          </Chakra.AccordionPanel>
        </Chakra.AccordionItem>
        <Chakra.AccordionItem p='8px'>
          <Chakra.Heading as='h2'>
            <Chakra.AccordionButton>
              <Chakra.Box
                as='span'
                display='flex'
                alignItems='center'
                flex='1'
                textAlign='left'
              >
                <Chakra.Icon
                  as={RI.BsFillPatchQuestionFill}
                  mr='8px'
                  fontSize='22px'
                />
                How can you know a tree is a dogwood tree?
              </Chakra.Box>
              <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
          </Chakra.Heading>
          <Chakra.AccordionPanel fontSize='14px' color='gray.500' pb={4}>
            By its bark!
          </Chakra.AccordionPanel>
        </Chakra.AccordionItem>
        <Chakra.AccordionItem p='8px'>
          <Chakra.Heading as='h2'>
            <Chakra.AccordionButton>
              <Chakra.Box
                as='span'
                display='flex'
                alignItems='center'
                flex='1'
                textAlign='left'
              >
                <Chakra.Icon
                  as={RI.BsFillPatchQuestionFill}
                  mr='8px'
                  fontSize='22px'
                />
                How do trees surf on the internet?
              </Chakra.Box>
              <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
          </Chakra.Heading>
          <Chakra.AccordionPanel fontSize='14px' color='gray.500' pb={4}>
            They log in!
          </Chakra.AccordionPanel>
        </Chakra.AccordionItem>
        <Chakra.AccordionItem p='8px'>
          <Chakra.Heading as='h2'>
            <Chakra.AccordionButton>
              <Chakra.Box
                as='span'
                display='flex'
                alignItems='center'
                flex='1'
                textAlign='left'
              >
                <Chakra.Icon
                  as={RI.BsFillPatchQuestionFill}
                  mr='8px'
                  fontSize='22px'
                />
                What kinds of books do planets usually like to read?
              </Chakra.Box>
              <Chakra.AccordionIcon />
            </Chakra.AccordionButton>
          </Chakra.Heading>
          <Chakra.AccordionPanel fontSize='14px' color='gray.500' pb={4}>
            Comet books
          </Chakra.AccordionPanel>
        </Chakra.AccordionItem>
      </Chakra.Accordion>
    </Chakra.Flex>
  );
};

export default FAQCollapse;
