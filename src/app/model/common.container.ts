/**用户信息 */
export interface UserInfo{
    userId:string;
    loginName:string;
    password:string;
}
/**鉴权失败返回结果 */
export interface AuthFail {
    error: string;
    message: string;
    path: string;
    status: number;
    timestamp: number;
}
/**鉴权成功返回结果 */
export interface AuthSuccess {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
}
/**分页信息 */
export class PageInfo{
    /**当前页 */
    currentPage? : number = 1;
    //**每页条数 */
    pageSize? :number = 10;
    /**总页数 */
    totalPage?:number = 0;
    /**总记录数 */
    totalRecords?:number = 0;
    /**当前页面显示条数的序列编号*/
    currentFirstRecordNumber: number;
    currentLastRecordNumber: number;
    /**翻页按钮数量*/
    maxSize: number;
    //**默认每页条数 */
    defaultPageSize: number;
    //**当前页面显示信息 */
    currentInfo: string;
    //**是否显示翻页按钮 */
    isShowPage: boolean;

    constructor() {
        this.maxSize = 5;
        this.defaultPageSize = 7;
        this.isShowPage = true;
        this.currentFirstRecordNumber = 0;
        this.currentLastRecordNumber = 0;
    }

    init(): void {
        if (this.pageSize == null || this.pageSize == 0) {
            this.pageSize = this.defaultPageSize;
        }
        this.getIsShowPage();
        this.getCurrentRecordsNumber();
    }

    getCurrentRecordsNumber(): void {
        this.currentFirstRecordNumber = (this.currentPage - 1) * this.pageSize + 1;
        this.currentLastRecordNumber = this.currentPage < this.totalPage ? this.currentFirstRecordNumber + this.pageSize - 1 : this.totalRecords;
        if(!this.currentFirstRecordNumber || !this.currentLastRecordNumber){
            this.currentInfo = 0 + '';
            return
        }
        if(this.currentFirstRecordNumber == this.currentLastRecordNumber){
            this.currentInfo = this.currentFirstRecordNumber + '';
        }else{
            this.currentInfo = this.currentFirstRecordNumber + ' - ' + this.currentLastRecordNumber;
        }
    }

    getIsShowPage(): void {
        this.isShowPage = (this.defaultPageSize >= this.totalRecords ? false : true);
    }
}