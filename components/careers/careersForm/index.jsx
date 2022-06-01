

import { Formik } from 'formik';
import { useRef  , useState    } from 'react';
import { storage , db  } from "../../../utils"
import {   ref, uploadBytes  , getDownloadURL  } from "firebase/storage"
import {  addDoc , collection  } from "firebase/firestore"
import { ToastContainer ,  toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { FullScreenLoading  } from '../../loaderPage';
import  emailjs from "emailjs-com"

export const CareersForm = () => {
    const fileInputRef= useRef();

    const formRef = useRef();
    const [ fileView , setFileView ] = useState ( { } )
    const [ isLoading , toggleLoading  ] = useState  ( false )
    const initalFormState  = { email: '',  name:"", mobile:"" , source :"", experience:"", position:"" , resume :""  }
     const invokeFileSelect = ()=> {
        fileInputRef.current.value = "" ;
        fileInputRef.current.click();
    }
    const submitHandler = async  (  values  ,  { resetForm }   ) => {
        toggleLoading(  true )
        try {
            const fileRef = ref(storage, values.resume.name)
            const url = await getDownloadURL ( (await uploadBytes ( fileRef , values.resume )).ref ) 
            values.resume = url ;
            await  addDoc(collection(db, "careers"), values );
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

    const handleViewChange = input =>{
            const Filesize = input.size / 1024 /1024
           if ( Filesize < 2 ) {
               setFileView ({ 
                    name : input.name ,
                    size: Filesize.toFixed(2) + "MB"
               })
           }else {
               toast.error("File Is Too Large")
           }
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
        if ( values.source == ""){
            errors.source = "This Field Is Required."
        }
        if ( !values.experience){
            errors.experience = "Enter Relevent Experience." 
        }
        if ( !values.position){
            errors.position = "Enter Desired Designation." 
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
            <form ref={ formRef} onSubmit={handleSubmit }  noValidate className='max-w-screen-xl font-poppins md:w-8/12 mx-auto  flex items-center justify-center flex-wrap gap-4   lg:gap-7  md:border my-10  md:border-slate-300 rounded-2xl py-10   px-3 md:px-9 xl:px-12' >
            <div className='  basis-64 xl:basis-96 flex-1 flex flex-col flex-nowrap'>
                <label className = "  mb-1 text-lg lg:text-xl  text-gray">Full Name*</label>
                <input size="1" name='name' type="text" className={`${ errors.name ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  w-full border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Full Name" value={ values.name } onChange= { handleChange } />
                { errors.name  && <p className="text text-red dark:text-red font-medium ">{ errors.name }</p> } 
            </div>
            <div className='basis-64 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">Email Address*</label>
                <input size="1" name='email' type="email" className={`${ errors.email ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Email Address" value={ values.email } onChange= { handleChange } />
                { errors.email  && <p className="text text-red dark:text-red font-medium ">{ errors.email }</p> } 
            </div>
            <div className=' basis-64 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">Mobile Number*</label>
                <input size="1" name='mobile' type="number" className={`${ errors.mobile ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Mobile Number" value={ values.mobile } onChange= { handleChange } />
                { errors.mobile  && <p className="text text-red dark:text-red font-medium ">{ errors.mobile }</p> } 
            </div>
            <div className=' basis-64 xl:basis-96  flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">Position Applying For*</label>
                <input size="1" name='position' type="text" className={` placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none ${ errors.position ?"border-red" :"border-slate-400"} `}  placeholder="Enter Position" value={ values.position } onChange= { handleChange } />
                { errors.position  && <p className="text text-red dark:text-red font-medium ">{ errors.position }</p> } 
            </div>
            <div className=' basis-64 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">Experience { " ( in Months )*"}</label>
                <input size="1" name='experience' type="number" className={`${ errors.experience ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Work Experience" value={ values.experience } onChange= { handleChange } />
                { errors.experience  && <p className="text text-red dark:text-red font-medium ">{ errors.experience }</p> } 
            </div>
            <div className='basis-64 xl:basis-96 flex-1 flex flex-col flex-nowrap  '>
                <label className = "block mb-1 text-lg lg:text-xl text-gray">How Did You Know About Us*</label>
                <input size="1" name='source' type="text" className={`${ errors.source ?"border-red" :"border-slate-400"} placeholder:text-base placeholder:text-gray placeholder:font-medium px-3 py-3 text-base lg:text-lg  xl:text-xl text-slate-700  border border-solid  rounded transition ease-in-out 
                focus:border-black focus:text-black focus:outline-none`}  placeholder="Enter Source Of Information" value={ values.source } onChange= { handleChange } />
                { errors.source  && <p className="text text-red dark:text-red font-medium ">{ errors.source }</p> } 
            </div>
            
            <div className='h-18  md:h-28 w-full border-dashed border  border-slate-400 text-lg lg:text-xl text-gray justify-center px-3 py-3  rounded-lg flex flex-nowrap  items-center gap-5  hover:bg-slate-200 cursor-pointer ' onClick={invokeFileSelect }>
                <input type="file" multiple={ false } accept="application/pdf,application/msword" ref={fileInputRef } name="resume" className=" hidden" onChange={(event) => {
                    setFieldValue("resume", event.currentTarget.files[0]);
                    handleViewChange ( event.target.files[0] )
                }} />
                <svg  height="40" width="40" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 47.5 47.5" viewBox="0 0 47.5 47.5"><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path className='fill-slate-400' d="M 0,38 38,38 38,0 0,0 0,38 Z"/></clipPath></defs><g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path className='fill-slate-400' d="m 0,0 c 0,-2.209 1.791,-4 4,-4 l 24,0 c 2.209,0 4,1.791 4,4 l 0,17 c 0,2.209 -1.791,4 -4,4 l -9,0 c -3.562,0 -3,5 -8.437,5 L 4,26 C 1.791,26 0,24.209 0,22 L 0,0 Z" transform="translate(1 8)"/><path  className='fill-slate-500' d="M 0,0 -6.562,0 C -12,0 -11.945,-5 -15.508,-5 l -9,0 c -2.209,0 -4.181,-1.791 -4.406,-4 l -0.492,-3.874 0,0 -0.524,-4.126 -0.02,0.002 c -0.115,-0.606 -0.672,-0.999 -1.3,-0.999 -0.643,0 -1.106,0.507 -1.074,1.143 -0.002,-0.049 -0.012,-0.096 -0.012,-0.146 0,-2.004 1.478,-3.648 3.4,-3.939 0.177,-0.038 0.372,-0.061 0.6,-0.061 l 26,0 c 2.209,0 4.182,1.791 4.406,4 L 3.594,-4 C 3.818,-1.791 2.209,0 0,0" transform="translate(33.336 25)"/></g></svg>
                <div className='flex flex-col  flex-nowrap'>
                   <h2> {  fileView.name  ?  String( fileView .name).slice( 0 , 50 )  :  "Upload Your CV / Resume*" }</h2>
                    <span className='text-sm text-gray px-1 '>{ fileView.size || "pdf /doc /docx , <2MB Size " }</span>
                </div>
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




          