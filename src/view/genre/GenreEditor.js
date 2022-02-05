import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import CatalogTree from '../../component/catalog/CatalogTree'
import * as genreApi from '../../apis/genre'
import GenreDialog from './GenreDialog'

export default function CatalogEditor () {
  const [id, setId] = useState('')
  const [genre, setGenre] = useState(null)
  const [genres, setGenres] = useState([])
  const [open, setOpen] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const treeConfig = {
    selected: id,
    onNodeSelect: (event, value) => {
      setId(value)
    }
  }

  const query = () => {
    genreApi.getGenres().then(data => {
      setGenres(data)
    })
  }

  const save = data => {
    if (!data?.name) {
      console.error('体裁名不能为空!')
      return
    }
    return genreApi.addGenare(data).then(() => {
      setOpen(false)
    })
  }

  const handleAdd = () => {
    setIsAdd(true)
    setOpen(true)
  }

  const handleEdit = () => {
    setIsAdd(false)
    setOpen(true)
  }

  const handleDel = () => {
    genreApi.delGenare(id).then(() => {

    })
  }

  useEffect(() => query(), [])
  useEffect(() => {
    setGenre(genres.find(item => item.id === id))
  }, [id, genres])

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 1 }}>
        <Button size="small" onClick={handleAdd}>新建</Button>
        <Button size="small" onClick={handleEdit}>编辑</Button>
        <Button size="small" color="error" onClick={handleDel} >删除</Button>
      </Box>
      <CatalogTree
        config={treeConfig}
        nodes={genres}
      />
      <GenreDialog
        open={open}
        isAdd={isAdd}
        close={() => setOpen(false)}
        confirm={save}
        data={genre}
        parents={genres}
      />
    </Box>
  )
}
