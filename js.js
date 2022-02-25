class Restauran {
    constructor(name, cusineType) {
        this.name = name;
        this.cusineType = cusineType;
    }

    showInfo() {
        return `${this.name} is a restauran of ${this.cusineType} meal.`;
    }

    isOpen() {
        let currentHour = new Date().getHours();
        let currentDay = new Date().getDay();
        if (currentDay === 6 || currentDay === 0) {
            return `${this.name}  is Closed!!!`
        } else {
            if (currentHour > 9 && currentHour < 22) {
                return `${this.name} is Open!`
            } else {
                return `${this.name} is Closed!`
            }
        }
    }
}

const beshBarmak = new Restauran('Besh Barmak', 'kyrgyz');
const vasya = new Restauran('Vasya', 'russian');

console.log(beshBarmak.showInfo())
console.log(vasya.showInfo())
console.log(vasya.isOpen())