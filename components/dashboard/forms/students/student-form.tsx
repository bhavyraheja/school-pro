"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import InfoBanner from "@/components/info-banner";


export type SelectOptionProps = {
  label: string;
  value: string;
};
type SingleStudentFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};
export type StudentPops = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
}
export default function SingleStudentForm({
  editingId,
  initialData,
}: SingleStudentFormProps) {

  //parents
  const parents = [
    {
      label: "John Doe",
      value: "123456"
    },
    {
      label: "Allan Smith",
      value: "12345678"
    },

  ]
  const [selectedParent, setSelectedParent] = useState<any>(null);

  //class
  const classes = [
    {
      label: "S1",
      value: "1234566"
    },
    {
      label: "S2",
      value: "12345678"
    },

  ]
  const [selectedClass, setSelectedClass] = useState<any>(null);

  //section/streams
  const streams = [
    {
      label: "S1A",
      value: "1234566"
    },
    {
      label: "S1B",
      value: "1234566"
    },
    {
      label: "S2A",
      value: "12345678"
    },
    {
      label: "S2B",
      value: "12345678"
    },

  ]
  const [selectedStream, setSelectedStream] = useState<any>(null);

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
  const [selectedGender, setSelectedGender] = useState<any>(null);

  //Nationality
  const initialCountryCode = "UG";
  const initialCountry = countries.find((item) => item.countryCode === initialCountryCode);
  const [selectedNationality, setSelectedNationality] = useState<any>(initialCountry);

  //Religion
  const religions = [
    {
      label: "Roman Catholic",
      value: "Catholic"
    },
    {
      label: "Anglican",
      value: "Anglican"
    },
    {
      label: "Islam",
      value: "Islam"
    },

  ]
  const [selectedReligion, setSelectedReligion] = useState<any>(null);





  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentPops>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/student.png";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveStudent(data: StudentPops) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;
      console.log(data)
      if (editingId) {
        // await updateCategoryById(editingId, data);
        // setLoading(false);
        // toast.success("Updated Successfully!");
        // reset();
        // router.push("/dashboard/categories");
        // setImageUrl("/placeholder.svg");
      } else {
        // await createCategory(data);
        // setLoading(false);
        // toast.success("Successfully Created!");
        // reset();
        // setImageUrl("/placeholder.svg");
        // router.push("/dashboard/categories");
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
        href="/students"
        parent=""
        title="Student"
        editingId={editingId}
        loading={loading}
      />
      <div className="grid grid-cols-12 gap-6 py-8">
       
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Student First Name"
                name="firstname"
              />
              <TextInput
                register={register}
                errors={errors}
                label="StudentL ast Name"
                name="lastname"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
              />
            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Parent"
                options={parents}
                option={selectedParent}
                setOption={setSelectedParent}
                toolTipText="Add New Parent"
                href="/dashboard/users/parents/new"
              />
              <FormSelectInput
                label="Class"
                options={classes}
                option={selectedClass}
                setOption={setSelectedClass}
                toolTipText="Add New Class"
                href="/dashboard/academics/classes"
              />
              <FormSelectInput
                label="Stream/Section"
                options={streams}
                option={selectedStream}
                setOption={setSelectedStream}
                toolTipText="Add New Stream"
                href="/dashboard/academics/classes"
              />

            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-3  gap-3">
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
              <PasswordInput
                register={register}
                errors={errors}
                label="Student password"
                name="password"
                toolTipText="Password will be used by student on the student Portal"
              />
            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="State/Village"
                name="state"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Birth Certificate No."
                name="BCN"
              />
              <FormSelectInput
                label="Religion"
                options={religions}
                option={selectedReligion}
                setOption={setSelectedReligion}
              />
            </div>
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3">
              <FormSelectInput
                label="Gender"
                options={genders}
                option={selectedGender}
                setOption={setSelectedGender}
                isSearchable={false}
              />
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
                label="Roll No."
                name="rollNo"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Registration No."
                    name="regNo"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Admission Date"
                    name="admissionDate"
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
              </div>
              <div className="grid">
                <ImageInput
                  title="Student Profile Image"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="studentProfileImage"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="lg:col-span-4 col-span-full ">
          <div className="grid auto-rows-max items-start gap-4 ">
            
          </div>
        </div> */}
      </div>
      <FormFooter
        href="/students"
        editingId={editingId}
        loading={loading}
        title="Student"
        parent=""
      />
    </form>
  );
}
