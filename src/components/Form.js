import React, {useState} from 'react';
import axios from 'axios';

import { useForm } from 'react-hook-form';

const Form = () => {
    let baseUrl = process.env.REACT_APP_POST_BASEURL

    const [successfull, setSuccesfull] = useState('false')
    const { register,handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
    console.log(data);
    axios.post(baseUrl, {
      body: JSON.stringify({
            'fullname': data.fullname,
            'email': data.email,
            'phone': data.phone,
            'address': data.address
        })
    }).then(response => console.log(response ));
        setSuccesfull('true')
  };


 

    return (
        <>
        {successfull === 'true'?<p className='mb-2 alert alert-success'> Address Form Submited Successfully</p>:''}
    
        <form  onSubmit={handleSubmit(onSubmit)}>
           
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                    type="text" 
                    name="fullname" 
                    className="form-control mb-2" 
                    {...register(
                    'fullname',
                    {
                    required: "Name is required" 
                    })}
          />
          {errors.fullname && <p className="alert alert-danger">{errors.fullname.message}</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                    type="email" 
                    name="email" 
                     className="form-control mb-2" 
                    {...register(
                    'email',
                    {
                    required: "Email is required",
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Email is not valid.'
                    }
                    })}
          />
          {errors.email && <p className="alert alert-danger">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input 
                    type="text" 
                    name="phone" 
                    className="form-control mb-2" 
                    {...register(
                    'phone',
                    {
                    required: "Phone Number is required" 
                    })}
          />
          {errors.phone && <p className="alert alert-danger">{errors.phone.message}</p>}
                </div>
                <div className=" mb-3">
                    <label className="form-label">Address</label>
                    <input 
                    type="text" 
                    name="address" 
                    className="form-control mb-2" 
                    {...register(
                    'address',
                    {
                    required: "Address is required" 
                    })}
          />
          {errors.address && <p className="alert alert-danger">{errors.address.message}</p>}
                </div>
            
                <div className="">
                    <button type="submit" className="btn btn-primary">Save</button> &nbsp;
                     <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>

                </div>
    
        </form>
        </>
    )
}
export default Form;