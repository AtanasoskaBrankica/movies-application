import SortBy from './SortBy';
import SortByGenres from './SortByGenres';

const Filters = ({data, genres}) => {
  return (
    <div className="container">
      <SortBy data={data} />
      <SortByGenres genres={genres} data={data} />
    </div>
  );
};

export default Filters;
