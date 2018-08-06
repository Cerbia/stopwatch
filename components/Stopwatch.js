/*Dodatkowym zadaniem dla chętnych będzie dopisanie metod, które będą:

zaznaczała wynik i przekazywała go do listy czasów,
resetowała listę czasów.
Dla wykonanych zadań dodatkowych stwórz też odpowiednie przyciski na stronie, które będą uruchamiały poszczególne funkcjonalności.
*/
class Stopwatch {
    //display to miejsce w dokumencie
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.results = results;
        this.reset();
        this.print(this.times);
    }

    start(){
        if(!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) {
            return;
        } 
        this.calculate();
        this.print();
    }

    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }


    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        }
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
    }

    pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }

    addResult() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(this.format(this.times)));
        this.results.appendChild(li);
    }

    cleanResults() {
        this.results.innerHTML = '';

    }

}
