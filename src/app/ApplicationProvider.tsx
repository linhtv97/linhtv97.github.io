import {ApplicationState, INITIAL_STATE} from "./ApplicationState";
import React, {Dispatch, FunctionComponent, useContext, useReducer} from "react";
import {ApplicationAction} from "./ApplicationAction";
import ApplicationReducer from "./ApplicationReducer";

const AppConfiguration = {
    state: INITIAL_STATE,
    dispatch: () => undefined
}

const ApplicationContext = React.createContext<{ state: ApplicationState, dispatch: Dispatch<ApplicationAction<unknown>> }>(AppConfiguration)


const ApplicationProvider: FunctionComponent = ({children}) => {
    const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE)
    return (
        <ApplicationContext.Provider value={{state, dispatch}}>
            {children}
        </ApplicationContext.Provider>
    )
}

export const useApplication = () => useContext(ApplicationContext);

export default ApplicationProvider
