export interface SharedState {
    showLoading: boolean;
    errorMessage: string;
}

export const initialLoadingState: SharedState = {
    showLoading: false,
    errorMessage: '',
}