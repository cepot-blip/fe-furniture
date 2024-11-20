/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';

function AuthTemplate(props) {
  const { title, children, type } = props;
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e5e5e5]">
      <div className="w-full h-[100vh] flex bg-[#fafafa] rounded-xl overflow-hidden border-2 shadow-2xl">
        {/* left */}
        <section className="w-1/2 relative">
          <img src="./authbg.png" className="object-cover w-full h-full" />
        </section>
        {/* right */}
        <section className="w-1/2 flex justify-between h-full px-6 py-14 flex-col">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-semibold font-poppins text-black">
              {title}
            </h2>
            <p className="text-sm font-base text-gray-400 mb-6 leading-relaxed">
              Please enter our details
            </p>
          </div>

          {/* form */}
          <div>{children}</div>

          {/* conditional rendering */}
          <div className="flex items-center justify-between mt-6">
            <p className="mr-2 text-base text-gray-600">
              {type === 'login'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>

            {type === 'login' ? (
              <Link
                to="/"
                className="text-blue-500 font-semibold text-base hover:text-blue-700 transition duration-300"
              >
                Register
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-blue-500 font-semibold text-base hover:text-blue-700 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthTemplate;
