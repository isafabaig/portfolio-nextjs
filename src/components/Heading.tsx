import React from "react";



interface propsType {
    // title: string;
    title: React.ReactNode;
}

const Heading: React.FC<propsType> = ({title}) => {
    return(
        <div id="projects" className="font-bold text-6xl flex justify-center items-center pt-24 scroll-mt-20">
             <p className=" border-b-7 inline-block pb-10 m-5">{title}</p>

        </div> 
    )
}

export default Heading
    