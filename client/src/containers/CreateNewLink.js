import React from 'react'
import { connect } from 'react-redux'
import { getNewLink } from '../actions'
 
let CreateNewLink = ({ dispatch }) => {
  let input
 
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(getNewLink("https://iskall.io/"))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Get new link
        </button>
      </form>
    </div>
  )
}
CreateNewLink = connect()(CreateNewLink)
 
export default CreateNewLink