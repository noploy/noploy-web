import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  InputGroup,
  Flex,
  Box,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Form/Input";

const loginSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const LoginForm = () => {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { errors } = formState;

  const handleLogin = () => {};

  return (
    <Box as="form" onSubmit={handleSubmit(handleLogin)}>
      <Stack spacing="6">
        <FormControl>
          <FormLabel>E-mail address</FormLabel>
          <Input
            name="email"
            id="email"
            autoComplete="email"
            {...register("email")}
            error={errors.email}
          />
        </FormControl>

        <FormControl>
          <Flex justify="space-between">
            <FormLabel>Password</FormLabel>
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
          <InputGroup>
            <Input
              id="password"
              name="password"
              type="password"
              {...register("password")}
              error={errors.password}
            />
          </InputGroup>
        </FormControl>

        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};
