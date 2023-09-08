import React, { useState } from "react";
import "./index.css";
import {
  Typography,
  TextField,
  Checkbox,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { createTheme } from "@mui/material";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import Radio from '@mui/material/Radio';



const useStyles = createTheme((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personnel Details",
    "Educational Details",
    "Internship Interested Field",
    "Internship Option",
    "References",
    "Submission"
  ];
}
const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>
    <div className='third'>
          <h2 style={{ margin: "1rem" }}>--* Personnal Details *-- </h2>
        </div>
        <div className='fourth'>
        <label htmlFor='name' className='required' ><br /><br /><br /><hr/><br />
              Name
            </label><br />
           
      <Controller
        control={control}
        name="firstName"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            type="text"
            autoComplete="off"
            variant="standard"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />
        {/* <Controller
        name="MyCheckbox"
        control={control}
        rules={{ required:"this field is required." }}
        render={({ field }) =>(
         <Radio 
        id="radio"
        margin="normal"
        type="radio"
        {...field} 
        error={Boolean(errors?.MyCheckbox)}
            helperText={errors.MyCheckbox?.message}
        />)}
      /> */}



      <Controller
        control={control}
        name="lastName"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="standard"
            type="text"
            autoComplete="off"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />
<label htmlFor='Contact Number' className='required' ><br />
              Contact Number
            </label><br />
      <Controller
        control={control}
        name="ContactNumber"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="Contact-Number"
            label=""
            variant="standard"
            type="number"
            placeholder="Enter Your Contact Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.ContactNumber)}
            helperText={errors.ContactNumber?.message}
          />
        )}
      />

<label htmlFor='Email' className='required' ><br />
              Email
            </label><br />
<Controller
        control={control}
        name="Email"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="Email"
            label=""
            variant="standard"
            placeholder="Enter Your Email"
            autoComplete="off"
            type="email"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.Email)}
            helperText={errors.Email?.message}
          />
        )}
      />

<label htmlFor='Whatsapp' className='required' ><br />
              Whatsapp
            </label><br />
      
<Controller
        control={control}
        name="Whatsapp"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="Whatsapp"
            label=""
            variant="standard"
            type="number"
            placeholder="Enter Your Whatsapp Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.Whatsapp)}
            helperText={errors.Whatsapp?.message}
          />
        )}
      />

      
      <label htmlFor='Country' className='required' ><br />
              Country
            </label><br />
<Controller
        control={control}
        name="Country"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="Country"
            label=""
            type="text"
            autoComplete="off"
            variant="standard"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.Country)}
            helperText={errors.Country?.message}
          />
        )}
      />

      
      <label htmlFor='City' className='required' ><br />
              City
            </label><br />
<Controller
        control={control}
        name="City"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="City"
            label=""
            variant="standard"
            type="text"
            autoComplete="off"
            placeholder="Enter Your City Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.City)}
            helperText={errors.City?.message}
          />
        )}
      />
      </div>
    </>
  );
};
const ContactForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>
       <div className='fourth'>
       <label htmlFor='Current Degree & Branch ' className='required' ><br />
                            Current Degree & Branch
                        </label><br />
       <Controller
        control={control}
        name="Current"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="Current Degree & Branch"
            label=""
            type="text"
            autoComplete="off"
            variant="standard"
            placeholder="Enter Your Current Degree & Branch"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.Current)}
            helperText={errors.Current?.message}
          />
        )}
      />

<label htmlFor='Passed Out ' className='required' ><br /><br />
                            Passed Out
                        </label><br />
