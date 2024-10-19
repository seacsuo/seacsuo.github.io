/* eslint-disable jsx-a11y/iframe-has-title */

const RegistrationForm = ({ regLink }) => {
    return (
        <div className="bg-rosybrown  py-10">
            <h1 className='title text-center '> Register </h1>
            <iframe className="w-screen min-h-screen m-auto mt-10"
                src={regLink + '?embedded=true'}
                frameborder="0">
                Loading…
            </iframe>
        </div>
    );
}

export default RegistrationForm;