

import { Formik } from 'formik';
import {  useState    } from 'react';
import {   db  } from "../../../utils"
import {  addDoc , collection  } from "firebase/firestore"
import { ToastContainer ,  toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { FullScreenLoading  } from '../../loaderPage';
import  emailjs from "emailjs-com"

export const ContactUsForm =  ()  => {
    const [ isLoading , toggleLoading  ] = useState  (  false )
    const initalFormState  = { email:'',  name:"", mobile:"" ,  state:"", city:"" , subject : "" ,message: "" }

    const submitHandler = async  (  values  ,  { resetForm }   ) => {
        toggleLoading(  true )
        try {
            await  addDoc(collection(db, "contact"), values );
            emailjs.init('user_YW47ZYWhszMIdjdqUtsPJ')
            emailjs.send('service_4y9yybg', 'template_gd6v9ae', values , 'uJiUvStBvpsEgbU2k')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
            });
            toast.success("Form Submitted.")
        } catch  ( err ) {
            toast.error("Error! Please Try Again.")
            console.log ( err )

        }
        setFileView({ })
        toggleLoading(false );
        resetForm();

    }


    const validator = values =>{
        const errors = {};
        if (!values.email) {
            errors.email = 'Email Is Required';
        } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
            errors.email = 'Invalid Email Address';
        } 
        if ( (values.mobile + "").length !== 10){
            errors.mobile = "Enter Valid Phone Number"
        }
        if ( values.name == ""){
            errors.name = "Name Is required "
        }
        if ( values.state == ""){
            errors.state = "This Field Is Required."
        }
        if ( !values.city){
            errors.city = "This Field Is Required."
        }
        if ( !values.subject){
            errors.subject = "This Field Is Required."
        }
        if ( !values.message){
            errors.message = "This Field Is Required."
        }
        return errors ;
    }

    return (
        <>
         < ToastContainer />
         { isLoading ? <FullScreenLoading /> :""}
        
        <Formik
        initialValues={initalFormState }
        validate={ values => validator( values )}
        onSubmit={ ( values , actions )  => submitHandler ( values , actions   ) }
        validateOnChange={ false }
        >
        {({ values, errors , handleChange, handleSubmit  , setFieldValue }) =>(
            <form onSubmit={ handleSubmit }  noValidate className='max-w-screen-xl font-poppins md:w-8/12 mx-auto  flex items-center justify-center flex-wrap gap-x-4 gap-y-1 lg:gap-x-7   md:border my-10  md:border-slate-300 rounded-2xl py-10 px-3 md:px-9 xl:px-12' >

            <div className='  basis-64 h-28 xl:basis-96 flex-1 flex flex-col flex-nowrap'>
                <label className = "  mb-1 text-lg lg:text-xl  text-gray">Full Name*</label>
                <input size="1" name='name' type="text" className={`${ errors.name ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  w-full border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Full Name" value={ values.name } onChange= { handleChange } />
                { errors.name  && <p className="text text-red dark:text-red font-medium ">{ errors.name }</p> } 
            </div>

            <div className='basis-64 h-28 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">Email Address*</label>
                <input size="1" name='email' type="email" className={`${ errors.email ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Email Address" value={ values.email } onChange= { handleChange } />
                { errors.email  && <p className="text text-red dark:text-red font-medium ">{ errors.email }</p> } 
            </div>

            <div className=' basis-64 h-28 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">Mobile Number*</label>
                <input size="1" name='mobile' type="number" className={`${ errors.mobile ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Mobile Number" value={ values.mobile } onChange= { handleChange } />
                { errors.mobile  && <p className="text text-red dark:text-red font-medium ">{ errors.mobile }</p> } 
            </div>

            
            <div className=' basis-64 h-28  xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">State*</label>
                <input size="1" name='state' type="text" className={`${ errors.state ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Work Experience" value={ values.state } onChange= { handleChange } />
                { errors.state  && <p className="text text-red dark:text-red font-medium ">{ errors.state }</p> } 
            </div>
            <div className='basis-64 h-28 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">City*</label>
                <input size="1" name='city' type="text" className={`${ errors.city ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Source Of Information" value={ values.city } onChange= { handleChange } />
                { errors.city  && <p className="text text-red dark:text-red font-medium ">{ errors.city }</p> } 
            </div>
            <div className='basis-64 h-28 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">Subject*</label>
                <input size="1" name='subject' type="text" className={`${ errors.subject ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Source Of Information" value={ values.subject } onChange= { handleChange } />
                { errors.subject  && <p className="text text-red dark:text-red font-medium ">{ errors.subject }</p> } 
            </div>
            <div className='basis-64  h-28 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">Message*</label>
                <textarea size="1" rows="5"  name='message' type="text" className={`${ errors.message ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base resize-none  lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Source Of Information" value={ values.message } onChange= { handleChange } ></textarea>
                { errors.subject  && <p className="text text-red dark:text-red font-medium ">{ errors.subject }</p> } 
            </div>
            
            
            <div className='w-full flex justify-end px-2 mt-7 '>
                <button type='submit' className="px-[4rem] uppercase tracking-widest hero-btn text-red hover:text-white hover:bg-red border-2 border-red ">submit </button>
            </div>
            </form>
        )}
        </Formik>
        </>
    )
}