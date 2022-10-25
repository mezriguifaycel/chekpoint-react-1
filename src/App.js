//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const dsn= {color:'red',textAlign:'center'}
  return (
    <div className="App">
       <h1 style={{color:"blue",textAlign:'center'}}>Mes formulaires </h1>
       <form>
  <div className="form-group row">
    <label for="staticEmail"className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="staticEmail" defaultValue="email@example.com"/>
    </div>
    <br/>
    <br/>

  </div>
  <div className="form-group row">
    <label for="inputPassword"className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password"className="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
</form>

    </div>
  );
}

export default App;
