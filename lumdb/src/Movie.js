import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
    <div>
      <Link to={`/${id}`}>
        <img src={`${POSTER_PATH}${poster_path}`} alt={title} />
      </Link>
    </div>
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
