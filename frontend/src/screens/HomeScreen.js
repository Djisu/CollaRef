import React from 'react'
import data from '../data'
import Asset from '../components/Asset'


function HomeScreen() {
    return (
        <div>
        <div className="row center">
          {data.assets.map((asset) => (
            <Asset key={asset._id} asset={asset} ></Asset>
          ))}
        </div>
      </div>
    )
}

export default HomeScreen
