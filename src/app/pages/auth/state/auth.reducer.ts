import { createReducer, on } from "@ngrx/store"
import { autoLogout, loginSuccess, signupSuccess } from "./auth.actions"
import { AuthState, initialAuthState } from "./auth.state"

const _authReducer = createReducer(
    initialAuthState,
    on(loginSuccess, (state, action) => getUseState(state, action)),

    on(signupSuccess, (state, action) => getUseState(state, action)),
    on(autoLogout, (state) => {
        return {
            ...state,
            user: null
        }
    })
)

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}

function getUseState(state: AuthState, action: any) {
    return {
        ...state,
        user: action.user
    }
}