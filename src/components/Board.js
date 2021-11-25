import './board.css'
import { Card } from './Card'
import { useCustomHook } from '../useCustomHook';

export const Board = () => {
  const {cards, flipCards, currentPairs, isClicked} = useCustomHook()
  return (
    <div className="board-container">
      <div className="memotest">
        {cards.map(({src, name, key}) => {
          return <Card 
          key={key} 
          name={name} 
          src={src} 
          onClick={() => flipCards(name, key)} 
          isClicked={currentPairs.includes(name) || isClicked.includes(name)}/>
        })}
      </div>
    </div>
  )
}