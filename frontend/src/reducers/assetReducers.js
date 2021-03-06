import {
  ASSET_LIST_REQUEST,
  ASSET_LIST_SUCCESS,
  ASSET_LIST_FAIL,
} from '../constants/assetConstants'

export const assetListReducer = (
  state = { loading: true, assets: [] },
  action,
) => {
  switch (action.type) {
    case ASSET_LIST_REQUEST:
      return { loading: true }

    case ASSET_LIST_SUCCESS:
      return { loading: false, assets: action.payload }

    case ASSET_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}


