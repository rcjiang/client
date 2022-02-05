import { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
}

function LazyElement ({ load }) {
  const Lazy = lazy(load)
  return (
    <Suspense fallback={<CircularIndeterminate />}>
      <Lazy />
    </Suspense>
  )
}

const routes = [
  {
    index: true,
    element: <Navigate to="/genre" replace={true} />
  },
  {
    path: '/entity',
    element: <LazyElement load={() => import('../component/class/ClassMgt')} />,
    children: [
      {
        path: ':entityId',
        children: [
          {
            index: true,
            element: <LazyElement load={() => import('../component/fields/Fields')} />
          },
          {
            path: ':fieldId',
            element: <LazyElement load={() => import('../component/fields/Field')} />
          }
        ]
      }
    ]
  },
  {
    path: '/contents',
    element: <LazyElement load={() => import('../component/content/ContentMgt')} />,
    children:[
      {
        index: true,
        element: <LazyElement load={() => import('../component/content/Contents')} />
      },
      {
        path: 'detail',
        elment: <LazyElement load={() => import('../component/content/Content')} />
      }
    ]
  },
  {
    path: '/genre',
    element: <LazyElement load={() => import('../view/genre/GenreEditor')} />
  }
]

export default function Routes () {
  return useRoutes(routes)
}
