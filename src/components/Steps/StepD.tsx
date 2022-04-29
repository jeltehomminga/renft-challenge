import { Box, Button, Text } from '@chakra-ui/react';
import { Steps } from '../../types';
import { UseStepState } from '../../hooks/useSteps';

export interface StepComponentProps {
  onSubmit: () => void;
  onBack: (step?: Steps) => UseStepState<Steps>;
}

export const StepD = (props: StepComponentProps & { onSubmit: () => void }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    props.onSubmit();

  return (
    <form onSubmit={handleSubmit}>
      <Text fontSize='5xl'>Step D</Text>
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
