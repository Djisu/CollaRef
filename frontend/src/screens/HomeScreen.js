import React, { useEffect } from 'react'
//import data from '../data'
import Asset from '../components/Asset'
//import axios from 'axios'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { listAssets } from '../actions/assetAction'
import { useDispatch, useSelector } from 'react-redux'

function HomeScreen() {
  const assetList = useSelector((state) => state.assetList)
  const { loading, error, assets } = assetList
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(listAssets())
    }
    fetchData()
  }, [dispatch])
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {assets.map((asset) => (
            <Asset key={asset._id} asset={asset}></Asset>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomeScreen
