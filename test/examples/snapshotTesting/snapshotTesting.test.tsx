import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'

describe('snapshot testing example', () => {
  // test('should render Link correctly', () => {
  //   const tree = renderer
  //     .create(<Link page="https://www.facebook.com">Facebook</Link>)
  //     .toJSON()
  //   expect(tree).toMatchSnapshot()
  // })

  // 更新 Link 的参数
  test('should render Link correctly', () => {
    const tree = renderer
      .create(<Link page="https://www.instagram.com">Instagram</Link>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

export {}
