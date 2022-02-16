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
            Total Dates: ${this.getTotalDates()}
            Reimbursement: ${this.getReimbursement()}
            Date Overlap: ${this.dateOverlap()}
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


        if (lowCost === true) {
            if (this.dateOverlap()) {
                return lowCostTravel + (fullDays * lowCostFullDay)
            } else {
                return (travelDays * lowCostTravel) + (fullDays * lowCostFullDay)
            }
        } else {
            if (this.dateOverlap()) {
                return highCostTravel + (fullDays * highCostFullDay)
            } else {
                return (travelDays * highCostTravel) + (fullDays * highCostFullDay)
            }
        }

    }
    dateOverlap() {
        if (this.startDate.getFullYear() === this.endDate.getFullYear() &&
            this.startDate.getMonth() === this.endDate.getMonth() &&
            this.startDate.getDate() === this.endDate.getDate()) {
            return true;
        } else {
            return false;
        }
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

        console.log(`
            Project Set ${this.setNum}
            Project Sequence Start Date (Travel Day): ${this.formatDate(this.getStartDate())}
            Project Sequence End Date (Travel Day): ${this.formatDate(this.getEndDate())}

        `);
    }
    getAllDates() {
        const dates = this.projects.map(project => {
            return this.getDates(project.startDate, project.endDate);
        });
        return dates;
    }
    getStartDate() {
        return this.projects[0].startDate;
    }
    getEndDate() {
        return this.projects.at(-1).endDate;
    }
    getLowCostTravelDates() {
        const projects = this.projects;

        projects.forEach((project) => {

        })
    }
    getEachReimbursement() {
        //lowCostTravel
        //highCostTravel
        //lowCostFullDay
        //highCostFullDay
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
const projectSet2 = new ProjectSet(2, [project2, project3, project4]);
const projectSet3 = new ProjectSet(3, [project5, project6, project7]);
const projectSet4 = new ProjectSet(4, [project8, project9, project10, project11]);

project1.getProjectDetails();
project2.getProjectDetails();
project3.getProjectDetails();


projectSet1.getProjectSetDetails();
projectSet2.getProjectSetDetails();
projectSet3.getProjectSetDetails();
projectSet4.getProjectSetDetails();






