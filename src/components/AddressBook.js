import {useState, useEffect} from 'react';
import axios from 'axios';

const AddressBook = () => {
    const config = {
        mode: 'cors',
    headers: { 
        'Authorization': `Bearer ALDJAK23423JKSLAJAF23423J23SAD3`,
        'Content-type' : 'application/json',
        "Access-Control-Allow-Origin": "*"
 }
};
    const [address, setAddress] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchAddress = async () => {
        const response = await axios('https://developers.gictsystems.com/api/dummy/items/', config)
        // const response = await axios('https://jsonplaceholder.typicode.com/users')
                console.log(response.data)

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
        {/* <thead>
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
        </tbody> */}

         <thead>
    
                  <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
          
        </thead>
        <tbody>
             {address.map(post => (
                <tr>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.email}</td>
                </tr>
              ))}
        </tbody>
    </table>
    </>
    )
}

export default AddressBook;