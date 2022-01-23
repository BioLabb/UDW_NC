// sử lý các thao tác localStore

 export function createItem(id,item){
     localStorage.setItem(id,JSON.stringify(item));
    // localStorage.setItem(id,item);
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
        return arr;
    }
    return undefined;
};


