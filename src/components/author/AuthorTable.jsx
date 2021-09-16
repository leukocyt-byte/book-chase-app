const AuthorTable = (props) => {
  const { autors } = props;
  return (
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
        {autors.map((autor) => (
          <tr key={autor.docs[0].key}>
            <td>{autor.docs[0].name}</td>
            <td>{autor.docs[0].birth_date}</td>
            <td>{autor.docs[0].top_subcjects[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorTable;
