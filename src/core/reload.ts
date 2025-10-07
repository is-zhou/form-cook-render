import { debounce, get } from "lodash-es";

/** ---------- 表单刷新管理 ---------- **/
const reloadMap = new Map<string, [() => Promise<unknown>, string[]]>();

export function addReload(id: string, fn: () => Promise<unknown>, deps: string[] = []) {
    reloadMap.set(id, [fn, deps])
}

export function clearReloadAll() {
    reloadMap.clear()
}

const handleReload = (newData: Record<string, unknown>, oldData: Record<string, unknown>) => {
    for (const [fn, paths] of reloadMap.values()) {
        if (paths.length === 0 || paths.some(path => get(newData, path) !== get(oldData, path))) {
            fn()
        }
    }
}

const debouncedReload = debounce(handleReload, 500)

export function triggerReload(newData: Record<string, unknown>, oldData: Record<string, unknown>) {
    debouncedReload(newData, oldData)
}