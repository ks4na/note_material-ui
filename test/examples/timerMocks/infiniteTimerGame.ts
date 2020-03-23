export default function infiniteTimerGame(callback?: () => void): void {
  console.log('Ready...go!')

  setTimeout(() => {
    console.log("Time's up! 10 seconds before the next game starts...")

    callback && callback()

    setTimeout(() => {
      infiniteTimerGame(callback)
    }, 10000)
  }, 1000)
}
