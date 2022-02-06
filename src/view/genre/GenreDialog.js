import { useEffect, useMemo, useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { getListNotChildren } from '../../utils/tree'

export default function GenreDialog({ close, confirm, data, parents, open = false, isAdd = false }) {
  const emptyData = useMemo(() => ({
    id: '',
    name: '',
    parent: ''
  }),[])
  const [form, setForm] = useState(emptyData)
  useEffect(() => {
    if (isAdd) {
      setForm(emptyData)
      return
    }
    setForm(data || emptyData)
  },[isAdd, data, emptyData, open])

  const [parentOptions, setParentOptions] = useState(parents)
  useEffect(() => {
    if (open) {
      setParentOptions(getListNotChildren(parents, data?.id))
    }
  }, [parents, data, open])

  const handleChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div>
      <Dialog open={open} onClose={close}>
        <DialogTitle>{isAdd ? '新建体裁' : '修改体裁'}</DialogTitle>
        <DialogContent>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            sx={{ padding: '20px', maxWidth: '300px' }}
          >
            <TextField
              required
              fullWidth
              name="name"
              label="体裁名"
              value={form.name}
              placeholder='请输入'
              size='small'
              onChange={handleChange}
            />
            <TextField
              select
              fullWidth
              name="parent"
              label="父体裁"
              value={form.parent}
              size='small'
              onChange={handleChange}
            >
              {parentOptions.map(({ id, name }) => 
                <MenuItem key={id} value={id}>{name}</MenuItem>
              )}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>取消</Button>
          <Button onClick={() => confirm(form)}>确定</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
