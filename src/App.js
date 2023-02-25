
import './App.css';

function App() {
  const nayoks= ['raihan', 'bappi', 'jakira' ,'pasa']
  const kaj= ['web designer', 'teacher', 'maramari','fafor']
  return (
    <div className="App">
      {
        nayoks.map(nayok=><Person name={nayok}></Person>)
      }
      {
        kaj.map(k=><Person job={k}></Person>)
      }
      <header className="App-header">
      <h1> hiiiiiiiiiiiiii</h1>







      {/* <Person name={nayoks[0]} job={kaj[0]}></Person>
      <Person name={nayoks[1]} job={kaj[1]}></Person>
      <Person name={nayoks[2]} job={kaj[2]}></Person>
      <Person name={nayoks[3]} job={kaj[3]}></Person> */}
      </header>
    </div>
  );
}
function Person(params) {
  return (
    <div>
    <h1>I am {params.name}</h1>
    <h2>amr kaj {params.job}</h2>
    </div>
    

  )
}
export default App;
