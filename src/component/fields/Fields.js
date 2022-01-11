import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { getFields } from '../../apis/field'

const columns = [
  { id: 'fieldName', label: '字段名', minWidth: 170 },
  { id: 'valueType', label: '值类型', minWidth: 100 },
  {
    id: 'sourceType',
    label: '来源类型',
    minWidth: 170,
  }, {
    id: 'operate',
    label: '操作',
    minWidth: 100
  }
]

function EditBtn({click}) {
  return (
    <IconButton
      color="primary"
      aria-label="edit"
      size="small"
      onClick={click}
    >
      <EditOutlinedIcon fontSize="small" />
    </IconButton>
  )
}

function Fields() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [data, setData] = useState([])
  const { entityId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getFields(entityId).then(data => {
      setData(data)
    })
  }, [entityId])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const edit = (id) => {
    navigate(String(id))
  }

  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    { columns.map((column) => {
                      let cellContent = row[column.id]
                      if (column.id === 'operate') {
                        cellContent = <EditBtn click={() => edit(row.id)} />
                      }
              
                      return (
                        <TableCell key={column.id} align={column.align}>
                          { cellContent }
                        </TableCell>
                      )
                    })
                    }
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default Fields