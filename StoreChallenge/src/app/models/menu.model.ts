export class Menu {
    id: number;
    name: string;
    sublevels: [Menu];


    constructor(
    ) {
        this.id = 0
        this.name = ""
        this.sublevels = [null]
    }

    static generateMockMenu(): Menu {
        return {
            id: 0,
            name: "",
            sublevels: [undefined]
        }
    }
}