import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createGame } from '../actions/game'
import './CreateGameButton.css'

export class CreateGameButton extends PureComponent {
  static PropTypes = {
    createGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.createGame(6)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="CreateGameButton"
      >
        New game
      </button>
    )
  }
}

export default connect(null, {createGame})(CreateGameButton)
