import React from 'react'
//import asset from '../components/Asset'
import data from '../data'

function AssetScreen(props) {
  const asset = data.assets.find((x) => x._id === props.match.params.id)
  if (!asset) {
    return <div>Asset not Found</div>
  }

  return (
   
      <div className="row">
        <div className="col-2">
          <img className="large" src={asset.image} alt={asset.gps}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>GPS Address: {asset.gps}</h1>
            </li>
            <li>Owner: {asset.owner}</li>
            <li>Map: {asset.map}</li>
            <li>Collateral Bank:{asset.bank}</li>
            <li>Collateral Status:{asset.status}</li>
            <li>Collateral Start Date:{asset.beg_date}</li>
            <li>Collateral End Date:{asset.end_date}</li>
            <li>Asset Value:{asset.value}</li>
            <li>Asset Valuer:{asset.valuer}</li>
            <li>Asset Type:{asset.asset_type}</li>
            <li>Collateral Bank Contact:{asset.bank_contact}</li>
            <li>Collateral Bank Contact Phone No:{asset.bank_phone}</li>
          </ul>
        </div>
        <div className="col-1">
            <div className="card card-body">

            </div>
      </div>
    </div>
  )
}

export default AssetScreen
