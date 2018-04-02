import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'

export class Square extends PureComponent {
  static PropTypes = {
    value: PropTypes.number.isRequired
  }
  
  render() {
    return (
      <div className="Square" value={this.props.value}>
      </div>
    )
  }
}

export default Square
