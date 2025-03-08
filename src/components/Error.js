import { useRouteError } from "react-router"

export const Error =()=>{
    const errorm = useRouteError();
    return(
        <div>
            <h1>{errorm.status}</h1>
            <p>{errorm.statusText}</p>
        </div>
    )
}