import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { AuthResponseData } from "../models/AuthResponseData.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<AuthResponseData> {
        return of({
            email: email,
            password: password,
            exprireIn: '',
            loalId: '',
            refreshToken: '',
            registred: true,
            idToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        }).pipe(delay(200))
    }

    formatUser(data: AuthResponseData): User {
        const expiratioNDate = new Date(new Date().getTime() + Number(data.exprireIn) * 1000)
        return new User(data.email, data.idToken, data.loalId, expiratioNDate);
    }
}