import { useState } from "react";
import newCards from './components/cards';
import { useRef } from "react";
import { useEffect } from "react";

const shuffleCards = () => {
  let duplicateCards = [];
  newCards.forEach(({name, src}) => {
    duplicateCards.push({
      name,
      src,
      key: `${name}-0`
    });
    duplicateCards.push({
      name,
      src,
      key: `${name}-1`
    })
  })
  duplicateCards.sort(() => 0.5 - Math.random())
  return duplicateCards;
}

export const useCustomHook = () => {
  const [cards, setCards] = useState(shuffleCards)
  const [count, setCount] = useState({'score': 0, 'attempts': 0});
  const [isClicked, setIsClicked] = useState([]);
  const [currentPairs, setCurrentPairs] = useState([]);
  const timerRef = useRef()
  const gameEnded = currentPairs.length === cards.length / 2;

  // useEffect((name) => {
  //   if (isClicked.includes(name)) {
  //     setCount(count => ({...count, 'score': count['score'] + 1}))
  //   }
  // }, [isClicked])

  const flipCards = (name, key) => {
    let characterKey = key.match(/^\w+/)[0];
    let newCurrentPairs = [...currentPairs, {name, characterKey}];
    setCurrentPairs(newCurrentPairs);

    if (isClicked.length < 2) {
      setIsClicked([...isClicked, name])
      console.log('primer if');
      const isClickedLength = isClicked.length + 1

      if (isClickedLength === 2) {
        console.log(isClicked[0]);
        console.log('segundo if');
        if (isClicked[0] === newCurrentPairs[0].characterKey) {
          setCount({...count, 'score': count['score'] + 1})
          console.log(count);
          setCurrentPairs([]);
          console.log('tercer if');
        } else {
          timerRef.current = setTimeout(() => {
            setIsClicked([])
          }, 1000)
        }
      } else if (!isClicked.includes(name) && isClicked.length === 2) {
        clearTimeout(timerRef.current)
        setIsClicked([name])
      }
    }
  }
  
  return {cards, count, setCount, shuffleCards, isClicked, setIsClicked, flipCards, gameEnded, currentPairs};
}