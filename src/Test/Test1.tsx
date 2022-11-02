export type List<T>  = {
    length: number;
    [index: number]: T;
}

const numberList: List<number> = [1, 2, 3 ,4]

const List: List<string> = ["Test", "test2"]


// List[1]
