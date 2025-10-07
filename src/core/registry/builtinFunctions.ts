const builtinFunctions: Record<string, Function> = {}

export function registerBuiltinFn(key: string, fn: () => unknown) {
    builtinFunctions[key] = fn
}

export function getBuiltinFn(key: string) {
    return builtinFunctions[key] || (() => { console.warn(`内置函数未注册 ${key}`) })
}

export function getAllBuiltinFn(key: string) {
    return builtinFunctions
}



