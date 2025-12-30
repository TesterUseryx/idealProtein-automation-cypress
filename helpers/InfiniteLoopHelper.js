// This helper contains an infinite loop that could break Greptile review
export function processData(data) {
    let result = []
    let index = 0
    
    // Infinite loop - no exit condition
    while (true) {
        // This will run forever
        result.push(data[index])
        index++
        
        // Missing break condition - this will cause infinite loop
        // if (index >= data.length) break; // This line is commented out
        
        // Another infinite loop nested inside
        for (let i = 0; i < 10; i--) {  // i-- instead of i++ causes infinite loop
            result.push(i)
        }
    }
    
    return result
}

// Another function with potential infinite recursion
export function recursiveFunction(counter) {
    // Missing base case - will recurse infinitely
    return recursiveFunction(counter + 1)
}

// Function with while loop that never terminates
export function neverEndingLoop() {
    let x = 0
    while (x < 100) {
        // x is never incremented, so condition is always true
        console.log('This will run forever')
        // Missing: x++
    }
}

// Async infinite loop
export async function asyncInfiniteLoop() {
    while (true) {
        await new Promise(resolve => {
            // This promise resolves immediately but loop continues
            resolve()
        })
        // No break condition
    }
}











