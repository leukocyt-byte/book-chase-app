import { useState } from 'react';
//import AuthorTable from './components/author/AuthorTable';

import './styles.css';

function App() {
  const [query, setQuery] = useState('');
  const [author, setAuthor] = useState({ docs: [] });

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://openlibrary.org/search/authors.json?q=${query}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery('');
          setAuthor(result);
          console.log(result);
        });
    }
  };
  return (
    <div className="app">
      <div className="col" id="col__left">
        AUTHORS
        <input
          type="text"
          placeholder="SEARCH"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        ></input>
        <section>
          <ul>
            {author.docs.map((author, index) => {
              return (
                <li key={index}>
                  <div>
                    <div>
                      <h3>{author.name}</h3>
                      <p>Birth date: {author.name}</p>
                      <p>Top work: {author.top_work}</p>
                    </div>
                  </div>
                  <hr />
                </li>
              );
            })}
          </ul>
        </section>
        {/* {typeof author.numFound != 'undefined' ? (
          <AuthorTable authors={author} />
        ) : (
          ''
        )}{' '} */}
      </div>
      <div className="col">BOOKS</div>
    </div>
  );
}

export default App;
