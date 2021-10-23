import React from 'react'
import clsx from 'clsx';

import styles from './MyCustomForm.module.scss'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required('Имя обязательно'),
    lastName: yup.string().required('Фамилия обязательна'),
    email: yup.string().required('Email обязателен').email('Неверная почта'),
}).required();


export const MyCustomForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data)

    console.log(errors)

    return (
        <div className={styles.wrapper}>
            <h3>Моя форма</h3>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form} autoComplete="off">
                <div className={styles.row}>
                    <div className={styles.box}>
                        <input
                            {...register("firstName")}
                            className={clsx(styles.input, { error: errors.firstName })}
                            type="text"
                            id="firstName"
                            name="firstName"
                            autoComplete="off"
                            placeholder=" "
                        />
                        <label htmlFor="firstName" className={styles.label}>Введите имя</label>
                        {
                            errors.firstName && <label className="error">{errors.firstName.message}</label>
                        }

                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.box}>
                        <input
                            {...register("lastName")}
                            className={clsx(styles.input, { error: errors.lastName })}
                            type="text"
                            id="lastName"
                            name="lastName"
                            autoComplete="off"
                            placeholder=" "
                        />
                        <label htmlFor="lastName" className={styles.label}>Введите фамилию</label>
                        {
                            errors.lastName && <label className="error">{errors.lastName.message}</label>
                        }
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.box}>
                        <input
                            {...register("email")}
                            className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            placeholder=" "
                        />
                        <label htmlFor="email" className={styles.label}>Введите email</label>
                        {
                            errors.email && <label className={styles.error}>{errors.email.message}</label>
                        }
                    </div>
                </div>

                <div className={styles.row}>
                    <button type="submit" className={styles.button}>Отправить</button>
                </div>

            </form>

        </div>
    )
}

