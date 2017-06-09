import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {UserAuthService} from './user.auth.service'
import { AuthFail, AuthSuccess } from "../model/common.container";
import * as MyConst from '../model/common.constant';

@Injectable()
export class HttpWrapperService{
    private unauth : string = MyConst.UNAUTH;
    private token: string ="";
    private isAuthing = false;
    private promise: Promise<void> = null;

    constructor(private http:Http, private userAuthService : UserAuthService){}
    
    public doWrapperGet<T>(url,placeholder? : object): Promise<T>{
        if (placeholder != null)
            url = this.transUrl(url,placeholder);
        return this.isNeedAuth().then(()=>{
            return this.doGet<T>(url);
        },error=>{
            // if result is no authenticate error then redirect relogin page
            return Promise.reject(error);
        })
    }

    private doGet<T>(url: string):Promise<T>{
        let headers = this.createHeader(url);

        return new Promise<T>((resolve,reject)=>{
            this.http.get(url,{headers: headers}).toPromise().then(res=>{
                let response = res.json();
                if (response.resultCode == MyConst.RETURN_SUCCESS){
                    if (response.pageInfo != null)
                        response.resultContent._pageInfo = response.resultContent;
                    resolve(response.resultContent as T);
                }else{
                    reject(response.detailDescription);
                }
            }).catch(err=>{
                reject(this.errorHandle(err));
            });
        });
    }



    private createHeader(url:string): Headers{
        let headers = new Headers({
                'Content-Type': 'application/json'
            });
        if (url.indexOf(this.unauth) > -1){
            headers.append('Authorization', this.token);
        }
        return headers;
    }                    
    
    private transUrl(url: string, map: object): string {
        return url.replace(/{(\w+)}/g, function (origin: string, match: string, index: number) {
            return map[match];
        });
    }

    private isNeedAuth(): Promise<any>{
        if (this.token != "") return Promise.resolve();
        if (this.isAuthing) return this.promise;
        this.isAuthing = true;
        this.promise = this.userAuthService.accessauth().then(token=>{
            this.token=token;
            this.isAuthing= false;
        },error=>{
            this.isAuthing=false;
            return Promise.reject(error);
            // redirect relogin page
        });
    }

    private errorHandle(error:any):string{  
        if(toString.call(error.json)=="[object Function]"){
            let res = error.json() as AuthFail;
            if (res.status == 401){
                console.error('授权失败');
                return '授权失败';
            }
            console.error('网络请求异常，错误码' + res.status);
            return '网络请求异常，错误码' + res.status;
        }else{
            console.error(error.message);
            return error.message;
        }
    }

}