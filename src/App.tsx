import './App.css';

function App() {
  return (
    <section>
      <h1>John Roy Ducut</h1>
      <Container />
    </section>
  );
}

function Container() {
  return (
    <section style={{ textAlign: 'center' }}>
      <div style={{
        margin: '0 auto',
        width: '300px',
        height: '300px',
        border: '5px solid rgb(58, 0, 0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffa8a8',
        color: 'black'
      }}>
        CPEITEL
      </div>
    </section>
  );
}

export default App;
