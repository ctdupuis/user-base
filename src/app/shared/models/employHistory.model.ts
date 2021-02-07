export class EmployHistory {
    employer: string;
    manager: string;
    startDate: string;
    endDate: string;
    currentJob: boolean;

    public dateFormat(date: string) {
        const splitDate = date.split("-")
        debugger
        return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
    }
}