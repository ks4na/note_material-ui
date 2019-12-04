import React, { Component } from 'react'

export default class QQLogin extends Component {
  render() {
    return <div id="qqLoginWrapper">登录中...</div>
  }

  componentDidMount() {
    let script = document.querySelector('#qqLoginScript')
    script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//connect.qq.com/qc_jssdk.js'
    script.setAttribute('data-callback', true)
    script.charset = 'utf-8'
    script.id = 'qqLoginScript'
    script.onload = function() {
      console.log('loaded...')
    }

    document.querySelector('#qqLoginWrapper').appendChild(script)
  }
}
