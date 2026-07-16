import { useState } from 'react';
import './../App.css'
import { generateRandomColor } from '../lib/generateRandomColor';
import { ColorInput } from './ColorInput';
import { Link } from 'react-router-dom';
import { getUserScore } from '../lib/getProximity';

function PracticeMode() {
  const [color, setColor] = useState<string>(generateRandomColor());
  const correctRed = parseInt(color.slice(0, 2), 16);
  const correctGreen = parseInt(color.slice(2, 4), 16);
  const correctBlue = parseInt(color.slice(4, 6), 16);

  const [userAnswers, setUserAnswers] = useState<string[]>([])

  const onSubmitColor = (value: string) => {
    setUserAnswers((prev) => [...prev, value.toUpperCase()])
  }

  const nextHandler = () => {
    setColor(generateRandomColor());
    setUserAnswers([]);
  }

  return (
    <>
      <div style={{ backgroundColor: `#${color}` }} className="color_strip">
        {userAnswers.length === 3 && <h2 className='answer'>Правильный ответ: #{color}</h2>}
      </div>
      <div className='practice_thirds'>
        {userAnswers.map((userAnswer) => {
          const redChar = userAnswer.slice(0, 2);
          const greenChar = userAnswer.slice(2, 4);
          const blueChar = userAnswer.slice(4, 6);

          const red = parseInt(redChar, 16);
          const redSign = red > correctRed ? '↓' : red === correctRed ? '=' : '↑';

          const green = parseInt(greenChar, 16);
          const greenSign = green > correctGreen ? '↓' : green === correctGreen ? '=' : '↑';
          
          const blue = parseInt(blueChar, 16);
          const blueSign = blue > correctBlue ? '↓' : blue === correctBlue ? '=' : '↑';

          return (
            <div style={userAnswer ? { backgroundColor: `#${userAnswer}` } : undefined} className="color_third">
              <h2 className='answer'>
                #{redChar}{redSign}{greenChar}{greenSign}{blueChar}{blueSign} ({getUserScore(`#${color}`, `#${userAnswer}`)}%)
              </h2>
            </div>
          )
        })}
      </div>
      <ColorInput onSubmit={onSubmitColor} disabled={userAnswers.length === 3} />
      {userAnswers.length === 3 && <button onClick={nextHandler}>Далее</button>}
      <Link to={'/colordle'} className='best'>Классика</Link>
    </>
  )
}

export default PracticeMode;
