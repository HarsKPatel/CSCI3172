import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <section id="hero" className="text-center py-5">
        <h1>Welcome to My Travel Diary</h1>
      </section>
      
      <section id="tours" className="container">
        <h2 className="text-center mb-5">Featured Tours</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="400px"/>
              <div className="card-body">
                <h5 className="card-title">Tour-1</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo consequat, varius turpis ut, convallis justo.</p>
                <button className="btn btn-primary">Click here for more info</button>
              </div>
            </div>  
          </div>
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." height="400px"/>
              <div className="card-body">
                <h5 className="card-title">Tour-2</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo consequat, varius turpis ut, convallis justo.</p>
                <button className="btn btn-primary">Click here for more info</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="400px"/>
              <div className="card-body">
                <h5 className="card-title">Tour-3</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo consequat, varius turpis ut, convallis justo.</p>
                <button className="btn btn-primary">Click here for more info</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="text-center py-4">
        <p>&copy; 2024 Travel Diary. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
