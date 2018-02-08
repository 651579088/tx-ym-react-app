/**
 * action 类型
 */
export const CHANGE_NAV = 'CHANGE_NAV1'

/**
 * action创建函数
 * @param {} nav1Num 
 */
export function changeNav(nav1Num) {
  return {
    type: CHANGE_NAV,
    nav1Num: nav1Num
  }
}