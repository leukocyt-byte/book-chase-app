import { useState } from 'react';
//import AuthorTable from './components/author/AuthorTable';

import './styles.css';

function App() {
  const [query, setQuery] = useState('');
  const [author, setAuthor] = useState();

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://openlibrary.org/search/authors.json?q=${query}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery('');
          setAuthor(result);
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
          {!author ? (
            ''
          ) : (
            <table>
              <caption>Author results</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Work count</th>
                  <th>Birth date</th>
                  <th>Top subjects</th>
                </tr>
              </thead>
              <tbody>
                {author.docs.slice(0, 5).map((author, index) => (
                  <tr key={index}>
                    <td>{author.name}</td>
                    <td>{author.work_count}</td>
                    <td>{author.birth_date}</td>
                    <td>{author.top_subjects[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
      <div className="col">
        BOOKS
        <li>book 1</li>
        <li>book 2</li>
      </div>
    </div>
  );
}

export default App;
