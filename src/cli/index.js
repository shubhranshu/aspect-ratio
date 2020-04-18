import inquirer from 'inquirer';
import ProgressBar from 'progress';

const FruitChoice = {
  type: 'list',
  name: 'pickFruit',
  message: 'Pick ingredients for your smoothie',
  help: '',
  choices: [
    {
      name: 'Orange',
      value: 'orange',
    },
    {
      name: 'Banan',
      value: 'banan',
    },
    {
      name: 'Apple',
      value: 'apple',
    },
    {
      name: 'Blackberry',
      value: 'blackberry',
    },
    {
      name: 'Kale',
      value: 'kale',
    },
    {
      name: 'Strawberry',
      value: 'strawberry',
    },
    {
      name: 'Spinach',
      value: 'spinach',
    },
  ],
};

const SmoothieBase = {
  type: 'list',
  name: 'pickBase',
  message: 'Now pick your smoothie base',
  help: '',
  choices: [
    {
      name: 'Yogurt',
      value: 'yogurt',
    },
    {
      name: 'Milk',
      value: 'milk',
    },
  ],
};

let AnswerSet = {};

const HandleAnswers = (answers) => {
  let questionSet = null;
  if (!answers) {
    questionSet = FruitChoice;
  } else {
    AnswerSet = { ...AnswerSet, ...answers };
    if (answers.pickFruit) {
      questionSet = SmoothieBase;
    } else if (answers.pickBase) {
      MakeSmoothie(AnswerSet);
    }
  }
  if (questionSet) {
    inquirer
      .prompt(questionSet)
      .then((answers) => HandleAnswers(answers))
      .catch((error) => {
        if (error.isTtyError) {
          console.error('isTtyError');
        }
        console.error(error);
      });
  }
};

const MakeSmoothie = (answerSet) => {
  console.log(`Making an awesome ${answerSet.pickFruit} ${answerSet.pickBase} smoothie`);
  var bar = new ProgressBar(':bar', { total: 80 });
  var timer = setInterval(function () {
    bar.tick();
    if (bar.complete) {
      console.log('\nSmoothie Done !\n');
      clearInterval(timer);
    }
  }, 100);
};

class InquirerCli {
  start(options) {
    HandleAnswers(options);
  }
}

export { InquirerCli };
