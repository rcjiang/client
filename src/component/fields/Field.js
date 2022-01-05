import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { createAbort } from '../../apis/myFetch'
import { getField } from '../../apis/field'

const valueTypes = [
  {
    value: 'string',
    label: 'string'
  },
  {
    value: 'int',
    label: 'int'
  },
  {
    value: 'date',
    label: 'date'
  }
]

const sourceTypes = [
  {
    value: 'input',
    label: 'input'
  },
  {
    value: 'collect',
    label: 'collect'
  },
  {
    value: 'key-value',
    label: 'key-value'
  },
  {
    value: 'table',
    label: 'date'
  }
]

function Field () {
  const { fieldId } = useParams()
  const [field, setField] = useState({
    id: 0,
    fieldName: '',
    valueType: '',
    sourceType: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const data = {
      ...field,
      [name]: value
    }
    setField(data)
  }

  useEffect(() => {
    if (!fieldId) return
    const [abort, init] = createAbort()
    getField(fieldId, init).then(data => {
      setField(data)
    })
    return abort
  }, [fieldId])

  return (
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
        name="fieldName"
        label="Field Name"
        value={field.fieldName}
        placeholder='请输入'
        size='small'
        onChange={handleChange}
      />
      <TextField
        select
        fullWidth
        name="valueType"
        label="Value Type"
        defaultValue='string'
        value={field.valueType}
        size='small'
        onChange={handleChange}
      >
        {valueTypes.map(({ value, label }) => 
          <MenuItem key={value} value={value}>{label}</MenuItem>
        )}
      </TextField>
      <TextField
        select
        fullWidth
        name="sourceType"
        label="Source Type"
        value={field.sourceType}
        size='small'
        onChange={handleChange}
      >
        {sourceTypes.map(({ value, label }) => 
          <MenuItem key={value} value={value}>{label}</MenuItem>
        )}
      </TextField>
    </Stack>
  )
}

export default Field
