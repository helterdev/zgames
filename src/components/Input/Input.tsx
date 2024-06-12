import React from "react"
import "./Input.css"
import { UseFormRegister } from "react-hook-form"

interface InputProps {
    label?: string,
    type?: string,
    placeholder?: string,
    id?: string,
    icon?: any,
    register?: UseFormRegister<any>
}

export default function Input({ label, type, placeholder, id, icon, register }: InputProps) {
    return <div className="container-input">
        <label htmlFor={id}>{label}{icon}:
        </label>
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            //@ts-ignore
            {...register(id)} />
    </div>
}