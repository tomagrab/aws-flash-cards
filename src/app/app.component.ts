import { Component, OnInit } from '@angular/core';
import { Question } from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'aws-flash-cards';

  /*============== Chapter 1 Questions Declarations ==============*/
  ch1_questions!: Array<any>;

  ngOnInit(): void {
    /*============== Set up useful DOM elements ==============*/
    let result = document.querySelector('.result');
    let explanationBox = document.querySelector('.explanation-container');
    let explanation = document.querySelector('.explanation');
    let questionBox = document.querySelector('.question');
    let a_Box = document.querySelector('.answerA');
    let answerBoxA = document.querySelector('.answer-box_A');
    let b_Box = document.querySelector('.answerB');
    let answerBoxB = document.querySelector('.answer-box_B');
    let c_Box = document.querySelector('.answerC');
    let answerBoxC = document.querySelector('.answer-box_C');
    let d_Box = document.querySelector('.answerD');
    let answerBoxD = document.querySelector('.answer-box_D');

    let answers = document.querySelectorAll('.answer-box');
    let prevBtn = document.querySelector('.prev-btn');
    let checkBtn = document.querySelector('.check-btn');
    let nextBtn = document.querySelector('.next-btn');

    let questionTracker: number = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    /*============== Chapter 1 Question Data ==============*/
    this.ch1_questions = [
      {
        number: 1,
        question:
          'Which of the following does not contribute significantly to the operational value of a large cloud provider like AWS?',
        answerA: 'Multiregional presence',
        answerB: 'Highly experienced teams of security engineers',
        answerC: 'Deep experience in the retail sphere',
        answerD: 'Metered, pay-per-use pricing',
        correctAnswer: 'C',
        explanation:
          'Having globally distributed infrastructure and experienced security engineers makes a provider’s infrastructure more reliable. Metered pricing makes a wider range of workloads possible',
        multiAnswer: false,
      },
      {
        number: 2,
        question:
          'Which of the following are signs of a highly available application? (Select TWO.)',
        answerA:
          'A failure in one geographic region will trigger an automatic failover to resources in a different region',
        answerB:
          'Applications are protected behind multiple layers of security',
        answerC:
          'Virtualized hypervisor-driven systems are deployed as mandated by company policy',
        answerD:
          'Spikes in user demand are met through automatically increasing resources',
        correctAnswer: 'AB',
        explanation:
          'Security and virtualization are both important characteristics of successful cloud workloads, but neither will directly impact availability',
        multiAnswer: true,
      },
      {
        number: 3,
        question:
          'How does the metered payment model make many benefits of cloud computing possible? (Select TWO.)',
        answerA: 'Greater application security is now possible',
        answerB:
          'Experiments with multiple configuration options are now cost-effective',
        answerC: 'Applications are now highly scalable',
        answerD:
          'Full-stack applications are possible without the need to invest in capital expenses',
        correctAnswer: 'BD',
        explanation:
          'Security and scalability are important cloud elements but are not related to metered pricing',
        multiAnswer: true,
      },
      {
        number: 4,
        question:
          'Which of the following are direct benefits of server virtualization? (Select TWO.)',
        answerA: 'Fast resource provisioning and launching',
        answerB: 'Efficient (high-density) use of resources',
        answerC: 'Greater application security',
        answerD: 'Elastic application designs',
        correctAnswer: 'AB',
        explanation:
          'Security and elasticity are important but are not directly related to server virtualization.',
        multiAnswer: true,
      },
      {
        number: 5,
        question: 'What is a hypervisor?',
        answerA:
          'Hardware device used to provide an interface between storage and compute modules',
        answerB:
          'Hardware device used to provide an interface between networking and compute modules',
        answerC: 'Software used to log and monitor virtualized operations',
        answerD:
          'Software used to administrate virtualized resources run on physical infrastructure',
        correctAnswer: 'D',
        explanation:
          'A hypervisor is software (not hardware) that administrates virtualized operations',
        multiAnswer: false,
      },
      {
        number: 6,
        question:
          'Which of the following best describes server virtualization?',
        answerA:
          '“Sharding” data from multiple sources into a single virtual data store',
        answerB:
          'Logically partitioning physical compute and storage devices into multiple smaller virtual devices',
        answerC:
          'Aggregating physical resources spread over multiple physical devices into a single virtual device',
        answerD:
          'Abstracting the complexity of physical infrastructure behind a simple web interface',
        correctAnswer: 'B',
        explanation:
          'Sharding, aggregating remote resources, and abstracting complex infrastructure can all be accomplished using virtualization techniques, but they aren’t, of themselves, virtualization.',
        multiAnswer: false,
      },
      {
        number: 7,
        question:
          'Which of the following best describes Infrastructure as a Service products?',
        answerA:
          'Services that hide infrastructure complexity behind a simple interface',
        answerB:
          'Services that provide a service to end users through a public network',
        answerC:
          'Services that give you direct control over underlying compute and storage resources',
        answerD:
          'Platforms that allow developers to run their code over short periods on cloud servers',
        correctAnswer: 'C',
        explanation:
          'PaaS products mask complexity, SaaS products provide end-user services, and serverless architectures (like AWS Lambda) let developers run code on cloud servers',
        multiAnswer: false,
      },
      {
        number: 8,
        question:
          'Which of the following best describes Platform as a Service products?',
        answerA:
          'Services that hide infrastructure complexity behind a simple interface',
        answerB:
          'Platforms that allow developers to run their code over short periods on cloud servers',
        answerC:
          'Services that give you direct control over underlying compute and storage resources',
        answerD:
          'Services that provide a service to end users through a public network',
        correctAnswer: 'A',
        explanation:
          'IaaS products provide full infrastructure access, SaaS products provide end-user services, and serverless architectures (like AWS Lambda) let developers run code on cloud servers',
        multiAnswer: false,
      },
      {
        number: 9,
        question:
          'Which of the following best describes Software as a Service products?',
        answerA:
          'Services that give you direct control over underlying compute and storage resources',
        answerB:
          'Services that provide a service to end users through a public network',
        answerC:
          'Services that hide infrastructure complexity behind a simple interface',
        answerD:
          'Platforms that allow developers to run their code over short periods on cloud servers',
        correctAnswer: 'B',
        explanation:
          'IaaS products provide full infrastructure access, PaaS products mask complexity, and serverless architectures (like AWS Lambda) let developers run code on cloud servers.',
        multiAnswer: false,
      },
      {
        number: 10,
        question: 'Which of the following best describes scalability?',
        answerA:
          'The ability of an application to automatically add preconfigured compute resources to meet increasing demand',
        answerB:
          'The ability of an application to increase or decrease compute resources to match changing demand',
        answerC:
          'The ability to more densely pack virtualized resources onto a single physical server',
        answerD: 'The ability to bill resource usage using a pay-per-user mode',
        correctAnswer: 'A',
        explanation:
          'Increasing or decreasing compute resources better describes elasticity. Efficient use of virtualized resources and billing models aren’t related directly to scalability',
        multiAnswer: false,
      },
      {
        number: 11,
        question: 'Which of the following best describes elasticity?',
        answerA:
          'The ability to more densely pack virtualized resources onto a single physical server',
        answerB: 'The ability to bill resource usage using a pay-per-user mode',
        answerC:
          'The ability of an application to increase or decrease compute resources to match changing demand',
        answerD:
          'The ability of an application to automatically add preconfigured compute resources to meet increasing demand',
        correctAnswer: 'C',
        explanation:
          'Preconfiguring compute instances before they’re used to scale up an application is an element of scalability rather than elasticity. Efficient use of virtualized resources and billing models aren’t related directly to elasticity',
        multiAnswer: false,
      },
      {
        number: 12,
        question:
          'Which of the following characteristics most help AWS provide such scalable services? (Select TWO.)',
        answerA: 'The enormous number of servers it operates',
        answerB: 'The value of its capitalized assets',
        answerC: 'Its geographic reach',
        answerD: 'Its highly automated infrastructure administration systems',
        correctAnswer: 'AD',
        explanation:
          'Capitalized assets and geographic reach are important but don’t have a direct impact on operational scalability',
        multiAnswer: true,
      },
    ];

    /*============== Set up useful functions ==============*/
    function addSelected(el: any) {
      el.classList.add('selected-answer');
    }

    function removeSelected(el: any) {
      el.classList.remove('selected-answer');
    }

    /*============== Handle Selecting answers ==============*/
    /* if (this.ch1_questions[questionTracker].multiAnswer == false) { */
    let selected = 0;
    for (let i = 0; i < answers.length; i++) {
      answers[i].addEventListener('click', () => {
        if (this.ch1_questions[questionTracker].multiAnswer == false) {
          if (!answers[i].classList.contains('selected-answer')) {
            addSelected(answers[i]);
            for (let n = i - 1; n >= 0; n--) {
              removeSelected(answers[n]);
            }
            for (let x = i + 1; x < 5; x++) {
              removeSelected(answers[x]);
            }
          } else {
            removeSelected(answers[i]);
          }
        } else {
          let correctAnswers =
            this.ch1_questions[questionTracker].correctAnswer.split('');
          if (
            !answers[i].classList.contains('selected-answer') &&
            selected < correctAnswers.length
          ) {
            addSelected(answers[i]);
            selected++;
          } else {
            if (
              selected > 0 &&
              answers[i].classList.contains('selected-answer')
            ) {
              selected--;
            }
            removeSelected(answers[i]);
          }
        }
      });
    }

    /*============== Handle Deselecting answers ==============*/
    function deselectAll(el: any) {
      for (let i = 0; i < el.length; i++) {
        removeSelected(el[i]);
      }
    }

    /*============== Check if answer is correct ==============*/
    function answerCheck(answers: any, el: any, cA: any) {
      let correctAnswers = answers;
      if (el.classList.contains('selected-answer') && correctAnswers == cA) {
        alert('Correct!');
      }
    }
    /*============== Handle "Prev" Click ==============*/
    prevBtn?.addEventListener('click', () => {
      result?.classList.remove('correct-result');
      result?.classList.remove('wrong-result');
      if (questionTracker > 0) {
        questionTracker--;
      }
      explanation!.innerHTML = this.ch1_questions[questionTracker].explanation;
      questionBox!.innerHTML = this.ch1_questions[questionTracker].question;
      a_Box!.innerHTML = this.ch1_questions[questionTracker].answerA;
      b_Box!.innerHTML = this.ch1_questions[questionTracker].answerB;
      c_Box!.innerHTML = this.ch1_questions[questionTracker].answerC;
      d_Box!.innerHTML = this.ch1_questions[questionTracker].answerD;
      deselectAll(answers);
    });

    /*============== Handle "Check" Click ==============*/
    checkBtn?.addEventListener('click', () => {
      if (explanationBox?.classList.contains('hidden-result')) {
        explanationBox?.classList.remove('hidden-result');
        explanationBox?.classList.add('shown-result');
      }

      if (this.ch1_questions[questionTracker].correctAnswer.length < 2) {
        if (
          answerBoxA?.classList.contains('selected-answer') &&
          this.ch1_questions[questionTracker].correctAnswer == 'A'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else if (
          answerBoxB?.classList.contains('selected-answer') &&
          this.ch1_questions[questionTracker].correctAnswer == 'B'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else if (
          answerBoxC?.classList.contains('selected-answer') &&
          this.ch1_questions[questionTracker].correctAnswer == 'C'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else if (
          answerBoxD?.classList.contains('selected-answer') &&
          this.ch1_questions[questionTracker].correctAnswer == 'D'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else {
          result!.innerHTML = 'Wrong!';
          result?.classList.add('wrong-result');
        }
      } else {
        let correctAnswers =
          this.ch1_questions[questionTracker].correctAnswer.split('');
        if (
          answerBoxA?.classList.contains('selected-answer') &&
          correctAnswers[0] == 'A' &&
          answerBoxB?.classList.contains('selected-answer') &&
          correctAnswers[1] == 'B'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else if (
          answerBoxA?.classList.contains('selected-answer') &&
          correctAnswers[0] == 'A' &&
          answerBoxC?.classList.contains('selected-answer') &&
          correctAnswers[1] == 'C'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else if (
          answerBoxA?.classList.contains('selected-answer') &&
          correctAnswers[0] == 'A' &&
          answerBoxD?.classList.contains('selected-answer') &&
          correctAnswers[1] == 'D'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else if (
          answerBoxB?.classList.contains('selected-answer') &&
          correctAnswers[0] == 'B' &&
          answerBoxC?.classList.contains('selected-answer') &&
          correctAnswers[1] == 'C'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else if (
          answerBoxB?.classList.contains('selected-answer') &&
          correctAnswers[0] == 'B' &&
          answerBoxD?.classList.contains('selected-answer') &&
          correctAnswers[1] == 'D'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else if (
          answerBoxC?.classList.contains('selected-answer') &&
          correctAnswers[0] == 'C' &&
          answerBoxD?.classList.contains('selected-answer') &&
          correctAnswers[1] == 'D'
        ) {
          result!.innerHTML = 'Correct!';
          result?.classList.add('correct-result');
        } else {
          result!.innerHTML = 'Wrong!';
          result?.classList.add('wrong-result');
        }
      }
    });

    /*============== Handle "Next" Click ==============*/
    nextBtn?.addEventListener('click', () => {
      result?.classList.remove('correct-result');
      result?.classList.remove('wrong-result');
      if (questionTracker < 11) {
        questionTracker++;
      }
      explanation!.innerHTML = this.ch1_questions[questionTracker].explanation;
      questionBox!.innerHTML = this.ch1_questions[questionTracker].question;
      a_Box!.innerHTML = this.ch1_questions[questionTracker].answerA;
      b_Box!.innerHTML = this.ch1_questions[questionTracker].answerB;
      c_Box!.innerHTML = this.ch1_questions[questionTracker].answerC;
      d_Box!.innerHTML = this.ch1_questions[questionTracker].answerD;
      deselectAll(answers);
    });
  }
}

/* 
ch1_question1!: Question;
  ch1_question2!: Question;
  ch1_question3!: Question;
  ch1_question4!: Question;
  ch1_question5!: Question;
  ch1_question6!: Question;
  ch1_question7!: Question;
  ch1_question8!: Question;
  ch1_question9!: Question;
  ch1_question10!: Question;
  ch1_question11!: Question;
  ch1_question12!: Question; 
  */

/*
    this.ch1_question1 = {
      question:
        'Which of the following does not contribute significantly to the operational value of a large cloud provider like AWS?',
      answerA: 'Multiregional presence',
      answerB: 'Highly experienced teams of security engineers',
      answerC: 'Deep experience in the retail sphere',
      answerD: 'Metered, pay-per-use pricing',
      correctAnswer: 'C',
      explanation:
        'Having globally distributed infrastructure and experienced security engineers makes a provider’s infrastructure more reliable. Metered pricing makes a wider range of workloads possible',
      multiAnswer: false,
    };

    this.ch1_question2 = {
      question:
        'Which of the following are signs of a highly available application? (Select TWO.)',
      answerA:
        'A failure in one geographic region will trigger an automatic failover to resources in a different region',
      answerB: 'Applications are protected behind multiple layers of security',
      answerC:
        'Virtualized hypervisor-driven systems are deployed as mandated by company policy',
      answerD:
        'Spikes in user demand are met through automatically increasing resources',
      correctAnswer: 'AB',
      explanation:
        'Security and virtualization are both important characteristics of successful cloud workloads, but neither will directly impact availability',
      multiAnswer: true,
    };

    this.ch1_question3 = {
      question:
        'How does the metered payment model make many benefits of cloud computing possible? (Select TWO.)',
      answerA: 'Greater application security is now possible',
      answerB:
        'Experiments with multiple configuration options are now cost-effective',
      answerC: 'Applications are now highly scalable',
      answerD:
        'Full-stack applications are possible without the need to invest in capital expenses',
      correctAnswer: 'BD',
      explanation:
        'Security and scalability are important cloud elements but are not related to metered pricing',
      multiAnswer: true,
    };

    this.ch1_question4 = {
      question:
        'Which of the following are direct benefits of server virtualization? (Select TWO.)',
      answerA: 'Fast resource provisioning and launching',
      answerB: 'Efficient (high-density) use of resources',
      answerC: 'Greater application security',
      answerD: 'Elastic application designs',
      correctAnswer: 'AB',
      explanation:
        'Security and elasticity are important but are not directly related to server virtualization.',
      multiAnswer: true,
    };

    this.ch1_question5 = {
      question: 'What is a hypervisor?',
      answerA:
        'Hardware device used to provide an interface between storage and compute modules',
      answerB:
        'Hardware device used to provide an interface between networking and compute modules',
      answerC: 'Software used to log and monitor virtualized operations',
      answerD:
        'Software used to administrate virtualized resources run on physical infrastructure',
      correctAnswer: 'D',
      explanation:
        'A hypervisor is software (not hardware) that administrates virtualized operations',
      multiAnswer: false,
    };

    this.ch1_question6 = {
      question: 'Which of the following best describes server virtualization?',
      answerA:
        '“Sharding” data from multiple sources into a single virtual data store',
      answerB:
        'Logically partitioning physical compute and storage devices into multiple smaller virtual devices',
      answerC:
        'Aggregating physical resources spread over multiple physical devices into a single virtual device',
      answerD:
        'Abstracting the complexity of physical infrastructure behind a simple web interface',
      correctAnswer: 'B',
      explanation:
        'Sharding, aggregating remote resources, and abstracting complex infrastructure can all be accomplished using virtualization techniques, but they aren’t, of themselves, virtualization.',
      multiAnswer: false,
    };

    this.ch1_question7 = {
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      correctAnswer: '',
      explanation: '',
      multiAnswer: false,
    };

    this.ch1_question8 = {
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      correctAnswer: '',
      explanation: '',
      multiAnswer: false,
    };

    this.ch1_question9 = {
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      correctAnswer: '',
      explanation: '',
      multiAnswer: false,
    };

    this.ch1_question10 = {
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      correctAnswer: '',
      explanation: '',
      multiAnswer: false,
    };

    this.ch1_question11 = {
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      correctAnswer: '',
      explanation: '',
      multiAnswer: false,
    };

    this.ch1_question12 = {
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      correctAnswer: '',
      explanation: '',
      multiAnswer: false,
    };

     let ch1_questions = [];
    ch1_questions.push(this.ch1_question1);
    ch1_questions.push(this.ch1_question2);
    ch1_questions.push(this.ch1_question3);
    ch1_questions.push(this.ch1_question4);
    ch1_questions.push(this.ch1_question5);
    ch1_questions.push(this.ch1_question6);
    ch1_questions.push(this.ch1_question7);
    ch1_questions.push(this.ch1_question8);
    ch1_questions.push(this.ch1_question9);
    ch1_questions.push(this.ch1_question10);
    ch1_questions.push(this.ch1_question11);
    ch1_questions.push(this.ch1_question1); 
    */
