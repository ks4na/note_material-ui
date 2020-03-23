let cityDatabase: string[] = []

async function initialCityDatabase(): Promise<void> {
  const fakeData = await Promise.resolve(['Beijing', 'Shanghai'])
  cityDatabase = fakeData
}

beforeAll(async () => {
  await initialCityDatabase()
  console.log('=== initialized ===', cityDatabase)
})

afterAll(() => {
  cityDatabase = []
  console.log('=== cleaned ===', cityDatabase)
})

test('cityDatabase should contain "Beijing"', () => {
  cityDatabase[1] = 'Shenzhen' // 将 cityDatabase 中 "Shanghai" 改成 "Shenzhen"
  expect(cityDatabase).toContain('Beijing')
})

test('cityDatabase should not contain "Shanghai"', () => {
  expect(cityDatabase).not.toContain('Shanghai')
})

export {}
