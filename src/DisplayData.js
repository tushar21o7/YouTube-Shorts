const DisplayData = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => {
          const { name, age } = user;
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>{age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayData;
