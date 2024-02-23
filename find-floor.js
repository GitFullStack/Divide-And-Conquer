function findFloor(arr, val) {
  
  for(let i = 0; i< arr.length; i++)  {   
    if(i==0 && arr[i]> val)  {
      return -1
    }
    if(i>0 && i < arr.length - 2){
      if(arr[i]>val)
      return arr[i-1]
    }
    if(i>0 && i == arr.length - 1){
      if(arr[i]<val)
      return arr[i]
    }
  }
  
}

module.exports = findFloor