export enum ActionTypes {
    CHANGE_COLOR = "CHANGE_COLOR"
}

export declare type ApplicationAction<Payload> = {
    type: ActionTypes,
    payload: Payload
}
