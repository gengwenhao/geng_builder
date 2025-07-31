import _ from 'lodash'

export const getEntryComponent = async (url = 'http://localhost:3000/scheme_markdown/component.js') => {
  let res = ''
  let jsCode = ''

  try {
    res = await fetch(url)
    jsCode = await res.text()
  } catch (_) {
    return null
  }

  // 创建一个 script 标签来执行组件代码
  // const script = document.createElement('script')
  // script.text = jsCode
  // document.body.appendChild(script)

  // Function 形式
  new Function(jsCode)()

  // copy and clear
  const vueComponent = _.cloneDeep(window.GengSchemeComponent.default || window.GengSchemeComponent)
  delete window.GengSchemeComponent

  return vueComponent
}

export const getEntryData = async () => {
  try {
    const res = await fetch('http://localhost:3000/scheme_markdown/data.json')
    return res.json()
  } catch (err) {
    return null
  }
}
