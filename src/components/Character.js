import React, { useContext } from 'react'
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
        handleCharacterPropertyDecrease,
        handleCharacterPropertyIncrease
    } = useContext(CharacterContext)

    return (
        <div className="character">
            <div className="character__avatar">
                <img src={avatar.url} alt="" />
            </div>
            <div className="character__properties">
                <div className="character__properties__property">
                    <div className="label">
                        Health
                        <span className="amount">{health}</span>
                    </div>
                    <div className="button-container">
                        <button 
                            className="red"
                            onClick={() => handleCharacterPropertyDecrease(id, 'health')}
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                        <button 
                            className="green"
                            onClick={() => handleCharacterPropertyIncrease(id, 'health')}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="character__properties__property">
                    <div className="label">
                        Attack
                        <span className="amount">{attack}</span>
                    </div>
                    <div className="button-container">
                        <button 
                            className="red"
                            onClick={() => handleCharacterPropertyDecrease(id, 'attack')}
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                        <button 
                            className="green"
                            onClick={() => handleCharacterPropertyIncrease(id, 'attack')}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="character__properties__property">
                    <div className="label">
                        Defense
                        <span className="amount">{defense}</span>
                    </div>
                    <div className="button-container">
                        <button 
                            className="red"
                            onClick={() => handleCharacterPropertyDecrease(id, 'defense')}
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                        <button 
                            className="green"
                            onClick={() => handleCharacterPropertyIncrease(id, 'defense')}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )    
}