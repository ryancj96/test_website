import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService, Module, Question } from 'src/app/services/module.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  currentModule: Module | null = null;
  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  score = 0;

  constructor(
    private moduleService: ModuleService, 
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      // get current module
      const moduleId = +params['id'];  
      console.log(this.moduleService.getModule(moduleId));
      this.currentModule = this.moduleService.getModule(moduleId);

      // redirect home if module doesnt exist
      if (!this.currentModule){
        this.router.navigate(['/']);
      }
    });
  }

  checkAnswer(question: Question, selectedIndex: number): boolean {
    return question.correctAnswerIndex === selectedIndex;
  }

  submitAnswer() {
    if (this.currentModule && this.selectedOptionIndex !== null && 
        this.checkAnswer(this.currentModule.questions[this.currentQuestionIndex], this.selectedOptionIndex)) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedOptionIndex = null;
  }
}
