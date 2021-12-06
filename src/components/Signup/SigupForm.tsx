import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  // Input,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Input } from "../Form/Input";

export const SigupForm = () => {
  const handleSubmit = () => {};

  return (
    <Flex as="form" flexDir="column" onSubmit={(e) => handleSubmit()}>
      <Stack spacing="4">
        <Input name="name" type="text" label="Name" autoComplete="name" />

        <Input name="email" type="email" label="E-mail" autoComplete="email" />

        <FormControl>
          <Flex align="baseline" justify="space-between">
            <FormLabel mb={1}>Password</FormLabel>
            <Box
              as="a"
              href="#"
              fontWeight="semibold"
              fontSize="sm"
              color={mode("blue.600", "blue.200")}
            >
              Forgot Password?
            </Box>
          </Flex>
          <Input name="email" type="password" autoComplete="current-password" />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Create my account
        </Button>
      </Stack>
    </Flex>
  );
};
