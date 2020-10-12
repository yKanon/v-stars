function log (...restVal) {
  for (const val of restVal) {
    console.log(`val: ${val},`)
  }
}

export default log