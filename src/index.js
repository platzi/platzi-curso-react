import React from 'react';
import ReactDOM from 'react-dom';

const useHackerNewsApi = () => {
  const [query, setQuery] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(
    false
  );
  React.useEffect(() => {
    if (!query) {
      return;
    }
    const search = async () => {
      setLoading(true);
      const result = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story&numericFilters=created_at_i%3E2019-01-01`
      );
      const data = await result.json();
      setItems(data.hits);
      setLoading(false);
    };
    search();
  }, [query]);
  return {
    setQuery,
    items,
    loading
  };
};

const App = () => {
  const [
    searchValue,
    setSearchValue
  ] = React.useState('');
  const {
    setQuery,
    items,
    loading
  } = useHackerNewsApi();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(searchValue);
        }}
      >
        <input
          type="text"
          value={searchValue}
          onChange={e =>
            setSearchValue(e.target.value)
          }
        />
        <button type="submit">Pesquisar</button>
      </form>
      {loading && <h1>Carregando</h1>}
      {!loading && items.length > 0 && (
        <ul>
          {items.map(i => (
            <li key={i.objectID}>{i.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
