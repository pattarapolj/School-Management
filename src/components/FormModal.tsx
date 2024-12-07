"use client"

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import('./forms/TeacherForm'), {
    loading: () => <p>Loading...</p>
})

const StudentForm = dynamic(() => import('./forms/StudentForm'), {
    loading: () => <p>Loading...</p>
})

const forms: {
    [key: string]: (type:"create" | "update", data?:any) => JSX.Element;
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />
}

type TableType = "teacher" | "student" | "parent" | "subject" | "class"
    | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event"
    | "announcement";

type typeType = "create" | "update" | "delete";

type FormModalProps = {
    table: TableType;
    type: typeType;
    data?: any;
    id?: number;
}

const FormModal = ({ table, type, data, id }: FormModalProps) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const bgColor = type === "create" ? "bg-yellowTheme" : type === 'update' ? 'bg-sky' : 'bg-purpleTheme'
    const icon = type === "create" ? "plus" : type === 'update' ? 'view' : 'delete'

    const [open, setOpen] = useState(false)

    const Form = () => {
        return type === "delete" && id ? <form className="p-4 flex flex-col gap-4" action="">
            <span className="text-center font-medium">All data will be deleted. Are you sure you want to delete this {table}?</span>
            <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
        </form> : type === 'create' || type === 'update' ? (
            forms[table](type, data)
        ) : (
            "Form not found!!"
        )
    }

    return (
        <>
            <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={() => { setOpen(true) }}>
                <Image src={`/${type}.png`} alt={type} width={14} height={14} />
            </button>
            {open && (
                <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]">
                        <Form />
                        <div className="absolute top-4 right-4 cursor-pointer" onClick={() => {setOpen(false)}}>
                            <Image src={`/close.png`} alt="" width={14} height={14} />
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default FormModal