import { useState } from "react"

export const RegistrationForm = ()=>{
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        mobileNumber:"",
        city:"",
    });

    const [data, setData] = useState("");

    const handleFormInput = (e)=>{
        // console.log(e.target);
        const {name,value} = e.target;
        // console.log(name,value);
        setFormData((prev)=> ({...prev,[name]:value}));
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const  a = Object.fromEntries(formData.entries());
        setData(a);
        console.log(data);
    }
    return (
        <div className="container">
            <div>
                <h1>Registration Form</h1>
            </div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">FirstName</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={(e)=> handleFormInput(e)} placeholder="Enter Your Name" />
                <br />
                <label htmlFor="">LastName</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={(e)=> handleFormInput(e)} placeholder="Enter Your LastName" />
                <br />
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={formData.email} onChange={(e)=> handleFormInput(e)} placeholder="example@gmail.com" />
                <br />
                <label htmlFor="">Mobile</label>
                <input type="text" name="mobileNumber" onChange={(e)=> handleFormInput(e)} value={formData.mobileNumber} />
                <br />
                <label htmlFor="">CityName</label>
                <select name="city" id="" onChange={(e)=> handleFormInput(e)}>
                    <option value="">Select City Name</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Baroda">Baroda</option>
                    <option value="Surat">Surat</option>
                </select>
                <br />
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
    )

}