import _ from 'lodash'

export const getEntryComponent = async () => {
  const res = await fetch('./main.js')
  const jsCode = await res.text()

  // 创建一个 script 标签来执行组件代码
  // const script = document.createElement('script')
  // script.text = jsCode
  // document.body.appendChild(script)

  // Function 形式
  new Function(jsCode)()

  // copy and clear
  const o = _.cloneDeep(window.HelloGeng.default || window.HelloGeng)
  delete window.HelloGeng

  return o
}
