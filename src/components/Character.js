import React, { useContext } from 'react'
import CharacterProperty from './CharacterProperty'
import { CharacterContext } from './App'

export default function Character(props) {
    const { 
        id,
        avatar, 
        health, 
        attack, 
        defense
    } = props
    const {
        handleCharacterDelete
    } = useContext(CharacterContext)

    return (
        <div className="character">
            <div className="character__avatar">
                <img src={avatar.url} alt="" />
            </div>
            <div className="character__properties">
                <CharacterProperty type='health' value={health} id={id} />
                <CharacterProperty type='attack' value={attack} id={id} />
                <CharacterProperty type='defense' value={defense} id={id} />
            </div>
            <div className="button-container remove">
                <button 
                    className=""
                    onClick={() => handleCharacterDelete(id)}
                >
                    <i class="fas fa-times"></i>
                    Remove Character
                </button>
            </div>
        </div>
    )    
}