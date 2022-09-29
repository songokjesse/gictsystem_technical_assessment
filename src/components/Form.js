import React from 'react';

import { useForm } from 'react-hook-form';

const Form = () => {
    const { register,handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
    console.log(data);
  };

    return (
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
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
    
        </form>
    )
}
export default Form;