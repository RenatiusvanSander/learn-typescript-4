class BMW {
    make:string;
    model:string;
    year:string;

    constructor(make:string,model:string, year:string) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    commonEngineFunc() {
        console.log("Common func");
    }

    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }
}

class ThreeSeries extends BMW {
    cruiseControlEnabled:boolean;

    constructor(make:string, model:string, year:string, cruiseControlEnabled:boolean) {
        super(make,model,year);
        this.cruiseControlEnabled = cruiseControlEnabled;
    }
}

class FiveSeries extends BMW {
    parkingAssistEnabled:boolean;

    constructor(make:string, model:string, year:string, parkingAssistEnabled:boolean) {
        super(make,model,year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }
}

var threeSeries = new ThreeSeries("BMW","328i","2018",false);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);

var fiveSeries = new FiveSeries("BMW","535","2018",false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);