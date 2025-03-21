const data = [
  { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', age: 28, email: 'alice@example.com' },
];

function App() {
  return (
    <>
    {/* <p>hello world</p>
    <h1>hello world</h1> */}
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
    
  )
}

export default App
