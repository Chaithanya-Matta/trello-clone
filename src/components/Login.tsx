
const Login = () => {
  return (
    <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-light'>Login to Trello Clone</h3>

                    <form >

                        <div className='mb-3'>
                            <input type="text" className='form-control' placeholder='Username' />
                        </div>
                        <div className='mb-3'>
                            <input type="passsword" className='form-control' placeholder='Password' />
                        </div>

                        <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>

                    </form>

                </div>

            </div>

        </div>
    </>
  )
}

export default Login