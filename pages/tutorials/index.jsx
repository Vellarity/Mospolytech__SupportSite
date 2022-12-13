import { useEffect } from "react"
import Group from "../../components/TutorialsPage/Group"

const util = require("util")

import { GITHUB, getTreeStructure, getFullTree, getTutorialsTree, getDirs } from "../../helper/globals"

export default function TutorialsPage({groups}){
/*     
    useEffect(()=>{
        for (let item of document.querySelectorAll(".notion-page-link")){
            let link = `tutorials${item.getAttribute('href')}`
            item.setAttribute('href', link)
        }
    },[])
 */
    return(
        <>
            {/* <div className="prose min-w-full prose-h1:text-2xl prose-a:no-underline hover:prose-a:underline"> */}
                {groups.map((item,index) =>{
                    return <Group key={index} groupName={item.name} groupItems={item.children}/>
                })}
            {/* </div> */}
            
        </>
    )
}

export async function getServerSideProps(){
    //let tree = await getTreeStructure(GITHUB.baseString, GITHUB.gitOwner, GITHUB.gitRepo, GITHUB.gitBranch)

    let tree = getTutorialsTree(2)
    let groups = tree.children


    return {props:{groups}}
}