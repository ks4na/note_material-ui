let cityDatabase: string[] = []

async function initialCityDatabase(): Promise<void> {
  const fakeData = await Promise.resolve(['Beijing', 'Shanghai'])
  cityDatabase = fakeData
}

beforeEach(async () => {
  await initialCityDatabase()
  console.log('======= initialized ========')
  console.log(cityDatabase)
})

afterEach(() => {
  cityDatabase = []
  console.log('======= cleaned ========')
  console.log(cityDatabase)
})

test('cityDatabase should contain "Shanghai"', () => {
  cityDatabase[0] = 'Shenzhen'
  expect(cityDatabase).toContain('Shanghai')
})

test('cityDatabase should contain Beijing', () => {
  expect(cityDatabase).toContain('Beijing')
})

export {}
