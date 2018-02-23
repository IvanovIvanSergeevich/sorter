class Sorter {
    constructor() {
        this.array = [];
        this.compareMethod;
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        indices.sort();
        var i, sortedArray = [];
        for (i=0;i<indices.length;i++){
            sortedArray.push(this.array[indices[i]]);
        }
        sortedArray.sort(this.setComparator(this.compareMethod));
        for (i=0;i<indices.length;i++){
            this.array[indices[i]]=sortedArray[i];
        }
    }

    setComparator(compareFunction) {
        if (compareFunction) return this.compareMethod=compareFunction;
        else return (a,b)=>a-b;
    }
}


module.exports = Sorter;