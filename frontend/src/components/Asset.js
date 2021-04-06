import React from 'react'

function Asset(props) {
  const { asset } = props
  
  return (
    <div key={asset._id} className="card">
      <a href={`/asset/${asset._id}`}>
        <img className="medium" src={asset.image} alt={asset.gps} />
      </a>
      <div className="card-body">
        <a href={`/asset/${asset._id}`}>
          <h2>{asset.gps}</h2>
        </a>
        <div className="price">
          <span className="title-color">Owner:</span>
          {asset.owner}
          <br />
          <span className="title-color">Collateral Bank:</span>
          {asset.bank}
          <br />
          <span className="title-color">Collateral Status:</span>
          {asset.status}
        </div>
      </div>
    </div>
  )
}

export default Asset
