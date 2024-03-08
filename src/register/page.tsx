import Link from 'next/link'
import {RegisterForm } from './form'
export default function RegisterPage(){
    return (
        <div className="h-screen w-screen flex justify-content items-center bg-slate-100">
            <div className="shadow-xl px-8 pb-8 pt-12 bg-white rounded-xl space-y-12">
                <h1 className="font-semibold text-2xl ">Create your Account</h1>
                <RegisterForm />
                <p className='text-center'>
                    Have an acount?{' '}
                     <Link className="text-indigo-500 hover:underline" href="/login">
                        Sign In
                     </Link>{' '}
                </p>
            </div>
        </div>
    )
}