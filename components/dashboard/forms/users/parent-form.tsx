"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../FormHeader";
import FormFooter from "../FormFooter";
import TextInput from "@/components/FormInputs/TextInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import toast from "react-hot-toast";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import FormSelectInput from "@/components/FormInputs/FormSelectInput";
import countries from "@/countries";
import { createParent } from "@/actions/parents";


export type SelectOptionProps = {
  label: string;
  value: string;
};
type ParentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};
export type ParentProps = {
  title: string;
  firstName: string;
  lastName: string;
  relationship: string;
  email: string;
  NIN: string;
  gender: string; 
  dob: string;
  phone: string;
  nationality: string;
  whatsapNo: string;
  imageUrl: string;
  contactMethod: string;
  occupation: string;
  address: string;
  password: string;
}
export default function ParentForm({
  editingId,
  initialData,
}: ParentFormProps) {

  //parents
  const relationships = [
    {
      label: "Mother",
      value: "Mother"
    },
    {
      label: "Father",
      value: "Father"
    },
    {
      label: "Guardian",
      value: "Guardian"
    },
    {
      label: "Other",
      value: "Other"
    },

  ]
  const [selectedRelationship, setSelectedRelationship] = useState<any>(relationships[1]);

  //Titles
  const titles = [
    {
      label: "Mr",
      value: "Mr"
    },
    {
      label: "Mrs",
      value: "Mrs"
    },

  ]
  const [selectedTitle, setSelectedTitle] = useState<any>(titles[0]);


  //class
  const ContactMethods = [
    {
      label: "Phone",
      value: "Phone"
    },
    {
      label: "Email",
      value: "Email"
    },
    {
      label: "Whatsap",
      value: "Whatsap"
    },

  ]
  const [selectedMethod, setSelectedMethod] = useState<any>(ContactMethods[0]);

  //gender
  const genders = [
    {
      label: "MALE",
      value: "MALE"
    },
    {
      label: "FEMALE",
      value: "FEMALE"
    },

  ]
  const [selectedGender, setSelectedGender] = useState<any>(genders[0]);

  //Nationality
  const initialCountryCode = "UG";
  const initialCountry = countries.find((item) => item.countryCode === initialCountryCode);
  const [selectedNationality, setSelectedNationality] = useState<any>(initialCountry);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ParentProps>({
    defaultValues: {
      firstName: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: ParentProps) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      data.title = selectedTitle.value;
      data.relationship = selectedRelationship.value;
      data.gender = selectedGender.value;
      data.nationality = selectedNationality.label;
      data.contactMethod = selectedMethod.value;
      console.log(data)
      if (editingId) {
        // await updateCategoryById(editingId, data);
        // setLoading(false);
        // toast.success("Updated Successfully!");
        // reset();
        // router.push("/dashboard/categories");
        // setImageUrl("/placeholder.svg");
      } else {
        const res = await createParent(data);
        setLoading(false);
        toast.success("Successfully Created!");
        reset();
        // setImageUrl("/placeholder.svg");
        router.push("/dashboard/users/parents");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  console.log(status);

  return (
    <form className="" onSubmit={handleSubmit(saveStudent)}>
      <FormHeader
        href="/parents"
        parent="users"
        title="Parent"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Title"
                options={titles}
                option={selectedTitle}
                setOption={setSelectedTitle}
              />
              <TextInput
                register={register}
                errors={errors}
                label="First Name"
                name="firstName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Last Name"
                name="lastName"
              />
            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Relationship"
                options={relationships}
                option={selectedRelationship}
                setOption={setSelectedRelationship}
              />
              <TextInput
                register={register}
                errors={errors}
                label="National ID /Passport"
                name="NIN"
              />
              <FormSelectInput
                label="Gender"
                options={genders}
                option={selectedGender}
                setOption={setSelectedGender}
                isSearchable={false}
              />

            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-3  gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Date Of Birth"
                name="dob"
                type="date"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Phone"
                name="phone"
                type="tel"
              />
              <FormSelectInput
                label="Nationality"
                options={countries}
                option={selectedNationality}
                setOption={setSelectedNationality}
              />

            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-2 gap-3">
              {/* <TextInput
                register={register}
                errors={errors}
                label="Phone"
                name="phone"
                type="tel"
              /> */}
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
              />
              <TextInput
                register={register}
                errors={errors}
                type="tel"
                label="Whatsap No."
                name="whatsapNo"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="grid gap-3">
                  <FormSelectInput
                    label="Preferred Contact Method"
                    options={ContactMethods}
                    option={selectedMethod}
                    setOption={setSelectedMethod}
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Occupation"
                    name="occupation"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Address"
                    name="address"
                  />
                </div>
                <div className="grid">
                  <PasswordInput
                    register={register}
                    errors={errors}
                    label="Parent Portal Password"
                    name="password"
                  />
                </div>
              </div>
              <div className="grid">
                <ImageInput
                  title="Parent Profile Image"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="parentProfileImage"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>


      </div>
      <FormFooter
        href="/parents"
        editingId={editingId}
        loading={loading}
        title="Parent"
        parent="users"
      />
    </form>
  );
}
