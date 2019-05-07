/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor (type = 'default') {
  let color = ''
  switch (type) {
    case 'default': color = '#35495E'; break
    case 'primary': color = '#3488ff'; break
    case 'success': color = '#43B883'; break
    case 'warning': color = '#e6a23c'; break
    case 'danger': color = '#f56c6c'; break
    default:; break
  }
  return color
}

/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {String} title title text
 * @param {String} info info text
 * @param {String} type style
 */
export const capsuleLog = function (title, info, type = 'primary') {
  console.log(
    `%c ${title} %c ${info} %c`,
    'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
    `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
    'background:transparent'
  )
}

/**
 * @description 打印彩色文字
 */
export const colorfulLog = function (textArr) {
  console.log(
    `%c${textArr.map(t => t.text || '').join('%c')}`,
    ...textArr.map(t => `color: ${typeColor(t.type)};`)
  )
}

/**
 * @description 打印 default 样式的文字
 */
export const log = function (text) {
  colorfulLog([{ text }])
}

/**
 * @description 打印 primary 样式的文字
 */
export const primaryLog = function (text) {
  colorfulLog([{ text, type: 'primary' }])
}

/**
 * @description 打印 success 样式的文字
 */
export const successLog = function (text) {
  colorfulLog([{ text, type: 'success' }])
}

/**
 * @description 打印 warning 样式的文字
 */
export const warningLog = function (text) {
  colorfulLog([{ text, type: 'warning' }])
}

/**
 * @description 打印 danger 样式的文字
 */
export const dangerLog = function (text) {
  colorfulLog([{ text, type: 'danger' }])
}
