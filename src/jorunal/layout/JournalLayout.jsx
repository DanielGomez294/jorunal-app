import { Box } from "@mui/material"
import { NavBar } from "../components";

const drowerWidth = 240;
export const JournalLayout = ({children}) => {
  return (
<Box sx={{display: "flex"}}>

{/** navbar  drowerwdth*/}
<NavBar drowerWidth={drowerWidth} />

{/** sidebar drowerwdht */}
<Box component="main"
sx={{flexGrow: 1, p:1}}
>

{/** toolbar */}
{children}
</Box>
</Box>
  )
}
