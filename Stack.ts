// Phương thức khởi tạo không tham số

// Phương thức thêm một phần tử mới vào stack push()

// Phương thức lấy ra phần tử trên cùng của stack: pop()

// Phương thức trả về số phần tử trong stack: size()
export class Stack<T>{
    container: T[]=[];
    constructor(){};

    push(data:T):void{
        this.container.push(data);
    }
    pop():T|undefined{
        return this.container.pop();
    }
    size():number{
        return this.container.length;
    }
}