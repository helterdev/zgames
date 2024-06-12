"use client"
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../Button/Button";
import "./Register.css"
import Input from "@/components/Input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import z from "zod"
import { registerSchema } from "@/schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Error from "../MessageError/Error";

type registerTypes = z.infer<typeof registerSchema>;

export default function RegisterForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<registerTypes>({
        resolver: zodResolver(registerSchema)
    })

    const onsubmit: SubmitHandler<registerTypes> = (e) => {
        console.log(e);

    }

    return <section className="form-content">
        <div className="container">

            <form className="form" onSubmit={handleSubmit(onsubmit)}>
                <div>
                    <h2>Register</h2>
                </div>
                <div>
                    <Input label="Name" type="text" placeholder="Enter your name" icon={<CiUser />} id="name" register={register} />
                    {errors.name && <Error message={errors.name.message} />}
                </div>
                <div>
                    <Input label="Email" type="email" placeholder="Enter your email" icon={<MdOutlineEmail />} id="email" register={register} />
                    {errors.email && <Error message={errors.email.message} />}
                </div>
                <div>
                    <Input label="Password" type="password" placeholder="Enter your password" icon={<RiLockPasswordLine />} id="password" register={register} />
                    {errors.password && <Error message={errors.password.message} />}
                </div>
                <div>
                    <Input label="Confirm Password" type="password" placeholder="Confirm password" icon={<RiLockPasswordLine />} id="confirmPassword" register={register} />
                    {errors.confirmPassword && <Error message={errors.confirmPassword.message} />}
                </div>
                <div className="form-button">
                    <Button text="Send" />
                </div>
            </form>
        </div>
    </section>
}