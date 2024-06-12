"use client";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "../RegisterForm/Register.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/formSchema";
import z from "zod";
import Error from "../MessageError/Error";

type loginTypes = z.infer<typeof loginSchema>;

export default function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<loginTypes>({
        resolver: zodResolver(loginSchema)
    });

    const onsubmit: SubmitHandler<loginTypes> = (e) => {
        console.log(e);
    }
    return (
        <section>
            <div className="container">

                <form className="form" onSubmit={handleSubmit(onsubmit)}>
                    <div>
                        <h2>Login</h2>
                    </div>
                    <div>
                        <Input label="Email" type="email" icon={<MdOutlineEmail />} id="email" register={register} />
                        {errors.email && <Error message={errors.email.message} />}
                    </div>
                    <div>
                        <Input label="Password" type="password" icon={<RiLockPasswordLine />} id="password" register={register} />
                        {errors.password && <Error message={errors.password.message} />}
                    </div>

                    <div className="form-button">
                        <Button text="Send" />
                    </div>
                </form>
            </div>

        </section>
    )
}