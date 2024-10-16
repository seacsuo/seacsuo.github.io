import '../output.css';
import bgImage from '../imgs/preciousmemoriesvietnam.jpg';


function HomeScreen() {
    return (
        <div id="landing" className=" w-screen h-screen relative overflow-hidden">
            <img
                className="absolute inset-0 object-cover w-full h-full "
                src={bgImage}
                alt="cover"
            />
            <div className="relative flex flex-col justify-center items-center h-full p-4 glass-sienna">
                <h1 className="text-4xl xl:text-7xl 2xl:text-9xl  font-extrabold text-white text-center ">
                    Let's Have Fun
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    with SEAC!
                </h1>
                <a href="#about" className="btn-dsb mt-10 text-1xl lg:text-4xl">
                    Join now
                </a>
            </div>
        </div>
    );
}

export default HomeScreen;