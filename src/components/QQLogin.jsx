import React, { Component } from 'react'

export default class QQLogin extends Component {
  render() {
    return (
      <div id="qqLoginWrapper">
        <span onClick={this.handleQQLogin}>QQLogin</span>
      </div>
    )
  }

  handleQQLogin = () => {
    return window.QC.Login.showPopup({
      appId: '101474815',
      redirectURI: 'http://m.yumecoder.top/qqLoginCallback'
    })
  }

  componentDidMount() {
    let script = document.querySelector('#qqLoginScript')
    script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//connect.qq.com/qc_jssdk.js'
    script.setAttribute('data-appid', '101474815')
    script.setAttribute(
      'data-redirecturi',
      'http://m.yumecoder.top/qqLoginCallback'
    )
    // script.setAttribute('data-callback', true)
    script.charset = 'utf-8'
    script.id = 'qqLoginScript'
    script.onload = function() {
      console.log('loaded...')
      window.QC.api('get_user_info', {})
        .success(res => {
          console.log('getUserInfo', res)
          window.QC.Login.getMe((openId, accessToken) => {
            console.log('openId: ', openId)
          })
        })
        .error(res => {
          console.log('getUserInfo failed', res)
        })
    }

    document.querySelector('#qqLoginWrapper').appendChild(script)
  }
}
