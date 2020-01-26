// Iterable groups

// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

class Group{
    constructor(){
        this.array = [];
    }
    add(value){
        if (!this.has(value)) {
            this.array.push(value);
        }
    }
    has(value) {
        return this.array.includes(value);
    }
    delete(value) {
        this.array = this.array.filter(x => x !== value);
    }
    static from(array) {
        let group = new Group;
        for (let val of array) {
          group.add(val);
        }
        return group;
      }

    [Symbol.iterator]() {
    return new GroupIterator(this);
    }
}

class GroupIterator{
    constructor(group){
        this.group = group;
        this.val = 0;
    }
    next(){
        if(this.val === this.group.array.length){
            return { done: true };
        }else{
        let result = {value: this.group.array[this.val], done: false};
        this.val++;
        return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }