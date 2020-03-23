import axios from 'axios'

jest.mock('axios') // 自动模拟整个 axios 模块

async function fetchUsers(): Promise<object[]> {
  const resp = await axios.get('/api/users')
  return resp.data
}

test('should fetch users', async () => {
  const users = [{ name: 'bob' }]
  const resp = {
    data: users,
  }
  ;(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(resp)

  const fetchedUsers = await fetchUsers()

  expect.assertions(1)
  expect(fetchedUsers).toEqual(users)
})

test('fetch users should fail', async () => {
  ;(axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
    new Error('fetch users failed')
  )

  expect.assertions(1)
  try {
    await fetchUsers()
  } catch (err) {
    expect(err.message).toMatch('fetch users failed')
  }
})

export {}
