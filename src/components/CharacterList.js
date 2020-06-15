import React, { useState, useContext } from 'react'
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
                    <i class="fas fa-plus"></i>
                    Add Character
                </button>
                <button  
                    type="button"
                    onClick={() => handleCharactersAttack()}
                >
                    <i class="fas fa-skull-crossbones"></i>
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