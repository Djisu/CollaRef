import axios from 'axios'
import {
  ASSET_LIST_REQUEST,
  ASSET_LIST_SUCCESS,
  ASSET_LIST_FAIL,
} from '../constants/assetConstants'

export const listAssets = () => async (dispatch) => {
  dispatch({ type: ASSET_LIST_REQUEST })

  try {
    const { data } = await axios.get('api/assets')
    dispatch({ type: ASSET_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ASSET_LIST_FAIL, payload: error.message })
  }
}