<Controller
        control={control}
        name="Passed"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="Passed Out"
            label=""
            variant="standard"
            type="number"
            placeholder="Enter Your Passed Out Year"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.Passed)}
            helperText={errors.Passed?.message}
          />
        )}
      />
      </div>
    </>
  );
};
const PersonalForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>



      
      {/* <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >


        <FormControlLabel 
        value="female" 
        control={<Radio />} 
        label="Female" 
        name="Gender"
        rules={{ required: "this field is required." }}
        render={({ Radio }) => (
          <Radio
          id="Female"
          label="Female"
          margin="normal"
          {...Radio}
            error={Boolean(errors?.Gender)}
            helperText={errors.Gender?.message}
 />
        )}
        />
        <FormControlLabel 
        value="male" 
        control={<Radio />} 
        label="male" 
        name="Gender"
        rules={{ required: "this field is required." }}
        render={({ Radio }) => (
          <Radio
          id="male"
          label="male"
          margin="male"
          {...Radio}
            error={Boolean(errors?.Gender)}
            helperText={errors.Gender?.message}
 />
        )}
        />
        <FormControlLabel 
        value="other" 
        control={<Radio />} 
        label="other" 
        name="Gender"
        rules={{ required: "this field is required." }}
        render={({ Radio }) => (
          <Radio
          id="other"
          label="other"
          margin="normal"
          {...Radio}
            error={Boolean(errors?.Gender)}
            helperText={errors.Gender?.message}
 />
        )}
        />


        
        {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      {/* </RadioGroup>
    {/* </FormControl> */}
    
      <div className=' a'>
                            <label htmlFor='Internship Looking For' className='required'><br />
                                Internship Looking For
                            </label><br />

                            <div >
                                <label htmlFor='.Net MVC' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='.Net MVC' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    .Net MVC
                                </label>


                                <label htmlFor='Angular'  > <input type='radio' autoComplete='off' name='Internship Looking For' value='Angular' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Angular
                                </label>


                                <label htmlFor='BBA/MBA' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='BBA/MBA' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    BBA/MBA
                                </label><br />


                                <label htmlFor='Business Development' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Business Development' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Business Development
                                </label>


                                <label htmlFor='Digital Marketing' style={{ margin: "1rem" }}><input type='radio' autoComplete='off' name='Internship Looking For' value='Digital Marketing' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Digital Marketing
                                </label>


                                <label htmlFor='Finance' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Finance' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Finance
                                </label><br />


                                <label htmlFor='Flutter/Android/Ios' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Flutter/Android/Ios' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Flutter/Android/Ios
                                </label>


                                <label htmlFor='HR' className='aa'><input type='radio' autoComplete='off' name='Internship Looking For' value='HR' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    HR
                                </label>


                                <label htmlFor='Hardware' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Hardware' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Hardware
                                </label><br />


                                <label htmlFor='Html UI' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Html UI' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Html UI
                                </label>


                                <label htmlFor='IOT' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='IOT' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    IOT
                                </label>


                                <label htmlFor='Java' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Java' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Java
                                </label><br />
                                <label htmlFor='Laravel' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Laravel' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Laravel
                                </label>


                                <label htmlFor='Legal / Law Firm' className='a'>  <input type='radio' autoComplete='off' name='Internship Looking For' value='Legal / Law Firm' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Legal / Law Firm
                                </label>


                                <label htmlFor='Marketing' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Marketing' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Marketing
                                </label><br />


                                <label htmlFor='Networking' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Networking' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Networking
                                </label>


                                <label htmlFor='Photoshop' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Photoshop' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Photoshop
                                </label>


                                <label htmlFor='Php' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Php' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Php
                                </label><br />


                                <label htmlFor='Project Manager' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Project Manager' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Project Manager
                                </label>


                                <label htmlFor='Python' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Python' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Python
                                </label>


                                <label htmlFor='React ' className='a'> <input type='radio' autoComplete='off' name='Internship Looking For' value='React' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    React
                                </label><br />


                                <label htmlFor='SQL-Pl/Sql Oracle/MsSql' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='SQL-Pl/Sql Oracle/MsSql' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    SQL-Pl/Sql Oracle/MsSql
                                </label>


                                <label htmlFor='Sales' className='a'> <input type='radio' autoComplete='off' name='Internship Looking For' value='Sales' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Sales
                                </label>


                                <label htmlFor='Software Development' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='React' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Software Development
                                </label><br />


                                <label htmlFor='Testing' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Testing' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Testing
                                </label>


                                <label htmlFor='UI Designer(Figma,etc)' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='UI Designer(Figma,etc)' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    UI Designer(Figma,etc)
                                </label>


                                <label htmlFor='Web Development ' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Web Development' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Web Development
                                </label><br />

                                <label htmlFor='Other ' > <input type='radio' autoComplete='off' name='Internship Looking For' value='' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Other
                                </label>

                            </div>
                            
                            <Controller
        control={control}
        name="other"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="other"
            label=""
            variant="standard"
            type="text"
            autoComplete="off"
            placeholder="other"
            margin="normal"
            {...field}
            error={Boolean(errors?.other)}
            helperText={errors.other?.message}
          />
        )}
      />
      

                            <br />
                            <br />

                            <br />
                            <div>
                                <h1>Knowledge Requirement</h1>
                            </div><br /><hr /><br />
                            <div>
                                <p>
                                    You are comfortable working on Real-time Tasks from Day on the Above chosen Option,as we don't give training or coaching like a training institute or coaching center.
                                </p>
                            </div>
                            <br /><br /><br />
                        </div>

      

      
      
    </>
  );
};
const PaymentForm = () => {
  const [visible, setvisible] = useState(true)
    const [ivisible, getvisible] = useState(true)
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>

<br />
                        <br />
<p>Please Read The Complete Details below and Choosse your option</p>
<br />
                      

                        <div>
                            <ul><h5>Option 1: Only Certificate</h5><br />
                                <li> We Would issue you an Internship offer letter, completion letter on company letterhead, corporate email id, linkedIn profile tagging & Recommendation.</li>
                                <li>Still, you can work on a project but we won't expect a 100% output from you.</li>
                                <li>Enrollment Charges Applicable: 1500Inp or 30USD/-for Up to 6 Months Intern Date. </li>
                                <li>
                                    Like Training Institute or coaching center we don't give any project report or documentation on any project, if you create we will review and provide recommendation for correction's and fixed
                                </li>
                            </ul><br />
                            </div>

                        {/* 4 */}
                        <ul><h5>Option 2: if you want to do the project work for KGE Technologies for real-time projects for free, <u>lets see how this works.</u></h5><br />
                            <li>
                                we will mail you an offer of internship via email for a minimum of 1-6 months,based on your needs.
                            </li>
                            <l1>
                                Regularly work on assigned work and give 100% output.
                            </l1>
                            <li>
                                Office Timing Mon-Sat on your time zone, attendance mandatory with min 4hrs per day, you need to login to the tool in your desktop/laptop to track the same.Allowed to leave during exams.
                            </li>
                            <li>
                                You need to have desktop or laptop to work on project,we don't give machines or any account to use for cloud project.
                            </li>
                            <li>
                                Once completed the project work with at least 90% output- we would give Internship Offer and completion Letter,LinkedIn profile tagging with Company.
                            </li>
                            <li>
                                Stipend: Nil during an internship, one time incentive based on output at last if contribution is excellent and min 90% output is given.
                            </li>
                            <li>
                                <u>For Time passers this is not suitable option,</u> we need candidate to be dedicated to work on assigned task by contributing min 4hrs per day.
                            </li>
                            <li>
                                Like Training Institute or coaching  center we don't give any project report or documentation on any project, if you create we will review and provide recommendation for correction's and fixed.
                            </li>
                        </ul><br /><br />
                        {/* 5 */}
                        
                        <p className="required">What Option you want to Choose After Reading Above Program</p>
                        <br />
                        {/* 6 */}
                        <input type='radio' autoComplete='off' name='Internship Looking For' value='Option 1' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />Option 1
                        <br />
                        <input type='radio' autoComplete='off' name='Internship Looking For' value='Option 2' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} onClick={() => getvisible(false)} />Option 2
                        <br />
                        <br />
                        <hr /><br />
                        {/* 7 */}
                        <h1>Internship Availability for UI Designer (Figma,etc)</h1><br /><hr />
                        {/* 8 */}
                        <br />
                        <p>Sometimes Internship will not be available in Option 2,HR Team will update you on the same during evaluating your form</p>
                        <br />
                        {visible ||
                            <div>

                                <h2> <p className="required">Internship Duration</p><br /></h2>
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='1 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />1 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='2 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />2 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='3 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />3 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='4 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />4 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='5 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />5 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='6 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />6 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='Other' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />Other
                                <br /><br />
                                <input type="text" />
                                <br /><br />
                            </div>
                        }
                        {ivisible ||
                            <div>
                                <input type='checkbox' autoComplete='off' name='Internship Looking For' value='Option 2' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} /> I read above all details and I know <br />
                                <ol>
                                    <li> There is no salary or Stipend paid</li>
                                    <li> I Contribute to real time project work</li>
                                    <li> I will work and report all task on Time </li>
                                    <li> Not working or joining post Offer or Absconding will lead to report to Nasscomm as Absconded case by Company</li>
                                </ol><br />
                                <p> I Agree to it When I Choose option 2</p>
                                <br /><br />
                                <div>

                                    <h2><p className="required">Internship Duration</p><br /></h2>
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='1 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />1 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='2 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />2 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='3 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />3 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='4 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />4 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='5 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />5 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='6 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />6 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='Other' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />Other
                                    <br /><br />
                                    <input type="text" />
                                    <br /><br />
                                </div>
                            </div>

                        }
