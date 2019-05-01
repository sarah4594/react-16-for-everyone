import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  }

  static defaultProps = {
    desc: 'Description not available'
  }

  render() {
    const { title } = this.props.movie
    return (
      <div>
        <h3>{title}</h3>
      </div>
    )
  }
}

// function Movie(props) {
//   static propTypes = {
//     movie: PropTypes.object
//   }

//   const { title, desc } = props.movie
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{desc}</p>
//     </div>
//   )
// }

// export default Movie
