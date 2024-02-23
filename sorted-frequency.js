function sortedFrequency(arr, val) {
    let lftIdx = 0;
    let rtIdx = arr.length - 1;
    let frequency = 0
    while (lftIdx <= rtIdx) {
        let mdIdx = Math.floor((rtIdx + lftIdx) / 2)
        let mdVal = arr[mdIdx]
        if (mdVal < val) {
            lftIdx = mdIdx + 1
        } else if (mdVal > val) {
            rtIdx = mdIdx - 1
        } else {
            //if the execution gets here it means that the value of arr[mdIdx] is equal to val
            frequency++;

            //However, values might also be found at index less than mdIdx and greater than mdIdx
           
            if (arr[mdIdx - 1] == val) {                             
                cnt1 = mdIdx - 1;
                while (cnt1>=0) {    
                    if(arr[cnt1] == val){                
                       frequency++;
                    }
                    cnt1--;                    
                }
            }
            if(arr[mdIdx + 1] == val || cnt2>arr.length-1){                  
                cnt2 = mdIdx + 1;
                while (cnt2 < arr.length-1) {
                    if(arr[cnt2] == val){
                       frequency++;
                    }
                    cnt2++;
                }
            }            
            return frequency
        }       
    }
    return -1
}



module.exports = sortedFrequency