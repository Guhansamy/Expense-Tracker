import "../assets/styling.css"
import ExpenseAmount from "../constant/mockdata"

const ExpenseItem = (props) => {

    const handleDelete = () => {
        console.log(props.id)
        props.deleting(props.id)
    }

    const handleEdit = () => {
        props.editId(props.id)
    }
    
    return (
        <div className="Expense-Items">
                <div className= {`${props.amount > 0 ? "history-positive" : "history-negative"}`}>
                    <span> {props.name}</span>
                    <span> {props.amount}</span>
                </div>
                    <button onClick={handleDelete} className="del-button">Delete</button>
                    <button onClick={handleEdit} className="del-button">Edit</button>
                
        </div>
    )
}
export default ExpenseItem;