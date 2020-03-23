export default class Calc {
  public value = 0

  constructor(value?: number) {
    this.value = value || 0
  }

  add(num: number): this {
    this.value += num
    return this
  }
}
