import { UseStepState } from './hooks/useSteps'

export enum Steps {
  STEP_A = 'STEP_A',
  STEP_B = 'STEP_B',
  STEP_C = 'STEP_C',
  STEP_D = 'STEP_D',
}

export interface StepComponentProps {
  onSubmit: () => UseStepState<Steps>
  onBack: (step?: Steps) => UseStepState<Steps>
}
