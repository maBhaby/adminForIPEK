// const binarySearch<T> = (arrItem: T[], item:T): T | null=> {

// }

// binarySearch<number>()

function binarySearch<T>(arrItem: T[], item:T): number | null {
  let low = 0
  let high = arrItem.length - 1

  while (low <= high) {
    let mid = (low + high) / 2 // середина массива
    let guess = arrItem[mid]
    if(guess === item){
      return mid
    }
    else if (guess > item) {
      high = mid - 1
    }
    else {
      high = mid + 1
    }
    return null
  }
}

const createArray = (count: number): number[] => {
  const result:number[] = []

  for(let i = 0; i <= count; i++) {
    result.push(i)
  }
  return result
}

binarySearch<number>(createArray(100), 3)