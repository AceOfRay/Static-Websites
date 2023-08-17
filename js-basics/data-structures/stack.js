
class Ray_Stack {
    constructor() {
        this.stack = []
    }
    push(data) {
        this.stack.push(data);
    }
    pop() {return this.stack.pop()}
    
    peek() {
        return this.stack[-1];
    }
    is_empty() {
        if (this.stack.length > 0) {return false}
        else {return true}
    }
    get_size() {return this.stack.length}
}

const stack = new Ray_Stack();
stack.push('1')
console.log(stack.pop())