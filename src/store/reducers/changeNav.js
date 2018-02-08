import { combineReducers } from 'redux'
// 一级导航菜单所在的栏，用key保存这个全局状态
import { CHANGE_NAV } from 'src/store/actions/changeNav'

function nav1(state='a', action) {
  switch (action.type) {
    case CHANGE_NAV:
      return action
    default:
      return state
  }
}

const changeNav = combineReducers({
  nav1
})

export default changeNav