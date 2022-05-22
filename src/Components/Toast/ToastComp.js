import { Toast} from 'react-bootstrap';
function ToastComp(props){
    return(
        <Toast position="top-end" onClose={props.onClose} show={props.show} delay={3000} autohide >
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Success Toast</strong>
            
        </Toast.Header>
        <Toast.Body>Medicne name <b>{props.text}</b> Successfully added to cart </Toast.Body>
        </Toast>
    )
}
export default ToastComp