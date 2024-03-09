//  'use client'

// import { Button } from '@/component/ui/button'
// import { Input } from '@/component/ui/button'
// import { Label } from '@/component/ui/label'
// import { useState } from 'react'

//  export const RegisterForm =() => {
//     const [email, setEmail]= useState('')
//     const [password, setPassword] = useState('')

//     const onSubmit = (e: React.FormEvent) => {
//         e.preventDefault()
//         try{
//             const res = await fetch('/api/register',{
//                 method: 'POST',
//                 body: JSON.stringify({
//                     email, password
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }

//             })
//             if(res.ok){
//                 //redirect
//             }

//         }catch (error){
//             console.error(error)
//          }

//         console.log('Register!')
//     }
//     return(
//         <form 
//         onSubmit={onSubmit}className='space-y-12 w-[400px]'>
//             <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor='email'>Email</Label>
//                 <Input 
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                  id='email' 
//                  type="email"
//                 />              
//             </div>
//             <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor='password'>Password</Label>
//                 <Input 
//                  value={password}
//                  onChange={(e) => setPassword(e.target.value)}
//                  id='passsword'
//                  type="password" 
//                 />              
//             </div>
//             <div className='w-full'>
//               <Button className='w-full' size="lg">Register</Button>
//             </div>
//         </form>
//     )
//  }