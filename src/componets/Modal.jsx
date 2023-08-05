import goodChecker from '../assets/Screenshot_20230804-183029_1.png'
import '../componets/Modal.css'
import { useNavigate } from 'react-router-dom'
const Modal = () => {
    const navigate = useNavigate()
    const closeModal = () => {
        navigate("/")
    }
    return(
        <div className="Modal-container">
            <img src={goodChecker} alt=""  className='img'/>
            <h5 className='modal-text'>You will be notified when your vote has been counted</h5>
            <div className='buttons-container'><button onClick={closeModal} className='button'>ok</button></div>
        </div>
    )
}
export default Modal