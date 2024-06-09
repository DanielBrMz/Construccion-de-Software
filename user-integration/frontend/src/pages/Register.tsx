import Form from '../components/shared/Form';

function Register() {
    return (
        <div className="min-h-screen flex justify-center items-center" style={{backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)"}}>
        <div className="w-3/5">
          <div className="flex flex-col lg:flex-row w-full bg-white rounded-xl mx-autoshadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <h1 className="text-black text-3xl mb-3">Welcome</h1>
              <div>
                <img src="../assets/signup.svg" alt="Register" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2  className="text-3xl mb-4">Register</h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
}


export default Register;