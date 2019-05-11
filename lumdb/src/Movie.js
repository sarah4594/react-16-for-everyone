import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

// export default class Movie extends Component {
//   static propTypes = {
//     movie: PropTypes.shape({
//       title: PropTypes.string.isRequired
//     })
//   }

//   static defaultProps = {
//     desc: 'Description not available'
//   }

//   render() {
//     const { title } = this.props.movie
//     return (
//       <div>
//         <h3>{title}</h3>
//       </div>
//     )
//   }
// }

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const Movie = props => {
  const { title, poster_path, id } = props.movie
  return (
    <Link to={`/${id}`}>
      <Overdrive id={id}>
        <Poster src={`${POSTER_PATH}${poster_path}`} alt={title} />
      </Overdrive>
    </Link>
  )
}
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

Movie.defaultProps = {
  desc: 'Description not available'
}

export default Movie

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`
