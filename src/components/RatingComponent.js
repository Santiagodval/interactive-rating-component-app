import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const RatingComponent = (props) => {

    const [localRating, setLocalRating] = useState(0);

    return (
        <div className="grid grid-cols-5 w-80 place-content-center font-Overpass font-normal bg-DarkBlue  rounded-3xl">
            <div className="grid grid-cols-1 mx-6 mt-6"><div className="bg-ButtonBlue aspect-square rounded-full py-[13px] px-[21px]"><AiFillStar className="text-2xl col-span-1 translate-x-[-7px] text-Orange"></AiFillStar></div></div>
            <h3 className="mt-4 mx-2 text-left col-span-5 text-3xl grid-rows-5 px-4 text-xl text-White">How did we do?</h3>
            <p className="mt-4 mx-2 text-left col-span-5 px-4 text-LightGrey text-xs">Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!</p>
            <div className="grid mt-3 col-span-5 mx-1 my-4">
                <div className="grid grid-cols-5 mx-5 gap-4 place-content-center">
                    <button onClick={() => setLocalRating(1)} className="hover:bg-Orange hover:text-White bg-ButtonBlue aspect-square rounded-full py-2 px-4 text-LightGrey"><div className="translate-y-[3px]">1</div></button>
                    <button onClick={() => setLocalRating(2)} className="hover:bg-Orange hover:text-White bg-ButtonBlue aspect-square rounded-full py-2 px-4 text-LightGrey"><div className="translate-y-[3px]">2</div></button>
                    <button onClick={() => setLocalRating(3)} className="hover:bg-Orange hover:text-White bg-ButtonBlue aspect-square rounded-full py-2 px-4 text-LightGrey"><div className="translate-y-[3px]">3</div></button>
                    <button onClick={() => setLocalRating(4)} className="hover:bg-Orange hover:text-White bg-ButtonBlue aspect-square rounded-full py-2 px-4 text-LightGrey"><div className="translate-y-[3px]">4</div></button>
                    <button onClick={() => setLocalRating(5)} className="hover:bg-Orange hover:text-White bg-ButtonBlue aspect-square rounded-full py-2 px-4 text-LightGrey"><div className="translate-y-[3px]">5</div></button>
                </div>
                <button onClick={() => props.handleSetRating(localRating)} className="uppercase mt-6 bg-Orange mx-5 text-White rounded-full my-4 py-2 hover:bg-White hover:text-Orange">
                    <div className="translate-y-[2px]">submit</div>
                </button>
            </div>
        </div>
    );
}

export default RatingComponent;