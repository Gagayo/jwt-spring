import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthenticationService{

    private HOST:string= "http://127.0.0.1:8080";
    //Token
    private jwtToken = null;
     //roles
     private roles: Array<any>;
    
    constructor(private httpClient: HttpClient){

    }

    //Save Token dans localStorage
    saveToken(jwt: string){
        this.jwtToken = jwt;
        
        localStorage.setItem("token",jwt);
        //Pour recup de roles
        let jwtHelper = new JwtHelper();
        this.roles = jwtHelper.decodeToken(this.jwtToken).roles; 
    }
    //Chargement du Toke
    loadToken(){
        this.jwtToken = localStorage.getItem("token");
    }

    //All Tasks
    getTasks(){

        if(this.jwtToken==null){
            this.loadToken();
        }
        return this.httpClient.get(this.HOST+"/tasks", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    }

    //Save Task
    saveTask(task){

        return this.httpClient.post(this.HOST, task,{headers: new HttpHeaders({'authorization':this.jwtToken})});
    }
    //Verifier si on est admin
    isAdmin(){
        for(let role of this.roles){
            if(role.authority=="ADMIN") return true
        }
        return false;
    }

    login(user){

        return this.httpClient.post(this.HOST+"/login",user,{observe: 'response'});
    }

    logout(){
        this.jwtToken=null;
        localStorage.removeItem("token");
    }
}