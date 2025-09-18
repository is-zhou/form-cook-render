import { debounce, get } from "lodash-es";

const reloadMap = new Map<string, [() => Promise<unknown>, string[]]>();


function addReloadMap(id: string, value: [() => Promise<unknown>, string[]]) {
    reloadMap.set(id, value)
}

function clearAll() {
    reloadMap.clear()
}

const handleReloadMap = (newFormData: Record<string, unknown>, oldFormData: Record<string, unknown>) => {

    [...reloadMap.values()].forEach((item) => {
        const [fn, list] = item

        if (list.some((path: string) => get(newFormData, path) !== get(oldFormData, path)) || list.length <= 0) {
            fn()
        }

    })
};

const debouncedFormDataChange = debounce(handleReloadMap, 500);

function triggerUpdate(newFormData: Record<string, unknown>, oldFormData: Record<string, unknown>) {

    debouncedFormDataChange(newFormData, oldFormData)
}

export default {
    addReloadMap,
    clearAll,
    triggerUpdate
}