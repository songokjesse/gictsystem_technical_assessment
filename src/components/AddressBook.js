import {useState, useEffect} from 'react';
import axios from 'axios';

const AddressBook = () => {
    // get token and API urls from .env      file
    let baseUrl = process.env.REACT_APP_GET_BASEURL
    let token = process.env.REACT_APP_TOKEN
   
    const [address, setAddress] = useState([]);
    const fetchAddress = async () => {
        const response = await axios.get(baseUrl,  {headers: { 
        'Authorization': `Bearer ${token}` }})
        setAddress(response.data);
    }

    useEffect(()=> {
        let interval = setInterval(() => {
        fetchAddress();
        }, 10000);
        return () => {
            clearInterval(interval)
        }
})
console.log(address)
    return (
    <>
    <h1>Address List</h1>
    <table className='table table-striped bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Message</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {address.map(items => (
                <tr>
                <td>{items.ID}</td>
                <td>{items.Message}</td>
                <td>{items.Age}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
    )
}

export default AddressBook;