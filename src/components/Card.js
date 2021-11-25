import './cards.css'
import cardBackwards from '../assets/imgs/cards/card-backwards.png'
import ReactCardFlip from 'react-card-flip'
import { useCustomHook } from '../useCustomHook'

export const Card = ({src, name, onClick, isClicked}) => {
  return (
    <div className="memotest-card">
      <ReactCardFlip isFlipped={isClicked}>
        <div className="card-container" onClick={onClick}>
          <img src={cardBackwards} className="card-size" alt={name}/>
        </div>
        <div className="card-container" onClick={onClick}>
          <img src={src} className="card-size" alt={name}/>
        </div>
      </ReactCardFlip>
  </div>
  )
}