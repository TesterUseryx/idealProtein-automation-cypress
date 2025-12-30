// Massive data processor with thousands of lines of code
// This file is designed to test Greptile's handling of very large files

export class MassiveDataProcessor {
    constructor(options = {}) {
        this.options = {
            batchSize: options.batchSize || 100,
            maxRetries: options.maxRetries || 3,
            timeout: options.timeout || 5000,
            ...options
        }
        this.cache = new Map()
        this.processors = this.initializeProcessors()
    }

    initializeProcessors() {
        const processors = {}
        // Generate 500 processor functions
        for (let i = 0; i < 500; i++) {
            processors[`processor${i}`] = {
                name: `Processor${i}`,
                process: (data) => {
                    const result = { ...data }
                    result.processed = true
                    result.processorId = i
                    result.timestamp = Date.now()
                    result.hash = this.generateHash(JSON.stringify(data))
                    result.metadata = {
                        index: i,
                        category: `Category${i % 20}`,
                        tags: Array.from({ length: 10 }, (_, j) => `tag${i}_${j}`),
                        related: Array.from({ length: 15 }, (_, j) => (i + j) % 500)
                    }
                    return result
                },
                validate: (data) => {
                    if (!data || typeof data !== 'object') return false
                    if (Array.isArray(data) && data.length === 0) return false
                    if (typeof data === 'object' && Object.keys(data).length === 0) return false
                    return true
                },
                transform: (data) => {
                    if (Array.isArray(data)) {
                        return data.map(item => ({
                            ...item,
                            transformed: true,
                            transformId: i
                        }))
                    }
                    return {
                        ...data,
                        transformed: true,
                        transformId: i
                    }
                }
            }
        }
        return processors
    }

    generateHash(str) {
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i)
            hash = ((hash << 5) - hash) + char
            hash = hash & hash
        }
        return Math.abs(hash).toString(16)
    }

    processBatch(data, processorName) {
        const processor = this.processors[processorName]
        if (!processor) {
            throw new Error(`Processor ${processorName} not found`)
        }

        const results = []
        for (let i = 0; i < data.length; i += this.options.batchSize) {
            const batch = data.slice(i, i + this.options.batchSize)
            const batchResults = batch.map(item => {
                if (!processor.validate(item)) {
                    return { error: 'Validation failed', item }
                }
                return processor.process(item)
            })
            results.push(...batchResults)
        }
        return results
    }

    processAll(data) {
        const allResults = {}
        Object.keys(this.processors).forEach(processorName => {
            allResults[processorName] = this.processBatch(data, processorName)
        })
        return allResults
    }
}

// Generate 1000 validation functions
export const ValidationFunctions = {}
for (let i = 0; i < 1000; i++) {
    ValidationFunctions[`validate${i}`] = (value) => {
        if (value === null || value === undefined) return false
        if (typeof value === 'string' && value.length === 0) return false
        if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) return false
        if (Array.isArray(value) && value.length === 0) return false
        if (typeof value === 'object' && Object.keys(value).length === 0) return false
        return true
    }
}

// Generate 1000 transformation functions
export const TransformationFunctions = {}
for (let i = 0; i < 1000; i++) {
    TransformationFunctions[`transform${i}`] = (data) => {
        if (Array.isArray(data)) {
            return data.map(item => ({
                ...item,
                transformed: true,
                transformIndex: i,
                timestamp: Date.now(),
                hash: Math.random().toString(36).substring(7)
            }))
        }
        return {
            ...data,
            transformed: true,
            transformIndex: i,
            timestamp: Date.now(),
            hash: Math.random().toString(36).substring(7)
        }
    }
}

// Large mapping object with 2000 entries
export const LARGE_MAPPING = {}
for (let i = 0; i < 2000; i++) {
    LARGE_MAPPING[`key${i}`] = {
        id: i,
        name: `Mapping${i}`,
        source: `source${i}`,
        target: `target${i}`,
        config: {
            enabled: i % 2 === 0,
            priority: i % 10,
            timeout: 1000 + (i * 10),
            retries: i % 5 + 1,
            cache: {
                enabled: i % 3 === 0,
                ttl: 3600 + (i * 60),
                strategy: ['memory', 'redis', 'file', 'hybrid'][i % 4]
            }
        },
        rules: Array.from({ length: 20 }, (_, j) => ({
            field: `field${i}_${j}`,
            type: ['string', 'number', 'boolean', 'object', 'array'][j % 5],
            required: j % 2 === 0,
            validation: {
                min: j % 3 === 0 ? 0 : undefined,
                max: j % 3 === 0 ? 100 : undefined,
                pattern: j % 4 === 0 ? `^pattern${i}_${j}$` : undefined
            }
        }))
    }
}

