import "../assets/styling.css"
import ExpenseItem from "./ExpenseItem";
import ExpenseAmount from "../constant/mockdata";
import { useEffect, useState } from "react";
import Expenseform from "./Expenseform";

const Body = () => {

    const [income,setIncome] = useState(0);
    const [expenses,setExpenses] = useState(0);
    const [list , setList] = useState(ExpenseAmount);
    const [editId , setEditId] = useState(null);
    // const [reload , setReload] = useState(false);
    
    const deleteItem = (id) => {
        const newList = list.filter( (item) => {
            return item.id !== id;
        })
        setList(newList);
    }

    useEffect( () => {
        var inc = 0;
        var exp = 0;

        list.forEach( (i) => {
            if (i.amount > 0) {
                inc = i.amount + inc;
            }
            else{
                exp = i.amount + exp;
            }
        })
        setIncome(inc);
        setExpenses(exp);
    },[list]);
    // setReload(false);
    const itemToEdit = list.find( (item) => item.id === editId )
    console.log(itemToEdit + " jilla ")

    return (
        <div className="main">
            <div className="main-first">
                <div> <h1> Expense Tracker</h1> </div>
                    <div className='income-expense-container'>
                        <div className='income'>
                            <h3> Income</h3>
                            <div> {income} </div>
                        </div>
                    <div className='expense'>
                        <h3> Expense</h3>
                        <div> {expenses}</div>
                    </div>
                    </div>
                    
            </div>

            <div>

                <Expenseform  arr = {list} setarr = {setList} itemToEdit = {itemToEdit} editId = {editId}
                />
            </div>

            <div className="main-second">
                <div>
                    <h3> History</h3>
                </div>
                {
                    list.map( (item) => {
                        return (
                            <ExpenseItem key = {item.id} id = {item.id} name = {item.name}
                             amount = {item.amount} deleting = {deleteItem} editId = {setEditId} />
                        )   
                    })
                }
            </div>
        </div>
    )
}


export default Body;
