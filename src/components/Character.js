import React, { useState, useContext } from 'react'
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
        handleCharacterChange,
        handleCharacterPropertyDecrease,
        handleCharacterPropertyIncrease
    } = useContext(CharacterContext)

    return (
        <div className="character">
            <div className="character__avatar">
                <img src={avatar.url} />
            </div>
            <div className="character__properties">
                <div className="character__properties__property">
                    <div className="label">
                        Health
                        <span class="amount">{health}</span>
                    </div>
                    <div className="button-container">
                        <button 
                            className="decrease"
                            onClick={() => handleCharacterPropertyDecrease(id, 'health')}
                        >
                            <i class="fas fa-minus"></i>
                        </button>
                        <button 
                            className="increase"
                            onClick={() => handleCharacterPropertyIncrease(id, 'health')}
                        >
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="character__properties__property">
                    <div className="label">
                        Attack
                        <span class="amount">{attack}</span>
                    </div>
                    <div className="button-container">
                        <button 
                            className="decrease"
                            onClick={() => handleCharacterPropertyDecrease(id, 'attack')}
                        >
                            <i class="fas fa-minus"></i>
                        </button>
                        <button 
                            className="increase"
                            onClick={() => handleCharacterPropertyIncrease(id, 'attack')}
                        >
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="character__properties__property">
                    <div className="label">
                        Defense
                        <span class="amount">{defense}</span>
                    </div>
                    <div className="button-container">
                        <button 
                            className="decrease"
                            onClick={() => handleCharacterPropertyDecrease(id, 'defense')}
                        >
                            <i class="fas fa-minus"></i>
                        </button>
                        <button 
                            className="increase"
                            onClick={() => handleCharacterPropertyIncrease(id, 'defense')}
                        >
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )    
}