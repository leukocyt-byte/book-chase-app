import { useState, useCallback } from 'react';

import './styles.css';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

function App() {
  const [author, setAuthor] = useState();

  const debounceOnChange = useCallback(debounce(onChange, 600), []);

  function onChange(value) {
    fetch(`https://openlibrary.org/search/authors.json?q=${value}`)
      .then((res) => res.json())
      .then((res) => setAuthor(res));
  }

  return (
    <div className="app">
      <div className="col" id="col__left">
        AUTHORS
        <input
          type="text"
          placeholder="SEARCH"
          onChange={(e) => debounceOnChange(e.target.value)}
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
