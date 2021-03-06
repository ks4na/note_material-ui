import axios from 'axios'

const baseUrls = {
  development: '',
  unittest: '',
  test: '//testserver.com',
  production: '//prodserver.com',
}

// 配置 axios 的 baseURL
axios.defaults.baseURL = baseUrls[process.env.NODE_ENV || 'development']