// Large configuration with nested structures
export const MASSIVE_CONFIG = {
    version: '2.0.0',
    environment: 'production',
    services: Array.from({ length: 500 }, (_, i) => ({
        id: `service${i}`,
        name: `Service${i}`,
        enabled: i % 2 === 0,
        config: {
            host: `host${i}.example.com`,
            port: 8000 + i,
            timeout: 5000 + (i * 10),
            retries: i % 5 + 1,
            healthCheck: {
                enabled: i % 3 === 0,
                interval: 30000 + (i * 1000),
                timeout: 5000,
                path: `/health${i}`
            },
            endpoints: Array.from({ length: 50 }, (_, j) => ({
                path: `/api/v1/service${i}/endpoint${j}`,
                method: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'][j % 5],
                auth: {
                    required: j % 2 === 0,
                    type: ['bearer', 'basic', 'oauth', 'apikey'][j % 4],
                    scopes: Array.from({ length: 10 }, (_, k) => `scope${i}_${j}_${k}`)
                },
                validation: {
                    strict: j % 2 === 0,
                    rules: Array.from({ length: 15 }, (_, k) => ({
                        field: `field${i}_${j}_${k}`,
                        type: ['string', 'number', 'boolean', 'object', 'array'][k % 5],
                        required: k % 3 === 0,
                        default: k % 2 === 0 ? `default${k}` : undefined
                    }))
                }
            })),
            cache: {
                enabled: i % 2 === 0,
                strategy: ['memory', 'redis', 'file'][i % 3],
                ttl: 3600 + (i * 60),
                maxSize: 1000 + (i * 100)
            }
        }
    })),
    features: Array.from({ length: 1000 }, (_, i) => ({
        id: `feature${i}`,
        name: `Feature${i}`,
        enabled: i % 3 === 0,
        description: `This is feature number ${i} with a detailed description that explains what this feature does and how it should be used in the application`,
        config: {
            timeout: 5000 + (i * 50),
            retries: i % 5,
            priority: i % 10,
            dependencies: Array.from({ length: 20 }, (_, j) => `feature${(i + j) % 1000}`),
            metadata: {
                category: `Category${i % 50}`,
                subcategory: `SubCategory${i % 20}`,
                tags: Array.from({ length: 15 }, (_, j) => `tag${i}_${j}`),
                related: Array.from({ length: 30 }, (_, j) => (i + j) % 1000)
            }
        }
    }))
}

// Generate 500 utility classes
export const UtilityClasses = {}
for (let i = 0; i < 500; i++) {
    UtilityClasses[`Utility${i}`] = class {
        constructor(config = {}) {
            this.id = i
            this.config = config
            this.data = []
        }

        process(data) {
            const result = { ...data }
            result.processed = true
            result.utilityId = this.id
            result.timestamp = Date.now()
            return result
        }

        validate(data) {
            return data !== null && data !== undefined
        }

        transform(data) {
            return {
                ...data,
                transformed: true,
                utilityId: this.id
            }
        }
    }
}

// Large test data generator
export function generateLargeTestData(size = 10000) {
    return Array.from({ length: size }, (_, i) => ({
        id: i,
        name: `Item${i}`,
        value: Math.random() * 10000,
        metadata: {
            created: new Date(),
            updated: new Date(),
            category: `Category${i % 100}`,
            tags: Array.from({ length: 20 }, (_, j) => `tag${i}_${j}`),
            related: Array.from({ length: 50 }, (_, j) => (i + j) % size),
            nested: {
                level1: {
                    level2: {
                        level3: {
                            level4: {
                                level5: {
                                    value: `deep_value_${i}`,
                                    metadata: {
                                        index: i,
                                        hash: Math.random().toString(36).substring(7)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        config: {
            enabled: i % 2 === 0,
            priority: i % 10,
            timeout: 1000 + (i * 10),
            retries: i % 5 + 1
        }
    }))
}








