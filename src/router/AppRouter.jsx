import { Route, Routes } from "react-router-dom"
import { Authroutes } from "../auth/routes/Authroutes"
import { JournalRoutes } from "../jorunal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>


        {/* Login y registro */}
        <Route path="/auth/*" element={ <Authroutes />} />

            {/* JournalApp */}     
            <Route path="/*" element={ <JournalRoutes />} />


    </Routes>
  )
}
