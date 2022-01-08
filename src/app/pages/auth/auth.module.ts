import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { LoginComponent } from "./login/login.component";
import { AuthEffects } from "./state/auth.effects";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login' },
            { path: 'login', component: LoginComponent },
        ]
    }
]

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffects]),
    ]
})
export class AuthModule { }