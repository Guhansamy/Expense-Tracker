import "../assets/styling.css"
import { useEffect, useState } from "react";

const Expenseform = (props) => {

    const {arr,setarr,itemToEdit,editId} = props;

    const [amount , setAmount] = useState("");
    const [description, setDescription] = useState("");
    
    const isEdit = itemToEdit !== undefined;
    console.log(isEdit)

    useEffect ( () => {
        setAmount(itemToEdit?.amount || "")
        setDescription(itemToEdit?.description || "")
    },[])

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount((event.target.value));
    };

    const addItemToList = () => {
        if (description && amount) {
            const newItem = {
                id: Math.random().toString(36),
                name: description,
                amount: parseInt(amount),
            };
            setarr([...arr, newItem]);
            setDescription("");
            setAmount("");
        }
    };

    console.log("itemToEdit == " + editId)

    const editItems = () => {
        if (description && amount) {

            const newItem = arr.map( (item) => {
                if (item.id === editId){
                    item.id = itemToEdit,
                    item.name = description,
                    item.amount = parseInt(amount)
                }
                return item;
            })
            setarr[newItem];
            console.log("button clicked")
            
        }
        
    }

    
    console.log(arr);
    
    return (
        <div className="input-box">
            <h2> 
                    {isEdit ? "Edit Data" : "New Input Data"}
            </h2>
            <div className="inp-fir">
                    
                    <div className="des-box">
                        Description
                        <input type="text" className="t-inp"  value={description}
                            onChange={handleDescriptionChange} placeholder="title"/>
                    </div>
                    <div className="amnt-box">
                        Amount
                        <input type="text" className="a-inp"  value={amount}
                            onChange={handleAmountChange} placeholder="Amount" />
                    </div>
                    <button onClick={isEdit ? editItems : addItemToList} > {isEdit ? "SAVE" : "ADD"} </button>
                </div>
        </div>
    )
}

export default Expenseform;