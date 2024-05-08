import Form from './components/Form';

function Register() {
    return (
        <div className="min-h-screen py-40" style={{backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)"}}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('images/Register-Background.png')"}}>
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
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