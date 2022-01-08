import { createReducer, on } from "@ngrx/store"
import { setErrorMessage, setLoadingSpinner } from "./shared.actions"
import { initialLoadingState } from "./shared.state"

const _sharedReducer = createReducer(
    initialLoadingState,
    on(setLoadingSpinner, (state, actions) => {
        return {
            ...state,
            showLoading: actions.status
        }
    }),
    on(setErrorMessage, (state, actions) => {
        return {
            ...state,
            errorMessage: actions.message
        }
    }),
)

export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}