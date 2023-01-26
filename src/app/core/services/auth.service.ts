import {Injectable} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private keycloakService: KeycloakService) {}
  
    public getRoles(): string[] {
        return this.keycloakService.getUserRoles();
    }

    public getUserName(): string {
        return this.keycloakService.getUsername();
    }

    public getToken(): Promise<string> {
        return this.keycloakService.getToken();
    }

    public logout() {
        this.keycloakService.logout();
    }

    public getRefreshToken(): string {
        if(this.keycloakService.getKeycloakInstance()){
            return `${this.keycloakService.getKeycloakInstance().refreshToken}` ;
        }
        return '';
    }

    //is logged in
    public isLoggedIn(): Promise<boolean> {
        return this.keycloakService.isLoggedIn();
    }

    //load user profile
    public loadUserProfile(): Promise<any> {
        return this.keycloakService.loadUserProfile();
    }

    //get user roles
    public getUserRoles(): string[] {
        return this.keycloakService.getUserRoles();
    }

}