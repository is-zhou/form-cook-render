const globalFunctions: Record<string, Function> = {
}

export function setGlobalFn(key: string, fn: () => unknown) {
    globalFunctions[key] = fn
}

export function getGlobalFn(key: string) {
    return globalFunctions[key] || (() => { console.warn(`全局函数未注册 ${key}`) })
}