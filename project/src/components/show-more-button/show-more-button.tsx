type ShowMoreProps = {
  handleShowMoreClick: () => void,
}

function ShowMoreButton(props: ShowMoreProps): JSX.Element {
  const {handleShowMoreClick} = props;
  return (
    <div className="catalog__more">
      <button onClick={handleShowMoreClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
