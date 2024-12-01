import myImage from '../assets/image.png';

const Banner = () => {
    return (
        <div className="flex bg-gray-200 p-20">
            <div>
                <h2 className="text-6xl font-extrabold pb-10">Books to freshen up <br /> your bookshelf</h2>
                <button className="btn btn-primary">View The List</button>
            </div>
            <img src={myImage} alt="" />
        </div>
    );
};

export default Banner;