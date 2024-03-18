import './App.css'

function App() {
  

  return (
    <>
     <body>
           
          <div className= 'h-screen bg-lime-200' >
               <div className='flex bg-center boarder rounded-3xl mr-32 ml-32 bg-white'>
                   <div className='w-1/3 h-screen bg-emerald-900 rounded-l-3xl'>
                    <div className='mt-10 ml-10'>
                    <img className='h-24 w-44 justify-center' src="https://ui-practise.vercel.app/static/images/landingView/logo.png" alt="" />
                    </div>
                    <div className='text-lime-100 text-4xl mt-96 ml-5 font-sans'>Say hello to global food and beverage producers and suppliers, all in one place</div>
                   </div>
                   <div>
                    <div className='font-sans font-medium text-4xl mt-14 ml-10'>
                       Let’s get started 
                       <br />
                       with a few simple steps
                    </div>

                    <div className='mt-24 ml-10 font-semibold font-sans text-xl '>
                      <div>
                        <div className='font-sans text-sm'> Email </div>
                         <input className=' my-2 border-b-2 focuse-within:bordet-black-900 w-full block appearance-none focus:outline-none bg-transparent' type="text" />
                        
                      </div>
                      <div>
                        <div className='font-sans text-sm'> FullName </div>
                         <input className=' my-2 border-b-2 focuse-within:bordet-black-900 w-full block appearance-none focus:outline-none bg-transparent' type="text" />
                        
                      </div>
                      <div>
                        <div className='font-sans text-sm'> Password </div>
                         <input className=' my-2 border-b-2 focuse-within:bordet-black-900 w-full block appearance-none focus:outline-none bg-transparent' type="text" />
                        
                      </div>
                        
                      <button class="bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl mt-5 w-96 pt-5 pb-5 mr-5 ml-5">
                             Sign up
                      </button>
                        
                      </div>

                      <div className='mt-24 ml-10 text-slate-500 text-sm'>By signing up, you agree to our 
                      <span className='mt-24 text-slate-500 text-sm'>Terms of Service</span>

                      </div>
                     
                      <div className='text-slate-500 ml-10 text-sm'>Already have an account? 
                      <span className='text-emerald-600 text-sm '>Log in</span>
                      </div>
                     
                      
                  </div>
               </div>
          </div>
  
     </body>
    </>
  )
}

export default App
