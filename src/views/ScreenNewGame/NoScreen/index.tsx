import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NoScreen = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/novojogo')
    }, [])
    return <div></div>
}

export default NoScreen