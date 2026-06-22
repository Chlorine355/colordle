import { useState } from 'react';
import './App.css'
import { generateRandomColor } from './lib/generateRandomColor';
import { ColorInput } from './components/ColorInput';
import { getUserScore } from './lib/getProximity';

function App() {
  const [color, setColor] = useState<string>(generateRandomColor());
  const [userAnswer, setUserAnswer] = useState<string | null>(null)

  const onSubmitColor = (value: string) => {
    setUserAnswer(value.toUpperCase())
  }

  const nextHandler = () => {
    setColor(generateRandomColor().toUpperCase());
    setUserAnswer(null);
  }

  return (
    <div className='container'>
      <h1>COLORDLE</h1>
      <div style={{ backgroundColor: `#${color}` }} className="color_strip">
        {userAnswer && <h2>Правильный ответ: #{color}</h2>}
      </div>
      <div style={userAnswer ? { backgroundColor: `#${userAnswer}` } : undefined} className="color_strip">
        {userAnswer && <h2>Ваш ответ: #{userAnswer} ({getUserScore(`#${color}`, `#${userAnswer}`)}%)</h2>}
      </div>
      <ColorInput onSubmit={onSubmitColor} disabled={!!userAnswer}/>
      {userAnswer && <button onClick={nextHandler}>Далее</button>}
    </div>
  )
}

export default App
