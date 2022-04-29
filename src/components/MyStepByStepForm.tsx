import { Steps } from '../types';
import { useSteps } from '../hooks/useSteps';
import { StepA } from './Steps/StepA';
import { StepB } from './Steps/StepB';
import { StepC } from './Steps/StepC';
import { StepD } from './Steps/StepD';

// I believe it's better not to use React.FunctionComponent for typing the React component, but explicitly type the props
// It has some disadvantages and will be depricated in the future, for example Children props are always allowed
// This is why it was also removed by fb from the ts create-react-app template, see
// https://github.com/facebook/create-react-app/pull/8177
export const MyStepByStepForm: React.FunctionComponent = () => {
  const { step, goToNextStep, goToPrevStep } = useSteps<Steps>(Steps.STEP_A);

  // here the next step is passed as an argument,
  // it could be an option to always go to the next step without passing the argument
  // for example but converting the enum to an array and go to the next value in the array if there is
  // or if it's allowed to skip steps then define which transitions are allowed or not

  const onSubmitStepA = () => goToNextStep(Steps.STEP_B);
  const onSubmitStepB = () => goToNextStep(Steps.STEP_C);
  const onSubmitStepC = () => goToNextStep(Steps.STEP_D);
  const onSubmitForm = () => alert('Submitted');

  // We could consider moving the back and submit buttons outside of the StepComponents
  // So the onSubmit and goToPrevStep don't have to be passed down
  switch (step) {
    case Steps.STEP_B:
      return <StepB onSubmit={onSubmitStepB} onBack={goToPrevStep} />;
    case Steps.STEP_C:
      return <StepC onSubmit={onSubmitStepC} onBack={goToPrevStep} />;
    case Steps.STEP_D:
      return <StepD onSubmit={onSubmitForm} onBack={goToPrevStep} />;
    default:
      return <StepA onSubmit={onSubmitStepA} onBack={goToPrevStep} />;
  }
};
