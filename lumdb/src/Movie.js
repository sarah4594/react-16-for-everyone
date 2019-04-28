import React, { Component } from 'react'

// export default class Movie extends Component {
//   render() {
//     const { title } = this.props.movie
//     return <div>{title}</div>
//   }
// }

function Movie(props) {
  const { title } = props.movie
  return <div>{title}</div>
}

export default Movie