<br/>





                        <label htmlFor=' ' className='required' >Tentative Internship Start Date
                        </label><br /><br />
                        <TextField
                            autoComplete="off"
                            placeholder=""
                            name=""
                            id=""
                            label=""
                            variant="filled"
                            // fullWidth
                            type="date"
                            required
                        />
                        <br />
                        <br />
                        <br />
                        <p className="required">
                            Do you Have Laptop/Desktop with Internet connectivity to work
                        </p>
                        <br />
                        <input type='radio' autoComplete='off' name='Internship Looking For' value='Yes' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />Yes
                        <br />
                        <input type='radio' autoComplete='off' name='Internship Looking For' value='No' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />No
                        <br />
                        <br />
                        <br />
                        


      
      
      
    </>
  );
};

const Refer = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>
     <div className='fourth' >
    <label htmlFor='' style={{color:"black"}} ><br /><br />
                            <p className="required" style={{color:"black"}}> How You Know about the Internship in KGE Technologies Pvt Ltd</p>
                        </label><br />
                        
       <Controller
        control={control}
        name="Refer"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="Refer"
            label=""
            variant="standard"
            type="text"
            autoComplete="off"
            placeholder="How You Know about the internship in KGE Technologies Pvt Ltd"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.Refer)}
            helperText={errors.Refer?.message}

            
          />
          
        )}
        
      />
      </div>
      
                        {/* <input type="text"
                            
                           />
                           <br/><br/><br/>
                           <hr/><br/> */}
                        {/* 2 */}
                        <div className='fourth'>
                        <h2> Refer Your Circle </h2><br /><hr />
                        {/* 3 */}

                        <label htmlFor='' className='' ><br /><br />
                            <p className="required"> Please do provide their Email Address Or Mobile Number, each line 1 Contact</p>
                        </label><br />
                        <br/>
                        <hr/>
                        <br/>
                        </div>
                        
    </>
     );
    };

    const Sub = () => {
      const {
        control,
        formState: { errors },
      } = useFormContext();
      console.log(errors);
      return (
        <>
            <br/><p className="required">Terms and Conditions</p>
                        <br />

                        {/* 2 */}
                        <div className="p">
                            <p style={{ margin: "1rem" }}>  I Agree, KGE Technology Pvt Ltd to contact me via Email,Call,SMS,Whatsapp to discuss on my Form Submission for Internship<br /><br /><br /><br /></p>
                        </div>
                        {/* 3 */}
                        <br />
                        <input type='checkbox' autoComplete='off' name='Internship Looking For' value='I accept the terms and Conditions.' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />I accept the terms and Conditions.
                        <br />

                        <label htmlFor='Recaptcha' className='' ><br />
                            <p className="required">Recaptcha</p>
                        </label>
                        
                        <Controller
        control={control}
        name="Recaptcha"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="Recaptcha"
            label=""
            variant="filled"
            autoComplete="off"
            placeholder="To Block Bot Form Submission"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.Recaptcha)}
            helperText={errors.Recaptcha?.message}

            
          />
          
        )}
        
      />


        </>
     );
    };


function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
      case 4:
        return <Refer />;
        case 5:
          return<Sub/>;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  // const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
               
              </Typography>
            );
          }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                // className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
               
              >
                back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )} */}
              <Button
                // className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
                style={{float:"right"}}
                
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;