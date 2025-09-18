import { debounce } from "lodash-es";

const reloadMap = new Map<string, () => Promise<void>>();


function addReloadMap(id: string, value: () => Promise<void>) {
    reloadMap.set(id, value)
}

function clearAll() {
    reloadMap.clear()
}

const handleReloadMap = () => {
    Promise.all([...reloadMap.values()].map((fn) => fn()));
};

const debouncedFormDataChange = debounce(handleReloadMap, 500);

function triggerUpdate() {

    debouncedFormDataChange()
}

export default {
    addReloadMap,
    clearAll,
    triggerUpdate
}