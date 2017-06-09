import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {UserInfo,AuthFail,AuthSuccess} from '../model/common.container';
import {RESTURI} from '../model/resturi';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserAuthService{
    private token:String="";
    private userInfo: UserInfo = {userId:'',loginName:'',password:''};

    constructor(private http:Http){
        let token = window.sessionStorage.getItem("token");
        if (token != null){
            this.token = token;
        }
        let userInfo = window.sessionStorage.getItem("userInfo");
        if (userInfo != null){
            this.userInfo = JSON.parse(userInfo);
        }
    }

    accessauth(): Promise<string>{
        if (this.token != ""){
            return Promise.resolve(this.token);
        }

        let url = RESTURI.AUTH.VUSER.replace("{username}",this.userInfo.loginName).replace("{password}",this.userInfo.password);
        let headers = new Headers({ 'Authorization': 'Basic ' + btoa('ui:secret') });
        return this.http.post(url,"",{ headers: headers }).toPromise().then((response) => {
                console.info("授权成功,用户名:"+this.userInfo.loginName+",密码:"+this.userInfo.password);
                this.token = "bearer " + (response.json() as AuthSuccess).access_token;
                return this.token;
            }).catch(error => {
                let res = error.json() as AuthFail;
                if (res.status == 401){
                    console.error('授权失败，用户名:'+this.userInfo.loginName+",密码:"+this.userInfo.password);
                    return Promise.reject('授权失败，用户名:'+this.userInfo.loginName+",密码:"+this.userInfo.password);
                }
                else{
                    console.error('网络请求失败,用户名:'+this.userInfo.loginName+",密码:"+this.userInfo.password);
                    return Promise.reject('网络请求失败,用户名:'+this.userInfo.loginName+",密码:"+this.userInfo.password);
                }
            });
    }

    getUserInfo(): UserInfo{
        return this.userInfo;
    }
}