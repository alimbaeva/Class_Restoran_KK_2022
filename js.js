class Restauran {
    constructor(name, cusineType) {
        this.name = name;
        this.cusineType = cusineType;
        this.client = 0
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

    serv() {
        this.client++;
    }
    setServ(n) {
        this.client += n;
    }
    totalServe() {
        return `Посетили ресторан ${this.client} клиентов`;
    }
}

const beshBarmak = new Restauran('Besh Barmak', 'kyrgyz');
const vasya = new Restauran('Vasya', 'russian');

console.log(beshBarmak.showInfo())
console.log(vasya.showInfo())
console.log(vasya.isOpen())
vasya.serv()
vasya.serv()
vasya.serv()
vasya.setServ(20)
vasya.setServ(8)
vasya.setServ(11)
console.log(vasya.totalServe())