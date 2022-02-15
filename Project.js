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
            Total Dates: ${this.getTotalDates()}
            Full Days: ${this.getFullDays()}
            Each Date: ${this.getDates(this.startDate, this.endDate)}
            Reimbursement: ${this.getReimbursement()}
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
    getTotalDates() {
        const startDate = this.startDate;
        const endDate = this.endDate;
        const totalDates = this.getDates(startDate, endDate).length;
        return totalDates;
    }
    getTotalDays() {
        const startDate = new Date(this.startDate);
        const endDate = new Date(this.endDate);
        const timeBetween = endDate.getTime() - startDate.getTime();
        const daysBetween = (timeBetween / (1000 * 3600 * 24)).toFixed(0);
        return daysBetween;
    }

    getFullDays() {
        const dates = this.getTotalDates();
        return dates <= 2 ?
            0
            :
            dates - 2
    }
    getTravelDays() {
        return 2;
    }
    getReimbursement() {
        const lowCost = this.lowCost;
        const fullDays = this.getFullDays();
        const travelDays = this.getTravelDays();
        const lowCostTravel = 45;
        const highCostTravel = 55;
        const lowCostFullDay = 75;
        const highCostFullDay = 85;


        return lowCost === true ?
            (travelDays * lowCostTravel) + (fullDays * lowCostFullDay)
            :
            (travelDays * highCostTravel) + (fullDays * highCostFullDay)


    }
    formatDate(date) {
        const formatted = new Date(date).toLocaleDateString('en-us');
        return formatted;
    }
}


class ProjectSet extends Project {
    constructor(setNum, projects) {

        super()

        this.setNum = setNum;
        this.projects = projects;

    }
    getProjectSetDetails() {
        const projects = this.projects.map(project => {
            return project;
        });
        console.log(projects);
    }
    getAllDates() {
        const dates = this.projects.map(project => {
            return this.getDates(project.startDate, project.endDate);
        });
        return dates;
    }
    getProjectSequence() {
        //
    }
    getEachReimbursement() {
        // 
    }
    getTravelDays() {
        //
    }

    getLowCostDates() {
        //
    }
    getOverlappingDates() {
        // compare project A's endDate with this next project in the set with the earliest startDate
    }

}

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}


const project1 = new Project(1, true, new Date('09 01 2015'), new Date('09 03 2015'));

const project2 = new Project(1, true, new Date('09 01 2015'), new Date('09 01 2015'));
const project3 = new Project(2, false, new Date('09 02 2015'), new Date('09 06 2015'));
const project4 = new Project(3, true, new Date('09 06 2015'), new Date('09 08 2015'));

const project5 = new Project(1, true, new Date('09 01 2015'), new Date('09 03 2015'));
const project6 = new Project(2, false, new Date('09 05 2015'), new Date('09 07 2015'));
const project7 = new Project(3, false, new Date('09 08 2015'), new Date('09 08 2015'));

const project8 = new Project(1, true, new Date('09 01 2015'), new Date('09 01 2015'));
const project9 = new Project(2, true, new Date('09 01 2015'), new Date('09 01 2015'));
const project10 = new Project(3, false, new Date('09 02 2015'), new Date('09 02 2015'));
const project11 = new Project(4, false, new Date('09 08 2015'), new Date('09 08 2015'));

const projectSet1 = new ProjectSet(1, [project1]);
const projectSet2 = new ProjectSet(1, [project2, project3, project4]);
const projectSet3 = new ProjectSet(1, [project5, project6, project7]);

project1.getProjectDetails();
project2.getProjectDetails();
project3.getProjectDetails();


projectSet2.getProjectSetDetails();





