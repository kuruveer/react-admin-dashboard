import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../../../components/form/InputField'
import Button from '../../../components/ui/Button'

export default function LoginUI() {

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-2xl w-full">
          <h3 className="font-semibold text-center text-xl mb-6">Welcome to Trihox</h3>
          <div className="bg-white shadow w-full rounded-sm divide-y divide-gray-200">

            <div className="px-5 py-7">
              <InputField
                id='client_email'
                type='email'
                label='Email'
                placeholder='Ex: hello@trihox.com'
                required={true}
                value=''
              />
              <InputField
                id='client_password'
                type='password'
                label='Password'
                placeholder='********'
                required={true}
                value=''
              />
              <div className='flex flex-row items-center my-0 py-0	text-sm'>
                <Button text='Forgot Password ?' type='text' className='p-0 text-blue-500 mt-1 text-sm' onClick={() => navigate('/auth/forgot-password')} />
              </div>
              <div className="grid grid-cols-1 gap-4 mt-6">
                <Button className='w-full' type='dark' text='Login' />
              </div>
              <hr className='my-6' />
              <div>
                <div className='flex flex-row items-center'>
                  Don't have an account? <Button text='Register' type='text' className='p-0 text-blue-500 px-2 text-lg' onClick={() => navigate('/auth/register')} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
