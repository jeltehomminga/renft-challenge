import { Box, Button, Text } from '@chakra-ui/react';
import { StepComponentProps } from '../../types';

export const StepB = (props: StepComponentProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text fontSize='5xl'>Step B</Text>
      <Box justifyContent={'space-between'} width={'auto'} display='flex'>
        <Button type='button' onClick={() => props.onBack()} colorScheme='pink'>
          Go Back
        </Button>
        <Button type='submit' colorScheme='telegram'>
          Submit
        </Button>
      </Box>
    </form>
  );
};
