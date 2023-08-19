import { Injectable } from '@angular/core';

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Module {
  title: string;
  questions: Question[];
}

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private modules: Module[] = [
    {
      title: 'Module 1',
      questions: [
        {
          questionText: 'What is the capital of France?',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
          correctAnswerIndex: 2
        },
        {
          questionText: 'What is the capital of France?',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
          correctAnswerIndex: 2
        },
        // ... more questions for this quiz
      ]
    },
    {
      title: 'Module two',
      questions: [
        // ... questions for this quiz
      ]
    },
    // ... more quizzes
  ];

  getModule(index: number): Module | null {
    return this.modules[index] || null;
  }

  
}
