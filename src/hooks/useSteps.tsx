import { Dispatch, SetStateAction, useState } from 'react';

// Challenge 1
// Please implement this useSteps hook to work with step-by-step forms.
// This hook gives us: go to next step, go to the previous step, current step and history of steps.
// API of the useSteps hook
export interface UseStepState<S> {
  step: S;
  stepsHistory: S[];
}

interface UseStepApi<S> {
  step: S;
  setStepsHistory: Dispatch<SetStateAction<S[]>>;
  goToPrevStep(step?: S): UseStepState<S>;
  goToNextStep(step: S): UseStepState<S>;
  goToInitialStep(): void;
}

export function useSteps<S extends string>(
  initialStep: S
): UseStepState<S> & UseStepApi<S> {
  const [stepsHistory, setStepsHistory] = useState<S[]>([initialStep]);

  // assumption is that when we go back to a previousStep
  // we can remove the last step to get back to the previousStep
  const goToPrevStep = (_step?: S): UseStepState<S> => {
    // in the example usage the step is not passed as an argument
    // so far now it's not used
    // if used could check where the step provided is last in the history
    // and remove steps after that
    const newStepHistory = stepsHistory.filter(
      (_, i, arr) => i !== arr.length - 1
    );
    setStepsHistory(newStepHistory);
    return {
      step: newStepHistory.at(-1) ?? initialStep,
      stepsHistory: newStepHistory,
    };
  };

  const goToNextStep = (step: S): UseStepState<S> => {
    // assumption is we want to go to the step that is passed as an argument
    // otherwise go to previousStep or if none yet then go to initialStep
    const newStepHistory = [...stepsHistory, step];

    setStepsHistory(newStepHistory);

    return {
      step,
      stepsHistory: newStepHistory,
    };
  };

  const goToInitialStep = () => goToNextStep(initialStep);

  return {
    step: stepsHistory.at(-1) ?? initialStep,
    stepsHistory,
    setStepsHistory,
    goToPrevStep,
    goToNextStep,
    goToInitialStep,
  };
}
