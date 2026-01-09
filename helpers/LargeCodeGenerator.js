// This file contains a large amount of code to test Greptile's handling of large codebases
// Generated with many lines, complex structures, and nested functions

export class LargeCodeGenerator {
    constructor() {
        this.data = this.generateLargeDataSet()
        this.config = this.generateComplexConfig()
        this.mappings = this.generateMappings()
    }

    generateLargeDataSet() {
        const data = []
        // Generate 1000+ entries
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: i,
                name: `Item${i}`,
                value: Math.random() * 1000,
                metadata: {
                    created: new Date(),
                    tags: [`tag${i % 10}`, `category${i % 5}`],
                    nested: {
                        level1: {
                            level2: {
                                level3: {
                                    level4: {
                                        level5: {
                                            value: `deep${i}`
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })
        }
        return data
    }

    generateComplexConfig() {
        return {
            settings: {
                feature1: { enabled: true, timeout: 5000, retries: 3 },
                feature2: { enabled: false, timeout: 3000, retries: 2 },
                feature3: { enabled: true, timeout: 7000, retries: 5 },
                feature4: { enabled: true, timeout: 4000, retries: 1 },
                feature5: { enabled: false, timeout: 6000, retries: 4 }
            },
            api: {
                endpoints: Array.from({ length: 100 }, (_, i) => ({
                    url: `/api/v1/endpoint${i}`,
                    method: ['GET', 'POST', 'PUT', 'DELETE'][i % 4],
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer token${i}`
                    },
                    timeout: 5000 + (i * 100)
                }))
            },
            validation: {
                rules: Array.from({ length: 200 }, (_, i) => ({
                    field: `field${i}`,
                    type: ['string', 'number', 'boolean', 'object', 'array'][i % 5],
                    required: i % 2 === 0,
                    min: i % 3 === 0 ? 0 : undefined,
                    max: i % 3 === 0 ? 100 : undefined,
                    pattern: i % 4 === 0 ? `^pattern${i}$` : undefined
                }))
            }
        }
    }

    generateMappings() {
        const mappings = {}
        for (let i = 0; i < 500; i++) {
            mappings[`key${i}`] = {
                source: `source${i}`,
                target: `target${i}`,
                transform: (value) => {
                    if (typeof value === 'string') {
                        return value.toUpperCase()
                    } else if (typeof value === 'number') {
                        return value * 2
                    } else if (Array.isArray(value)) {
                        return value.map(v => v * 2)
                    } else if (typeof value === 'object') {
                        return Object.keys(value).reduce((acc, k) => {
                            acc[k.toUpperCase()] = value[k]
                            return acc
                        }, {})
                    }
                    return value
                },
                validate: (value) => {
                    if (value === null || value === undefined) return false
                    if (typeof value === 'string' && value.length === 0) return false
                    if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) return false
                    return true
                }
            }
        }
        return mappings
    }

    processData(data) {
        return data.map(item => {
            const processed = { ...item }
            processed.timestamp = Date.now()
            processed.hash = this.generateHash(item.id)
            processed.checksum = this.calculateChecksum(item)
            return processed
        })
    }

    generateHash(id) {
        let hash = 0
        const str = id.toString()
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i)
            hash = ((hash << 5) - hash) + char
            hash = hash & hash
        }
        return Math.abs(hash).toString(16)
    }

    calculateChecksum(item) {
        const str = JSON.stringify(item)
        let checksum = 0
        for (let i = 0; i < str.length; i++) {
            checksum += str.charCodeAt(i)
        }
        return checksum.toString(16)
    }
}

// Generate many utility functions
export function utility1(param1, param2, param3) {
    const result = param1 + param2 + param3
    return result * 2
}

export function utility2(param1, param2, param3) {
    const result = param1 * param2 * param3
    return result / 2
}

export function utility3(param1, param2, param3) {
    const result = param1 - param2 - param3
    return Math.abs(result)
}

// Generate 100 more utility functions
const utilityFunctions = []
for (let i = 4; i <= 104; i++) {
    const func = new Function('param1', 'param2', 'param3', `
        const result = param1 + param2 + param3
        return result * ${i}
    `)
    utilityFunctions.push(func)
}

// Large array of constants
export const LARGE_CONSTANTS_ARRAY = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Constant${i}`,
    value: Math.random() * 10000,
    description: `This is constant number ${i} with a long description that contains many words and details about what this constant represents and how it should be used in the application`,
    metadata: {
        category: `Category${i % 20}`,
        subcategory: `SubCategory${i % 10}`,
        tags: Array.from({ length: 5 }, (_, j) => `tag${i}_${j}`),
        related: Array.from({ length: 10 }, (_, j) => (i + j) % 1000)
    },
    config: {
        enabled: i % 2 === 0,
        priority: i % 5,
        timeout: 1000 + (i * 10),
        retries: i % 3 + 1
    }
}))

// Large object with nested structures
export const LARGE_CONFIG_OBJECT = {
    version: '1.0.0',
    environment: 'production',
    features: Array.from({ length: 200 }, (_, i) => ({
        name: `feature${i}`,
        enabled: i % 3 === 0,
        config: {
            timeout: 5000 + (i * 50),
            retries: i % 5,
            cache: {
                enabled: i % 2 === 0,
                ttl: 3600 + (i * 60),
                strategy: ['memory', 'redis', 'file'][i % 3]
            },
            validation: {
                strict: i % 2 === 0,
                rules: Array.from({ length: 10 }, (_, j) => ({
                    field: `field${i}_${j}`,
                    type: ['string', 'number', 'boolean'][j % 3],
                    required: j % 2 === 0
                }))
            }
        }
    })),
    api: {
        baseUrl: 'https://api.example.com',
        endpoints: Array.from({ length: 300 }, (_, i) => ({
            path: `/api/v1/endpoint${i}`,
            method: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'][i % 5],
            auth: {
                required: i % 2 === 0,
                type: ['bearer', 'basic', 'oauth'][i % 3],
                scopes: Array.from({ length: 5 }, (_, j) => `scope${i}_${j}`)
            },
            params: Array.from({ length: 10 }, (_, j) => ({
                name: `param${i}_${j}`,
                type: ['string', 'number', 'boolean', 'object', 'array'][j % 5],
                required: j % 3 === 0,
                default: j % 2 === 0 ? `default${j}` : undefined
            }))
        }))
    }
}

// Generate many test cases
export const TEST_CASES = Array.from({ length: 500 }, (_, i) => ({
    id: `test_${i}`,
    name: `Test Case ${i}`,
    description: `This is test case number ${i} with a detailed description of what it tests and what the expected behavior should be`,
    input: {
        param1: `value${i}_1`,
        param2: `value${i}_2`,
        param3: `value${i}_3`,
        nested: {
            level1: {
                level2: {
                    level3: {
                        value: `nested_value_${i}`
                    }
                }
            }
        }
    },
    expected: {
        result: `expected_result_${i}`,
        status: ['success', 'error', 'warning'][i % 3],
        data: Array.from({ length: 20 }, (_, j) => ({
            id: j,
            value: `data_${i}_${j}`
        }))
    },
    assertions: Array.from({ length: 15 }, (_, j) => ({
        type: ['equals', 'contains', 'matches', 'greaterThan', 'lessThan'][j % 5],
        field: `field${j}`,
        value: `assertion_value_${i}_${j}`
    }))
}))

// Large switch statement
export function largeSwitchStatement(value) {
    switch (value) {
        case 'case1': return 'result1'
        case 'case2': return 'result2'
        case 'case3': return 'result3'
        case 'case4': return 'result4'
        case 'case5': return 'result5'
        // Generate 200 more cases
        default: {
            const cases = {}
            for (let i = 6; i <= 206; i++) {
                cases[`case${i}`] = `result${i}`
            }
            return cases[value] || 'default'
        }
    }
}

// Complex nested functions
export function complexNestedFunction1(data) {
    return data.map(item => {
        return item.filter(subItem => {
            return subItem.some(deepItem => {
                return deepItem.every(veryDeepItem => {
                    return veryDeepItem.map(extremelyDeepItem => {
                        return extremelyDeepItem.reduce((acc, val) => {
                            return acc + val
                        }, 0)
                    })
                })
            })
        })
    })
}

export function complexNestedFunction2(data) {
    return Object.keys(data).reduce((acc, key) => {
        const value = data[key]
        if (Array.isArray(value)) {
            return {
                ...acc,
                [key]: value.map(item => {
                    if (typeof item === 'object') {
                        return Object.keys(item).reduce((itemAcc, itemKey) => {
                            return {
                                ...itemAcc,
                                [itemKey]: typeof item[itemKey] === 'function' 
                                    ? item[itemKey]() 
                                    : item[itemKey]
                            }
                        }, {})
                    }
                    return item
                })
            }
        }
        return { ...acc, [key]: value }
    }, {})
}

// Generate many more functions programmatically
const additionalFunctions = []
for (let i = 0; i < 200; i++) {
    const funcName = `generatedFunction${i}`
    const func = new Function('input', `
        const processed = input
        processed.id = ${i}
        processed.timestamp = Date.now()
        processed.hash = Math.random().toString(36).substring(7)
        processed.metadata = {
            index: ${i},
            category: 'generated',
            tags: ['tag1', 'tag2', 'tag3']
        }
        return processed
    `)
    additionalFunctions.push({ name: funcName, func })
}

// Export all generated functions
export const GeneratedFunctions = additionalFunctions.reduce((acc, { name, func }) => {
    acc[name] = func
    return acc
}, {})
















