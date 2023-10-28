import axios from "axios";
import { useState } from "react";


    const SignUp = () => {

        let [signUpObj,setSignupObj] = useState({name:'',email:'',password:''});
        let [signUpStatus, setSignUpStatus] = useState(false);
        let [dupeUserMsg,setDupUserMsg] = useState('inital');


        let changeHandler = (e) => {
            setSignupObj({...signUpObj,[e.target.name]:e.target.value});
            //console.log(signUpObj);            
        }

        let clickHandler = async (e) =>{
            e.preventDefault();
            console.log(signUpObj);
            /*
            try{ 
            let resp = await axios.post('http://localhost:3002/signup',{...signUpObj});
            console.log("response status is "+resp.status);
            let data = await resp.data;
            console.log(data); // checking
            // can check mongodb Atlas to see if user has been added
            // can login and check to see if I am able to login fine
           
            // on successful sign up , set a flag to true
            if(data) {
                setSignUpStatus(true);
                setDupUserMsg('data');
                console.log(dupeUserMsg);
            }
            else {
                setSignUpStatus(false);
                setDupUserMsg(" Sorry,a user with that email is already registered");
                console.log('error');
                console.log(dupeUserMsg);
            }
            if (! resp.ok) {
                setSignUpStatus(false);
                setDupUserMsg(" Sorry,a user with that email is already registered");
                console.log('error');
                console.log(dupeUserMsg);
            }

            }
            catch(e) {
                setSignUpStatus(false);
                setDupUserMsg(" Sorry,a user with that email is already registered");
                console.log('could not signup/store-user');
                console.log(e);
                console.log(dupeUserMsg);
            }
            */

            //old code
            try {
                //console.log({...contactInfo});
                const response = await axios.post(process.env.REACT_APP_BACKEND_BASE_URL+'signup',{...signUpObj});
              
                console.log(response);
                let data = response.data;
                console.log(data);        
                console.log("from signup response ");  
                setSignUpStatus(true);   
            } 
            catch (error) {
                console.error('Login failed:', error);                 
                setSignUpStatus(false);
                setDupUserMsg(" Sorry,a user with that email is already registered");
                
            }


        }


        if( !signUpStatus) { 
        return (
            <> 
            <h2> {dupeUserMsg}  </h2>
            <div className='row'>
                <div className="col-sm-6 offset-3">
                
                <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" onChange={(e) => changeHandler(e)} id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="email" name="email" onChange={(e) => changeHandler(e)} id="email" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="text" name="password" onChange={(e) => changeHandler(e)} id="password" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <button type="submit" onClick={(e) => clickHandler(e)}  className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
            </>
        );
        }
        else {
           return (<div className='row mb-4'>
                <div className="col-sm-6 offset-3">
               <h4>  Congratulations {signUpObj.name}! You are now registered with 
                RealGrande! <br/>
                Go Ahead and Login!
    
                </h4>
                </div>
            </div>);
        }
    }
   
    export default SignUp;
