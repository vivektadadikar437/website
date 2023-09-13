import React, { useState } from "react";
import "./index.css";
import Stack from '@mui/material/Stack';
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import {
  Select,
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
    // "Personnel Details",
    // "Educational Details",
    // "Internship Interested Field",
    // "Internship Option",
    // "References",
    // "Submission"
    "",
    "",
    "",
    "",
    "",
    ""
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
          <h1 style={{margin:"2rem",}}><mark style={{border:"5px solid deepskyblue", borderRadius:"125rem",margin:"1rem",padding:"1rem"}}>--*Personnal Details*--</mark></h1>
        </div>
        <div className='fourth'>
        <label htmlFor='name' className='required' >
              Name
            </label>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
       
        
      <Controller
        control={control}
        name="firstName"
        rules={{ required: "Enter Your First Name.", maxLength: 12,minLength:3}}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            type="text"
            autoComplete="off"
            // autoFocus="true"
            variant="standard"
            placeholder=""
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

        



      <Controller
        control={control}
        name="lastName"
        rules={{ required: "Enter Your Last Name.", maxLength: 20,minLength:3 }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="standard"
            type="text"
            autoComplete="off"
            placeholder=""
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />
      </Stack>

      {/* <Controller
        control={control}
        name="lastName"
        rules={{ required: "Enter Your Last Name.", maxLength: 20,minLength:3,required:true }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="male"
            type="radio"
            autoComplete="off"
            placeholder=""
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      /> */}
      {/* <Controller
        name="Radio"
        control={control}
        rules={{ required:"this field is required." }}
        render={({ field }) =>(
         <Radio 
        id="radio"
        margin="normal"
        
        {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      /> */}

<label htmlFor='Contact Number' className='required' ><br />
              Contact Number
            </label><br />
      <Controller
        control={control}
        name="ContactNumber"
        rules={{ required: "Enter Your Contact Number.", maxLength: 12 ,minLength:1,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}"}}
        render={({ field }) => (
          <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
        rules={{ required: "Enter Your Email. name.@domain.com",pattern:"[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$.com"}}
        render={({ field }) => (
          <TextField
            inputProps={{ inputMode: 'Email', pattern: '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$' }}
            id="Email"
            label=""
            variant="standard"
            placeholder="Enter Your Email"
            autoComplete="off"
            type="Email"
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
        rules={{ required: "Enter Your Whatsapp Number", maxLength: 12 ,minLength:1,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}" }}
        render={({ field }) => (
          <TextField
           inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
        rules={{ required: "Enter Your Country Name",maxLength:12}}
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
        rules={{ required: "Enter Your City Name.",maxLength:12 }}
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

{/* <label htmlFor='gender' className='required' ><br />
              gender
            </label><br />
            <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>

  <label>Female</label>
      <Controller
      
      control={control} 
       
        name="gender"
        // rules={{required:"r" }}
        
        label="Female"
        render={({ field }) => (
          
       <TextField
       
       style={{}}
             type="radio"
             autoComplete="off"
             value="female" 
          {...field}
            error={Boolean(errors?.gender)}
            helperText={errors.gender?.message}
          />
        )}
      />
    
<label>male</label>
    <Controller
      control={control} 
      
      name="gender"
      // rules={{  }}
      
      label="male"
      render={({ field }) => (
     <TextField
     style={{borderRadius:"100rem"}}
           type="radio"
           autoComplete="off"
           value="male" 
        {...field}
          error={Boolean(errors?.gender)}
          helperText={errors.gender?.message}
        />
      )}
    />
<label>Other</label>
<Controller
       control={control} 
       
      name="gender"
      
     
      label="other"
      render={({ field }) => (
     <TextField
     style={{}}
           type="radio"
           autoComplete="off"
           value="other"
        {...field}
          error={Boolean(errors?.gender)}
          helperText={errors.gender?.message}
        />
      )}
    /> */}
       
       {/* <form>
      <Controller
        name="gender"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (<Radio 
        type="radio"
        {...field} 
        error={Boolean(errors?.box)}
            helperText={errors.box?.message}
        />)}
      />
       <Controller
        name="ox"
        control={control}
        rules={{ required: "enter" }}
        render={({ field }) => (
        <Radio 
        id="radio"
        type="radio"
        {...field} 
        error={Boolean(errors?.ox)}
            helperText={errors.ox?.message}
        />
        )}
      />
      <Controller
        name="ox"
        control={control}
        rules={{ required: "enter" }}
        render={({ field }) => (
        <Radio 
        id="radio"
        type="radio"
        {...field} 
        error={Boolean(errors?.ox)}
            helperText={errors.ox?.message}
        />
        )}
      />

      </form> */}
  
  
       {/* </Stack> */}
       <label htmlFor='gender' className='required' ><br />
              gender
            </label><br />
            <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
       <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        rules={{ required:true }}
        
      >
      <Controller
      control={control}
        name="City"
        rules={{ required: "Enter Your City Name.",maxLength:12 }}
        render={({ field }) => (
        <FormControlLabel value="female" control={<Radio />} label="Female" error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message} 
            />
            )}
            />
        <FormControlLabel value="male" control={<Radio />} label="Male"error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}/>
        <FormControlLabel value="other" control={<Radio />} label="Other" error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}/>
      </RadioGroup>
    </FormControl>
     </Stack>
    

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

<div className='third'>
          <h1 style={{margin:"2rem",}}><mark style={{border:"5px solid deepskyblue", borderRadius:"125rem",margin:"1rem",padding:"1rem"}}>--*Educational Details*--</mark></h1>
        </div>
       <div className='fourth'>
       <label htmlFor='Current Degree & Branch ' className='required' ><br />
                            Current Degree & Branch
                        </label><br />
       <Controller
        control={control}
        name="Current"
        rules={{ required: "This field is required." }}
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
        rules={{ required: "This field is required. greater than 2000",maxLength:"4",min:"2000",max:"2023" }}
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
const PersonalForm = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>

<div className='third'>
          <h1 style={{margin:"2rem",}}><mark style={{border:"5px solid deepskyblue", borderRadius:"125rem",margin:"1rem",padding:"1rem"}}>--*Internship Interested Field*--</mark></h1>
        </div>

      
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


                            <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
       <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        rules={{ required:true }}
        
      >
      <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value=".Net MVC" control={<Radio />} label=".Net MVC" />
        <FormControlLabel value=" Angular" control={<Radio />} label="Angular" />
        <FormControlLabel value="  BBA/MBA" control={<Radio />} label="BBA/MBA" />
        </Stack><br/>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value="  Business Development " control={<Radio />} label=" Business Development" />
        <FormControlLabel value="  Digital Marketing" control={<Radio />} label="Digital Marketing" />
        <FormControlLabel value="   Finance" control={<Radio />} label=" Finance" />
        </Stack>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value="   Flutter/Android/Ios" control={<Radio />} label=" Flutter/Android/Ios" />
        <FormControlLabel value="   HR" control={<Radio />} label=" HR" />
        <FormControlLabel value="   Hardware" control={<Radio />} label=" Hardware" />
      </Stack>
      <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value="   Html UI" control={<Radio />} label=" Html UI" />
        <FormControlLabel value="   IOT" control={<Radio />} label=" IOT" />
        <FormControlLabel value="   Java" control={<Radio />} label=" Java" />
        </Stack>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value="  Laravel" control={<Radio />} label="Laravel" />
        <FormControlLabel value="    Legal / Law Firm" control={<Radio />} label="  Legal / Law Firm" />
        <FormControlLabel value="   Marketing" control={<Radio />} label=" Marketing" />
        </Stack>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value=" Networking" control={<Radio />} label="Networking" />
        <FormControlLabel value="   Photoshop" control={<Radio />} label=" Photoshop" />
        <FormControlLabel value="  Php" control={<Radio />} label="Php" />
        </Stack>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value="   Project Manager" control={<Radio />} label=" Project Manager" />
        <FormControlLabel value="  Python" control={<Radio />} label="Python" />
        <FormControlLabel value="   React" control={<Radio />} label=" React" />
        </Stack>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value="  SQL-Pl/Sql Oracle/MsSql  " control={<Radio />} label="  SQL-Pl/Sql Oracle/MsSql" />
        <FormControlLabel value="  Sales " control={<Radio />} label=" Sales" />
        <FormControlLabel value="  Software Development " control={<Radio />} label="Software Development " />
        </Stack>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value="   Testing " control={<Radio />} label=" Testing " />
        <FormControlLabel value="   UI Designer(Figma,etc)" control={<Radio />} label="  UI Designer(Figma,etc)" />
        <FormControlLabel value=" Web Development  " control={<Radio />} label=" Web Development" />
        </Stack>
        <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} rules={{ required:"required"}}>
        <FormControlLabel value=" Other " control={<Radio />} label=" Other" />
        
        </Stack>
      </RadioGroup>
    </FormControl>
     </Stack>
                          
                            
                            {/* <Controller
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
      /> */}
      

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
const PaymentForm = (props) => {
  const [visible, setvisible] = useState(true)
    const [ivisible, getvisible] = useState(true)
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <>
<div className='third'>
          <h1 style={{margin:"2rem",}}><mark style={{border:"5px solid deepskyblue", borderRadius:"125rem",margin:"1rem",padding:"1rem"}}>--*Internship Option*--</mark></h1>
        </div>
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
                        <h1>Internship Availability for{props.PersonalForm}</h1><br /><hr />
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
    <div className='third'>
          <h1 style={{margin:"2rem",}}><mark style={{border:"5px solid deepskyblue", borderRadius:"125rem",margin:"1rem",padding:"1rem"}}>--*References*--</mark></h1>
        </div>
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
        <div className='third'>
          <h1 style={{margin:"2rem",}}><mark style={{border:"5px solid deepskyblue", borderRadius:"125rem",margin:"1rem",padding:"1rem"}}>--*Submission*--</mark></h1>
        </div>
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