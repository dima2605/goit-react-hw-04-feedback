import { useState } from 'react';
import { Wrapper } from './App.styled';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setCood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackOptions = feedback => {
    switch (feedback) {
      case 'good':
        setCood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        throw new Error('Unknown feedback option');
    }
  };

  const countTotalFeedback = good + neutral + bad;
  const positivePercentage = Math.round((good / countTotalFeedback) * 100);

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedbackOptions}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={positivePercentage}
          />
        )}
      </Section>
    </Wrapper>
  );
}
