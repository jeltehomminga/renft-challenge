import { Box, Button, Text } from '@chakra-ui/react';
import { StepComponentProps } from '../../types';

export const StepA = (props: StepComponentProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text fontSize='5xl'>Step A</Text>
      <Box justifyContent={'flex-end'} width={'auto'} display='flex'>
        <Button type='submit' colorScheme='telegram'>
          Next
        </Button>
      </Box>
    </form>
  );
};
