import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './PasswordField'

export const LoginForm = (props: HTMLChakraProps<'form'>) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault()
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>E-mail address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Login
      </Button>
    </Stack>
  </chakra.form>
)