const testVar = {}

function testFunc() {
  return "hi"
}

let superbowlWin = record => {

  let result = record.find(s => s['result'] === 'W')
  return !!result ?  result.year : undefined
  

}