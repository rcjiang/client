import { useParams } from "react-router-dom"

function Field () {
  const { fieldId } = useParams()
  return (
    <div>{`Field ${fieldId}`}</div>
  )
}

export default Field
