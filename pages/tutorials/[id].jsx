import React from "react";
import ReactMarkdown from 'react-markdown';

import { getFileText } from "../../helper/globals";

export default function TutorialPage({fileMD}) {
    

    return(
        <div className="MDtext">
            <ReactMarkdown>{fileMD}</ReactMarkdown>
        </div>
    )
}


export async function getServerSideProps(context){
    let pathName = context.params.id
    let path = context.query.path

    console.log(context)
     
    let fullFilePath = path + "/" + pathName + ".md";

    console.log(fullFilePath)
    
    let fileMD = getFileText(fullFilePath, path.replace("public/","/").replaceAll(" ", "%20"))
    
    //console.log(fileMD)

    return {props:{fileMD}}
}