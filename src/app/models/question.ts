export class Question {
  constructor(
    public question: string,
    public answerA: string,
    public answerB: string,
    public answerC: string,
    public answerD: string,
    public correctAnswer: string,
    public explanation: string,
    public multiAnswer: boolean
  ) {}
}
