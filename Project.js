class Project {
    constructor(projectNum, lowCost, startDate, endDate) {
        this.projectNum = projectNum,
            this.lowCost = lowCost,
            this.startDate = startDate,
            this.endDate = endDate
    }
    getProjectDetails() {
        console.log(`
            Project ${this.projectNum}
            Low Cost: ${this.lowCost}
            Start Date: ${this.formatDate(this.startDate)}
            End Date: ${this.formatDate(this.endDate)}
            Total Days: ${this.getTotalDays()}
            Full Days: ${this.getFullDays()}
            Each Date: ${this.getDates(this.startDate, this.endDate)}
        `);
    }
    getDates(startDate, endDate) {
        let dateArray = new Array();
        let currentDate = startDate;
        while (currentDate <= endDate) {
            dateArray.push(this.formatDate(currentDate))
            currentDate = currentDate.addDays(1);
        }
        return dateArray;
    }
    getTotalDays() {
        const startDate = new Date(this.startDate);
        const endDate = new Date(this.endDate);
        const timeBetween = endDate.getTime() - startDate.getTime();
        const daysBetween = (timeBetween / (1000 * 3600 * 24)).toFixed(0);
        return daysBetween;
    }
    getFullDays() {
        const totalDays = this.getTotalDays();
        return totalDays - 2;
    }
    formatDate(date) {
        const formatted = new Date(date).toLocaleDateString('en-us');
        return formatted;
    }
    getReimbursement() {
        const cost = this.lowCost;
        const fullDays = this.getFullDays();

    }

    // getTravelDays() {
    //     console.log(`Get project travel days`);
    // }



}

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

const project1 = new Project(1, false, new Date('03 21 2022'), new Date('03 25 2022'));
const project2 = new Project(2, true, new Date('11 06 2022'), new Date('11 08 2022'));
const project3 = new Project(3, true, new Date('02 18 2022'), new Date('02 21 2022'));

project1.getProjectDetails();
project2.getProjectDetails();
project3.getProjectDetails();





