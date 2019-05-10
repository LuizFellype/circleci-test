import React, { useState, useReducer } from 'react'
import { removeDuplicated, findFashion } from './functions'
import './App.css'

const clothesHistory = [
  ['Paulo', 'Fabrício', 'Deih'],
  ['Basseti', 'Alexandre', 'Thayron'],
  ['Metzen', 'Leandro', 'Léo', 'David'],
  ['Basseti', 'Lucas', 'Fabrício', 'Thayron'],
  ['Paulo', 'Pedro Paulo Barros', 'Sávio', 'David'],
  ['Matheus Queiroz', 'Léo', 'Donato', 'Deih'],
  ['Donato', 'Sávio', 'Lucas', 'Fabrício'],
  ['Bassetti', 'Paulo', 'Leandro', 'David'],
  ['Gripa', 'Léonardo', 'Diego', 'Valdeir'],
  ['Paulo', 'Fabrício', 'Deih', 'Leandro', 'Lucas'],
  ['Bassetti', 'Zidane', 'Léo', 'Donato', 'Luis G'],
  ['Metzen', 'Fernando Natalli', 'David', 'Renato', 'Thayron'],
  ['Bassetti', 'Donato', 'Léo', 'Andrade'],
  ['Paulo', 'Metzen', 'Fabrício', 'Leandro'],
  ['Sávio', 'Renato', 'Deih', 'Josmar'],
  ['Basseti', 'Alexandre', 'Eduardo', 'Deih'],
  ['Paulo', 'Renato', 'Leandro', 'Max'],
  ['Sávio', 'Andrade', 'Fabrício', 'Josmar'],
  ['Paulo', 'Donato', 'Deih', 'Luis G'],
  ['Mikael', 'Zidane', 'Leandro', 'Fabrício'],
  ['Josmar', 'Andrade', 'Léo', 'Lucas'],
  ['Bassetti', 'Donato', 'Lucas', 'Josmar'],
  ['Paulo', 'Márcio', 'Andrade', 'Leandro'],
  ['Renato', 'Mikael', 'Deih', 'Fabrício'],
  ['Bassetti', 'Léo', 'Josmar', 'Lucas'],
  ['Paulo', 'Andrade', 'Donato', 'Fabrício'],
  ['Márcio', 'Renato', 'Leandro', 'Deih'],
  ['Basseti', 'Luizinho', 'Fabrício', 'Deih'],
  ['Paulo', 'Lype', 'Andrade', 'Bruno'],
  ['Renato', 'Luiz (Lype)', 'Donato', 'Lucas'],
  ['Fabrício', 'Léo', 'Lucas', 'Josmar'],
  ['Deih', 'Sirleno', 'Andrade', 'Paulo'],
  ['Leandro', 'Marcus', 'Donato', 'Renato'],
  ['Basseti', 'Fabrício', 'Leandro', 'Lucas'],
  ['Paulo', 'Sirleno', 'Deih', 'Donato'],
  ['Thayron', 'Fernando', 'Yan', 'Filipe'],
  ['Bassetti', 'Josmar', 'Donato', 'Lucas'],
  ['Paulo', 'Fabrício', 'Thayron', 'Deih'],
  ['Sávio', 'Leandro', 'Léo', 'Bruno'],
  ['Bassetti', 'Leandro', 'Donato', 'Deih'],
  ['Paulo', 'Thayron', 'Josmar', 'Lucas'],
  ['Márcio', 'Filipe', 'Bruno', 'Fernando'],
  ['Bassetti', 'Leandro', 'Donato', 'Eduardo'],
  ['Sávio', 'Thayron', 'Fabrício', 'Bruno'],
  ['Filipe', 'Alexandre', 'Josmar', 'Lucas'],
  ['Bassetti', 'Donato', 'Thayron', 'Eduardo'],
  ['Márcio', 'Josmar', 'Fabrício', 'Lucas'],
  ['Leandro', 'Andrade', 'Bruno', 'Deih'],
  ['Bassetti', 'Andrade', 'Fabrício', 'Eduardo'],
  ['Márcio', 'Josmar', 'Thayron', 'Lucas'],
  ['Leandro', 'Bruno', 'Donato', 'Deih'],
  ['Bassetti', 'Thayron', 'Yan', 'Lucas'],
  ['Paulo', 'Andrade', 'Donato', 'Deih'],
  ['Bruno', 'Leandro', 'Josmar', 'Léo'],
  ['Bassetti', 'Josmar', 'Fernando', 'Eduardo'],
  ['Bruno', 'Donato', 'Thayron', 'Deih'],
  ['Filipe', 'Andrade', 'Léo', 'Lucas'],
  ['Bassetti', 'Andrade', 'Thayron', 'Brendo'],
  ['Bruno', 'Donato', 'Josmar', 'Lucas'],
  ['Sávio', 'Leandro', 'Deih', 'Eduardo'],
  ['Bassetti', 'Andrade', 'Thayron', 'Lucas'],
  ['Bruno', 'Josmar', 'Léo', 'Deih'],
  ['Donato', 'Márcio', 'Leandro', 'Fabrício'],
  ['Deih', 'Fabrício', 'Bassetti', 'Mikael'],
  ['Andrade', 'Lucas', 'Bruno', 'Rafinha'],
  ['Léo', 'Donato', 'Márcio', 'Brendo']
]

const intialState = { clothesHistory, currentDay: [] }

const reducer = (state, action) => {
  console.log('ac', action)
  switch (action.type) {
    case 'NEW_CLOTHES':
      return { ...state, currentDay: [...state.currentDay, action.payload] }
    case 'SET_JSON_READY':
      return {
        ...state,
        clothesHistory: [...state.clothesHistory, ...action.payload]
      }
    case 'NEW_DAY':
      return {
        ...state,
        clothesHistory: [...state.clothesHistory, state.currentDay],
        currentDay: []
      }
    default:
      return state
  }
}

const AllLists = ({ state }) => {
  console.log('state', state)
  const allClothesUsed =
    state.clothesHistory.length > 0
      ? removeDuplicated(state.clothesHistory.join().split(','))
      : []

  const findPartner = e => {
    console.log(findFashion(state.clothesHistory, e.currentTarget.innerText))
  }

  return (
    <div className='lists-container'>
      <div className='list-block'>
        <strong>All clothes</strong>
        {allClothesUsed.map(clothesName => {
          return (
            <div
              key={clothesName}
              className='clothes-item'
              onClick={findPartner}
            >
              <span>{clothesName}</span>
            </div>
          )
        })}
      </div>
      <div className='list-block'>
        <strong>TODAY</strong>
        {state.currentDay.map((clothesName, i) => {
          return (
            <div key={i} id={clothesName} className='clothes-item-current-day'>
              <span>{clothesName}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [state, dispatch] = useReducer(reducer, intialState)

  const handlerValue = e => setInputValue(e.currentTarget.value)

  const addClothes = () => {
    dispatch({ type: 'NEW_CLOTHES', payload: inputValue })
    setInputValue('')
  }
  const addNewDay = () => dispatch({ type: 'NEW_DAY' })

  return (
    <div className='container'>
      <div className='form-block'>
        <input
          placeholder='What are u wearing today?'
          value={inputValue}
          onChange={handlerValue}
        />
        <button onClick={addClothes}>Add Item</button>
        <button onClick={addNewDay}>New Day</button>
      </div>

      <AllLists state={state} />
    </div>
  )
}

export default App
