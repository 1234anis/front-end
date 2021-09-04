import React from 'react'
import { NavLink,useHistory } from 'react-router-dom'
function Signup() {

    const history=useHistory();
    const [user, setUser] = React.useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

      let name,value;
    const handleInput=(e)=>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})
    }

    const postData= async(e)=>{
   e.preventDefault();
   const{name,email,phone,work,password,cpassword }=user;
 const res= await fetch("/register", {  
     method:"POST",
     headers:{
         "Content-Type" :"application/json"
     },
     body:JSON.stringify({
        name,email,phone,work,password,cpassword
     })

 })
  const data=await res.json();
  if(res.status===422  || !data){
      window.alert("Invalid registration");
      console.log("Invalid registration")
  }else{  window.alert("success registration");
  console.log("success registration");
   history.push("/login");
  }
    }
    return (
        <>
            <div className="signup-form">
                <form method="POST"  method="post" />
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="name" placeholder="Username" 
                        required="required"  value={user.name}  onChange={handleInput}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" className="form-control" name="email" placeholder="Email Address"
                        required="required"  value={user.email}  onChange={handleInput}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <input type="number" className="form-control" name="phone" placeholder="Phone Number"
                         required="required" value={user.phone}  onChange={handleInput} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="work" placeholder="Your Profession"
                         required="required" value={user.work}  onChange={handleInput} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="password" placeholder="Password"
                         required="required" value={user.password}  onChange={handleInput}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="cpassword"
                         placeholder="Confirm Password" required="required" value={user.cpassword}  
                         onChange={handleInput}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> 
                    I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" onClick={postData}>Sign Up</button>
                </div>

                <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

            </div>

        </>
    )
}

export default Signup;
