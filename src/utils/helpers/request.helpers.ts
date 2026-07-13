import { AsyncLocalStorage } from 'async_hooks';

type LocalStorageType = {
    correlationId : string;
}

export const asyncStorage = new AsyncLocalStorage<LocalStorageType>();

export const getCorrelationId = ()=>{
    const getStore = asyncStorage.getStore()
    return getStore?.correlationId || "unknow-error-correlationId";
}


