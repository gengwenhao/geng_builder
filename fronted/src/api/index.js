import _ from 'lodash'

export const getEntryComponent = async () => {
  const res = await fetch('./scheme_component.js')
  const jsCode = await res.text()

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
  const res = await fetch('./data.json')
  return res.json()
}
