//console.log('sort this!');

function bubbleSort(items) {  
    if (items === undefined){
        return [];
    }
    
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (items[j] < items[j - 1]) {
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
   return items;
}
