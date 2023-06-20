import {Link} from "react-router-dom";

export function Navigation(){
    return(
        <div className="flex justify-between py-3">
            <Link to="/tasks">
               <h1 className="font-bold text-3xl mb-4">APP CONNIE</h1>
            </Link>
            <Link to="/tasks-create">
            <button className="bg-indigo-500 px-3 py-2 rounded-lg  hover:bg-indigo-700 hover:cursor-pointer">
                create task
            </button>
                </Link>
        </div>
    )
}