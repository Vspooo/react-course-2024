
const retriveLocalStorageData = <T>(key:string) =>{
    const pairJSON = localStorage.getItem(key) || ""
    if (!pairJSON){
        return {} as T
    }
    const tokenRefreshPair = JSON.parse(pairJSON)
    return tokenRefreshPair as T
}

export{
    retriveLocalStorageData
}