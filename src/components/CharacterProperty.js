import React, { useContext } from 'react'
import { CharacterContext } from './App'

export default function CharacterProperty({type, value, id}) {
    const {
        handleCharacterPropertyDecrease,
        handleCharacterPropertyIncrease
    } = useContext(CharacterContext)

    return (
        <div className="character__properties__property">
            <div className="label">
                {type}
                <span className="amount">{value}</span>
            </div>
            <div className="button-container">
                <button 
                    className="red"
                    onClick={() => handleCharacterPropertyDecrease(id, type)}
                >
                    <i className="fas fa-minus"></i>
                </button>
                <button 
                    className="green"
                    onClick={() => handleCharacterPropertyIncrease(id, type)}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </div>
    )
}