import React, { useContext } from 'react'
import Character from './Character'
import { CharacterContext } from './App'

export default function CharacterList({ characters }) {
    const { 
        handleCharacterAdd,
        handleCharactersAttack
    } = useContext(CharacterContext)

    return (
        <>            
            <div className="button-container">
                <button 
                    type="button"
                    onClick={() => handleCharacterAdd()}
                >
                    <i className="fas fa-plus"></i>
                    Add Character
                </button>
                <button  
                    type="button"
                    onClick={() => handleCharactersAttack()}
                >
                    <i className="fas fa-skull-crossbones"></i>
                    Attack All Characters
                </button>
            </div>
            <div className="characterList">
                {characters.map(character => {
                    return (
                        <Character key={character.id} {...character} />
                    )
                })}
            </div>
        </>
    )

}