import React, { useState, useEffect } from 'react'
import CharacterList from './CharacterList'
import '../css/App.css'
import { v4 as uuidv4 } from 'uuid'
import { Images }  from './Images'

export const CharacterContext = React.createContext()

const LOCAL_STORAGE_KEY  = 'indico.exercise'

function handleCharacterAvatarAdd() {
  console.log('Images', Images)
  return Images[Math.floor(Math.random() * 3)]
}

function App() {
  const [characters, setCharacters] = useState(sampleCharacters)

  useEffect(() => {
    const charactersJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (charactersJSON != null) setCharacters(JSON.parse(charactersJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(characters))
  }, [characters])

  const characterContextValue = {
    handleCharacterAdd,
    handleCharactersAttack,
    handleCharacterChange,
    handleCharacterPropertyDecrease,
    handleCharacterPropertyIncrease
  }

  function handleCharacterAdd() {
    const newCharacter = {
      id : uuidv4(),
      avatar : handleCharacterAvatarAdd(),
      health : 0,
      attack : 0,
      defense : 0
    }

    setCharacters([...characters, newCharacter])
  }

  function handleCharactersAttack() {
    const newCharacters = [...characters]
    newCharacters.map(character => {
      return character.health = 0
    })
    setCharacters(newCharacters)
  }

  function handleCharacterChange(id, character) {
    const newCharacters = [...characters]
    const index = newCharacters.findIndex(c => c.id === id)
    newCharacters[index] = character
    setCharacters(newCharacters)
  }

  function handleCharacterPropertyDecrease(charId, property) {
    const newCharacter = characters.find(c => c.id === charId)
    newCharacter[property]--
    handleCharacterChange(charId, newCharacter)
  }

  function handleCharacterPropertyIncrease(charId, property) {
    const newCharacter = characters.find(c => c.id === charId)
    newCharacter[property]++
    handleCharacterChange(charId, newCharacter)
  }

  return (
    <div className="App">
      <CharacterContext.Provider value={characterContextValue}>
        <CharacterList characters={characters} />
      </CharacterContext.Provider>
    </div>
  );
}

const sampleCharacters = [
  {
    id : 1,
    avatar : handleCharacterAvatarAdd(),
    health : 0,
    attack : 0,
    defense : 0
  }
]

export default App;
