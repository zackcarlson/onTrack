import React from 'react';
import styles from './Tutorial.css';
import Subheader from '../Subheader/Subheader.js';
import Step from '../Step/Step.js';

const steps = [
  'Enter in your interview details and mark which stage you\'re at in your interview process (phone screening, offer).',
  'Add questions from your interview to contribute to our growing interview question database so that way you and others alike can rock that next interview.',
  'Take our survey to determine your best compensation package.'
];

const colors = ['#b2d8d8', '#82abed', '#eded5d'];

const Tutorial = (props) => {
  const { subheader } = styles;
  return (
    <div>
      <Subheader style={subheader} subheading={'How it Works'}/>
      <div class="row">
      {
        steps.map((step, i) => {
          console.log(colors[i]);
          return (<Step key={i} step={step} number={i} color={colors[i]}/>);
        })
      }
      </div>
    </div>
  );
};

export default Tutorial;