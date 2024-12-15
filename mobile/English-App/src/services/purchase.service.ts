import http from "./Http";

class PurchaseService {
    baseURI: string;
    constructor() {
        this.baseURI = "course-buying/";
    }
    private getURI(uri: string) {
        return `${this.baseURI}${uri}`;
    }
    async buyCourse(courseId: string) {
        return await http.post(
            this.getURI(''),
            {
                courseId: courseId,
                paymentMethod: "ATM"
            },
        );
    }
    async getRedirectionUrl(courseBuyingId: string) {
        return await http.post(
            this.getURI("create-pay-order-url"),
            {
                courseBuyingId: courseBuyingId,
            },
        );

    }
}
const purchaseservice = new PurchaseService();
export default purchaseservice;