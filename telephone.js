class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            this.notifyObservers(number);
        } else {
            console.log(`Cannot dial ${number}, not in contacts.`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

class PhoneObserver {
    update(number) {
        console.log(number);
    }
}

class DialingObserver {
    update(number) {
        console.log(`Now Dialling ${number}`);
    }
}

// Example Usage
const phone = new Telephone();
const observer1 = new PhoneObserver();
const observer2 = new DialingObserver();

phone.addObserver(observer1);
phone.addObserver(observer2);

phone.addPhoneNumber("2347023232");
phone.dialPhoneNumber("2347023232");
phone.dialPhoneNumber("1234567890");
