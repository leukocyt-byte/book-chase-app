const AuthorTable = (props) => {
  console.log(props.props.docs[0].key);
  console.log(props.props.docs[0]);
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
        {props.props.docs.slice(0, 5).map((index) => (
          <tr key={index.key}>
            <td>{index.name}</td>
            <td>{index.work_count}</td>
            <td>{index.birth_date}</td>
            <td>{index.top_subcjects}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorTable;
