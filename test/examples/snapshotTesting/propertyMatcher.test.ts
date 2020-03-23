// test('will fail every time', () => {
//   const user = {
//     createdAt: new Date(),
//     id: Math.floor(Math.random() * 20),
//     name: 'Bob',
//   }

//   expect(user).toMatchSnapshot()
// })

test('use property matchers', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'Bob',
  }

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
    name: 'Bob',
  })
})

export {}
