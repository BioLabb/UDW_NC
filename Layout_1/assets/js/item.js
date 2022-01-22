 export function createItem(id,item){
    localStorage.setItem(id,JSON.stringify(item));
};

export function setListItem(listName,item){
    var arr = new Array;
    if(!localStorage.getItem(listName)){
        arr.push(item);
        createItem(listName,arr);
    }
    else{
        arr = [...JSON.parse(localStorage.getItem(listName)),item]
        console.log(arr);
        createItem(listName,arr);
    }

};

export function getListItem(listName){
    if(localStorage.getItem(listName)){
        var arr = JSON.parse(localStorage.getItem(listName));
        for(var i in arr){
            arr[i] = JSON.parse(arr[i]);
        }
        return arr;
    }
    return undefined;
};


