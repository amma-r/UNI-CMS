import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import type { LedgerEntry } from './types'

type Props = {
  ledger: LedgerEntry[]
}

export default function LedgerTable({ ledger }: Props) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ledger.map((row) => (
            <TableRow key={`${row.date}-${row.description}`}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">
                {row.amount.toLocaleString(undefined, {
                  style: 'currency',
                  currency: 'USD',
                })}
              </TableCell>
              <TableCell align="right">
                {row.balance.toLocaleString(undefined, {
                  style: 'currency',
                  currency: 'USD',
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
