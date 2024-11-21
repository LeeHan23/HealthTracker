import { ChangeEvent, FormEvent } from 'react'

export interface HealthData {
  steps: string;
  calories: string;
  water: string;
  sleep: string;
  weight: string;
  concerns: string;
}

export interface HomeTabProps {
  healthData: HealthData;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
} 