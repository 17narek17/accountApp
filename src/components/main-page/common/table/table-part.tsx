import React from "react"
import { TableCell, TableRow } from "@material-ui/core"
import { TablePartProps } from "../../../global/types"
import { Link } from "react-router-dom"


export const TablePart:React.FC<TablePartProps>= ({cells, withView}) => {
    return(
        <TableRow>
            {cells.map((cell: string | number) => <TableCell key={cell}>{cell}</TableCell>)}
            {withView && <TableCell><Link to={`accounts/${cells[0]}`}>view</Link></TableCell>}
        </TableRow>
    )
}