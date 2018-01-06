import originalJSONP from 'jsonp'
import $ from 'jquery'

export function getData(el, name, val) {
  const dataName = 'data-' + name
  if (val) {
    return el.setAttribute(dataName, val)
  } else {
    return el.getAttribute(dataName)
  }
}

export function jsonp(url, data, option) {
  return new Promise((resolve, reject) => {
    originalJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function scrollTop() {
  $('html,body').animate({scrollTop: 0}, 160)
}
