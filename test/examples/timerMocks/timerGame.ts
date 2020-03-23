export default function timerGame(callback?: () => void): void {
  console.log('Ready...go!')
  setTimeout(() => {
    console.log("Time's up -- stop!")
    callback && callback()
  }, 1000)
}
