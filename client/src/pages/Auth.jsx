import React, {useState} from 'react'

const Auth = () => {
    const [signUp,setSignUp] = useState(true)

  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
        <div className='w-1/3 bg-white p-3'>
            <h1 className='text-2xl text-indigo-500 font-bold pb-5 '>{signUp ? "REGISTER" : "LOGIN"}</h1>
            <div className='flex flex-col space-y-3 mb-5'>
                {signUp && <input   type="text" placeholder='UserName'    className='text-area-deneme-1' />}
                <input              type="text" placeholder='Email'       className='text-area-deneme-1' />
                <input              type="text" placeholder='Password'    className='text-area-deneme-1' />
            </div>
            <div className='text-red-500 text-xs cursor-pointer mb-4'>
                {
                    signUp ? <span onClick={()=>setSignUp(false)}>daha önce kayit yapıtınız mı ?</span> : <span onClick={()=>setSignUp(true)}>Kayıt olmak için tıklayın.</span>
                }

            </div>
            <div className='cursor-pointer hover:bg-indigo-900 w-full p-2 text-center bg-indigo-600 text-white rounded-md'>{signUp ? "Kayıt Ol" : "Giriş Yap"}</div>
        </div>
    </div>
  )
}

export default Auth