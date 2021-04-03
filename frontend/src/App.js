import React from 'react'

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            CollaRef
          </a>
        </div>
        <div>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          <div className="card">
            <a href="asset.html">
              <img
                className="medium"
                src="../../houses/house1.jpg"
                alt="house"
              />
            </a>
            <div className="card-body">
              <a href="asset.html">
                <h2>House No: D27/3</h2>
              </a>
              <div className="price">
                <span className="title-color">Owner:</span>
                Sam Couffie
                <br />
                <span className="title-color">Collateral Bank:</span>
                GCB Tudu Branch
                <br />
                <span className="title-color">Collateral Status:</span>
                Pending
                <br />
                <span className="title-color">GPS Address:</span>
                GT 765-321
              </div>
            </div>
          </div>
          <div className="card">
            <a href="asset.html">
              <img
                className="medium"
                src="../../houses/house2.jpg"
                alt="house"
              />
            </a>
            <div className="card-body">
              <a href="asset.html">
                <h2>House No: D28/3</h2>
              </a>
              <div className="price">
                <span className="title-color">Owner:</span>
                Kofi Pentsil
                <br />
                <span className="title-color">Collateral Bank:</span>
                GCB Ecobank, Ridge Branch
                <br />
                <span className="title-color">Collateral Status:</span>
                Pending
                <br />
                <span className="title-color">GPS Address:</span>
                GT 765-321
              </div>
            </div>
          </div>
          <div className="card">
            <a href="asset.html">
              <img
                className="medium"
                src="../../houses/house3.jpg"
                alt="house"
              />
            </a>
            <div className="card-body">
              <a href="asset.html">
                <h2>House No: F28/3</h2>
              </a>
              <div className="price">
                <span className="title-color">Owner:</span>
                Yaw Attah
                <br />
                <span className="title-color">Collateral Bank:</span>
                NIB Accra Central Branch
                <br />
                <span className="title-color">Collateral Status:</span>
                Pending
                <br />
                <span className="title-color">GPS Address:</span>
                GT 765-321
              </div>
            </div>
          </div>
          <div className="card">
            <a href="asset.html">
              <img
                className="medium"
                src="../../houses/house4.jpg"
                alt="house"
              />
            </a>
            <div className="card-body">
              <a href="asset.html">
                <h2>House No: E28/3</h2>
              </a>
              <div className="price">
                <span className="title-color">Owner:</span>
                Sam Johnson
                <br />
                <span className="title-color">Collateral Bank:</span>
                GCB Circle Branch
                <br />
                <span className="title-color">Collateral Status:</span>
                Completed
                <br />
                <span className="title-color">GPS Address:</span>
                GT 765-321
              </div>
            </div>
          </div>
          <div className="card">
            <a href="asset.html">
              <img
                className="medium"
                src="../../houses/house5.jpg"
                alt="house"
              />
            </a>
            <div className="card-body">
              <a href="asset.html">
                <h2>House No: D28/3</h2>
              </a>
              <div className="price">
                <span className="title-color">Owner:</span>
                Dora Bruku
                <br />
                <span className="title-color">Collateral Bank:</span>
                GCB Asokwa, Kumasi Branch
                <br />
                <span className="title-color">Collateral Status:</span>
                Completed
                <br />
                <span className="title-color">GPS Address:</span>
                GT 765-321
              </div>
            </div>
          </div>
          <div className="card">
            <a href="asset.html">
              <img
                className="medium"
                src="../../houses/house6.jpg"
                alt="house"
              />
            </a>
            <div className="card-body">
              <a href="asset.html">
                <h2>House No: G28/3</h2>
              </a>
              <div className="price">
                <span className="title-color">Owner:</span>
                Sylvia Bruce-Parks
                <br />
                <span className="title-color">Collateral Bank:</span>
                GTB Osu Branch
                <br />
                <span className="title-color">Collateral Status:</span>
                Pending
                <br />
                <span className="title-color">GPS Address:</span>
                GT 765-321
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  )
}

export default App
