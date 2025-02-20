"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import { Send } from "lucide-react";
import SubmitButton from "../FormInputs/SubmitButton";
import TextArea from "../FormInputs/TextAreaInput";
import PhoneInput from "../FormInputs/PhoneInput";
import CountryInput from "../FormInputs/CountryInput";
import FormSelectInput from "../FormInputs/FormSelectInput";
import countries from "@/countries";
import toast from "react-hot-toast";
import { createContact } from "@/actions/admin";

const removeLeadingZero = (phoneNumber: string) => {
  const numberStr = phoneNumber.toString();
  if(numberStr.startsWith('0')){
    return numberStr.substring(1)
  }
  return numberStr;
};

export type ContactProps = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  country: string;
  schoolPage: string;
  students: number;
  role: string;
  media: string;
  messages: string;
};

const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [phoneCode, setPhoneCode] = useState("");
  const initialCountryCode = "UG";
  const initialCountry = countries.find(
    (item) => item.countryCode === initialCountryCode
  );
  const [selectedCountry, setSelectedCountry] = useState<any>(initialCountry);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactProps>();
  const roles = [
    {
      label : "Principal/Leadership/Mgmt",
      value : "Principal",
    },
    {
      label : "School Administrator",
      value : "Administarator",
    },
    {
      label : "Head Teacher",
      value : "HeadTeacher",
    },
    {
      label : "Teacher/Parent/Student",
      value : "teacher/parent/student",
    },
    {
      label : "Consultant/Reseller",
      value : "consultant/reseller",
    },
    {
      label : "Other",
      value : "other",
    },
  ];
  const media = [
    {
      label : "Blog",
      value : "blog",
    },
    {
      label : "Google",
      value : "google",
    },
    {
      label : "Friends",
      value : "friends",
    },
    {
      label : "Other",
      value : "other",
    },
  ];
  const [selectedRole, setSelectedRole] = useState<any>(roles[0]);
  const [selectedMedia, setMedia] = useState<any>(media[0]);

  async function onSubmit(data: ContactProps) {
    console.log(phoneCode);
    data.phone = removeLeadingZero(data.phone);
    const PhoneNumber = `${phoneCode}${data.phone}`;
    data.phone = PhoneNumber;
    data.country = selectedCountry.label;
    data.role = selectedRole.value;
    data.media = selectedMedia.value;
    data.students = Number(data.students)
    console.log(data);
    try {
      setLoading(true);
      console.log(data);
      const res = await createContact(data);
      console.log(res);
      setLoading(false);
      toast.success("Your Request has been Successfully Submitted!");
      // reset(); 
      // router.push("/dashboard/categories");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl text-center font-semibold">
              Tell us about your institution requirements
            </h3>
            <p className="text-muted-foreground text-sm text-center px-4 py-2 mb-4 max-w-xl mx-auto">
              Our team will reach out within 24 hours to schedule a personalized demo and discuss your specific needs.
            </p>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <TextInput label="Your Full Name" register={register} name="fullName" errors={errors} placeholder="Eg. John Doe" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput label="Email Address" register={register} name="email" type="email" errors={errors} placeholder="Eg. johndoe@gmail.com" />
                <PhoneInput  register={register} errors={errors} label="Phone (eg 07620643160)" name="phone" toolTipText="Select Code and write ur number"  setPhoneCode={setPhoneCode} />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput label="School Name" register={register} name="school" errors={errors} placeholder="Evernote High School" />
                <FormSelectInput label="Country" options={countries} option={selectedCountry} setOption={setSelectedCountry} />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput label="School Website/Social Media Page" register={register} name="schoolPage" errors={errors} placeholder="https://www.evernotehighschool.com" />
                <TextInput label="Number of Students" register={register} name="students" errors={errors} placeholder="Eg. 300" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <FormSelectInput label="Roles"  options={roles} option={selectedRole} setOption={setSelectedRole}/>
                <FormSelectInput label="Which Media did hear about us?"  options={media} option={selectedMedia} setOption={setMedia}/>
              </div>
              
              <TextArea label="Please share with us the key pain points you want to solve" register={register} name="message" errors={errors} />
              
              <SubmitButton buttonIcon={Send} title="Submit" loading={loading} loadingTitle="Sending, please wait..." />
            </form>
          </div>
        </div>
        
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-800 text-white p-6 rounded-2xl text-center">
            <h3 className="font-semibold text-xl mb-2">Speak to someone in sales</h3>
            <p className="text-sm mb-4">Schedule a call with our team to explore tailored solutions.</p>
            <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition duration-300">
              Book Appointment
            </button>
          </div>
          <div className="bg-lime-400 p-6 rounded-2xl text-center">
            <h3 className="font-semibold text-xl mb-2">Contact our team</h3>
            <p className="text-sm mb-4">Reach out via email for inquiries and support.</p>
            <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
              Send a Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
