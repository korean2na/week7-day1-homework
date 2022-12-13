//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for (m in dog_names) {
        if (dog_string.includes(dog_names[m])) {
            console.log('Matched dog_name')}
        else {
            console.log('No Matches')}
    }
}
console.log('EXERCISE 1')
findWords(dog_string, dog_names)



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (n in arr) {
        if (n % 2 == 0) {
            arr.splice(n, 1, 'even index')}
    }
    return console.log(arr)
}
console.log('EXERCISE 2')
replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



//============Exercise #3 ============//
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.

// my python solution:
// def make_readable(seconds):
//     time = ''
//     hours = seconds//3600

//     if hours < 10:
//         time += f'0{str(hours)}:'
//     else:
//         time += f'{str(hours)}:'
//     seconds = seconds - 3600*hours
    
//     mins = seconds//60
//     if mins < 10:
//         time += f'0{str(mins)}:'
//     else:
//         time += f'{str(mins)}:'
//     seconds = seconds - 60*mins

//     if seconds < 10:
//         time += f'0{str(seconds)}'
//     else:
//         time += f'{str(seconds)}'

//     return time

function humanReadable (seconds) {
    let time = ''

    let hours = Math.floor(seconds/3600)
    seconds -= hours*3600
    if (hours < 10) {
        time += `0${hours.toString()}:`
    }
    else {
        time += `${hours.toString()}:`
    }

    let mins = Math.floor(seconds/60)
    seconds -= mins*60
    if (mins < 10) {
        time += `0${mins.toString()}:`
    }
    else {
        time += `${mins.toString()}:`
    }

    if (seconds < 10) {
        time += `0${seconds.toString()}`
    }
    else {
        time += `${seconds.toString()}`
    }

    return time;
}
console.log('EXERCISE 3')
console.log(humanReadable(359999))



//============Exercise #4 ============//
// Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

// For example:
// Given arr1 = [3,10,5], arr2 = [20,7,15,8]
// should return [17,2] because 20 - 3 = 17, 10 - 8 = 2

// Note:
//     arr1 and arr2 contains only integers(positive, negative or 0);
//     arr1 and arr2 may have different lengths, they always has at least one element;
//     All inputs are valid.
//     This is a simple version, if you want some challenges, try the challenge version.

// Some Examples
// maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
// maxAndMin([3],[20]) === [17,17]
// maxAndMin([3,10,5],[3,10,5]) === [7,0]
// maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]

// my python solution:
// def max_and_min(arr1,arr2):
//     arr1 = list(set(arr1))
//     arr2 = list(set(arr2))
//     found_min = float('inf')
//     found_max = 0
//     if len(arr1) > len(arr2):
//         for n in arr1:
//             for m in arr2:
//                 diff = abs(n-m)
//                 if diff < found_min:
//                     found_min = diff
//                 if diff > found_max:
//                     found_max = diff

//     else:
//         for n in arr2:
//             for m in arr1:
//                 diff = abs(n-m)
//                 if diff < found_min:
//                     found_min = diff
//                 if diff > found_max:
//                     found_max = diff

//     return [found_max, found_min]

function maxAndMin(arr1,arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)
    arr1 = Array.from(set1)
    arr2 = Array.from(set2)
    let foundMin = 1.797693134862315E+308
    let foundMax = 0

    if (arr1.length > arr2.length) {
        for (let n of arr1) {
            for (let m of arr2) {
                let diff = Math.abs(n-m)
                if (diff < foundMin) {
                    foundMin = diff
                }
                if (diff > foundMax) {
                    foundMax = diff
                }
            }
        }
    }

    else {
        for (let n of arr2) {
            for (let m of arr1) {
                let diff = Math.abs(n-m)
                if (diff < foundMin) {
                    foundMin = diff
                }
                if (diff > foundMax) {
                    foundMax = diff
                }
            }
        }
    }
    let results = []
    results.push(foundMax)
    results.push(foundMin)
    return results
}
console.log('EXERCISE 4')
console.log(maxAndMin([3,10,5],[20,7,15,8]))