import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <h1> Explore my Travel Diary</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="400px"/>
              <div className="card-body">
                <h5 className="card-title">Tour-1</h5>
                <p className="card-text">Excepteur consectetur id adipisicing ut proident in.</p>
                <a href="#" className="btn btn-primary">Click here for more info</a>
              </div>
            </div>  
          </div>
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." height="400px"/>
              <div className="card-body">
                <h5 className="card-title">Tour-2</h5>
                <p className="card-text">Excepteur consectetur id adipisicing ut proident in.</p>
                <a href="#" className="btn btn-primary">Click here for more info</a>
              </div>
            </div>`
          </div>
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="400px"/>
              <div className="card-body">
                <h5 className="card-title">Tour-3</h5>
                <p className="card-text">Excepteur consectetur id adipisicing ut proident in.</p>
                <a href="#" className="btn btn-primary">Click here for more info</a>
              </div>
            </div>`
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
