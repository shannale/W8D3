class Clock {
    constructor() {
        const date = new Date("2023-05-17T23:58:58");
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }


    _tick() {
        this.seconds += 1;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
        }

        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
        }

        if (this.hours === 24) {
            this.hours = 0;
        }

        this.printTime();
    }
}

const clock = new Clock();
