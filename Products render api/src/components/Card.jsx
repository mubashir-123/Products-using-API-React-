/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <figure><img className="h-[10rem]" src={props.src} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.desc.slice(0,100)} ... </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card