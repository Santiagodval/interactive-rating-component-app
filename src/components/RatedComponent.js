

const RatedComponent = ({rating}) => {
    return(
        <div className="grid grid-cols-5 w-80 justify-items-center place-content-center font-Overpass font-normal bg-DarkBlue  rounded-3xl">
            <img className="grid col-span-5 place-content-center mt-8" src={require("../illustration-thank-you.svg").default}></img>
            <p className="col-span-5 mt-6 bg-ButtonBlue mx-5 text-Orange rounded-full pb-1 pt-2 px-4">You selected {rating} out of 5</p>
            
            <p className="col-span-5 text-xl text-White mt-4">Thank you!</p>
        
            <p className="col-span-5 text-xs text-LightGrey mt-4 mb-6 mx-8">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </div>
    )
}

export default RatedComponent;