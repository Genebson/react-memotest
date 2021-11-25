import './scoretable.css'
import logo from '../assets/imgs/logo/logo.png'
import { useCustomHook } from '../useCustomHook'

export const ScoreTable = () => {
  const {count} = useCustomHook()
  return (
    <>
      <div className="logo">
        <img src={logo} alt="Shingeki No Kyojin Logo" className="snk-logo"/>
      </div>
      <div className="moves">
        <div className="score">
          <label className="max-score">Score:</label>
          <input type="text" name="puntaje" value={count.score} className="round-score" disabled/>
        </div>
        <div className="max-attempts">
          <label className="attempts">Attempts:</label>
          <input type="text" name="puntaje" value={count.attempts} className="round-score" disabled/>
          <label className="total-attempts">/10</label>
        </div>  
      </div>
    </>  
  )
}