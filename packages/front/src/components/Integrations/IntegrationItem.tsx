import { Flex, useColorModeValue, Image } from '@chakra-ui/react';

interface IntegrationItemProps {
  file: string;
}

export function IntegrationItem({ file }: IntegrationItemProps) {
  return (
    <Flex p="8" borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.800')} alignItems="center" justifyContent="center">
      <Image alt={file} objectFit="cover" h="" w="150px" src={`/assets/${file}`} />
    </Flex>
  )
}