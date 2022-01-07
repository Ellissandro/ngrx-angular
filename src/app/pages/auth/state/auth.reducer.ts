import { createReducer, on } from "@ngrx/store"
import { loginSuccess } from "./auth.actions"
import { initialAuthState } from "./auth.state"

const _authReducer = createReducer(
    initialAuthState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    })
)

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}   