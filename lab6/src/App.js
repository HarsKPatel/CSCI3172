import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Travel Diary</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
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
                <a href="#" className="btn btn-primary">Click here for more info</a>
              </div>
            </div>  
          </div>
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." height="400px"/>
              <div className="card-body">
                <h5 className="card-title">Tour-2</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo consequat, varius turpis ut, convallis justo.</p>
                <a href="#" className="btn btn-primary">Click here for more info</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="400px"/>
              <div className="card-body">
                <h5 className="card-title">Tour-3</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo consequat, varius turpis ut, convallis justo.</p>
                <a href="#" className="btn btn-primary">Click here for more info</a>
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
