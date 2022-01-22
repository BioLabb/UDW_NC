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
<<<<<<< HEAD:Layout_1/assets/js/item.js
        for(var i in arr){
            arr[i] = JSON.parse(arr[i]);
        }
=======
>>>>>>> d87c28da55932d21a6c20a39fcba640b59a36001:Layout_1/assets/js/product.js
        return arr;
    }
    return undefined;
};


