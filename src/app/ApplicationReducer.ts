import {Reducer} from "react";
import {ApplicationState} from "./ApplicationState";
import {ActionTypes, ApplicationAction} from "./ApplicationAction";

declare type ChangeColorPayload = {
    color: string
}
const ApplicationReducer: Reducer<ApplicationState, ApplicationAction<unknown>> = (prevState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_COLOR:
            return {
                color: (action.payload as ChangeColorPayload).color
            }
        default: {
            return prevState
        }
    }
}

export default ApplicationReducer
