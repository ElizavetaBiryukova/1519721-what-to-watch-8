import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {setGenres} from '../../store/action';
import {Actions} from '../../types/action';
import {GenreList} from '../../types/genres';
import {State} from '../../types/state';
import {genres} from '../../mocks/genres';

const mapStateToProps = (state: State) => ({
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenreClick(genre: GenreList) {
    dispatch(setGenres(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>;
type GenreProps = PropsFromRedux & {
    activeGenre: GenreList,
  }

function Genres(props: GenreProps): JSX.Element {
  const {activeGenre, onGenreClick} = props;

  const handleGenreClick = (genre: GenreList) => (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onGenreClick(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map(({title, value}) => (
        <li
          key={value}
          className={`catalog__genres-item ${value === activeGenre ? 'catalog__genres-item--active' : ''} `}
        >
          <a
            href={'/'}
            className="catalog__genres-link"
            id={`genre-${value}`}
            onClick={handleGenreClick(value)}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default connector(Genres);