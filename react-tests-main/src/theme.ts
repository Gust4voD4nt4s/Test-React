import { extendTheme } from '@chakra-ui/react';

export const defaultTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.700',
        color: 'gray.50',
      },
    },
  },
});
