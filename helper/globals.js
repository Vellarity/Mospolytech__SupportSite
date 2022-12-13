const dirTree = require("directory-tree")
import * as fs from "fs"

/* Для интеграции с GIT (плохой вариант) */
export const GITHUB = {
    baseString: "https://api.github.com/repos/{owner}/{repo}/git/trees/{branch}",
    gitOwner: "user133727",
    gitRepo: "MD-GUIDE",
    gitBranch:"master"
}
export async function getTreeStructureGIT(link, _gitOwner, _gitRepo, _gitBranch){
    if (_gitOwner) link = link.replace("{owner}",_gitOwner)
    if (_gitRepo)  link = link.replace("{repo}", _gitRepo)
    if (_gitBranch)  link = link.replace("{branch}", _gitBranch)
    
    let req = await fetch(link)
    let tree = await req.json()

    return tree
}
export async function getFullTreeGIT(){
    let tree = dirTree("/MD-GUIDE")

    console.log(tree)


/* 
    if (_gitOwner) link = link.replace("{owner}",_gitOwner)
    if (_gitRepo)  link = link.replace("{repo}", _gitRepo)
    if (_treeSHA)  link = link.replace("{branch}", _treeSHA)

    console.log(link + new URLSearchParams({recursive:1}).toString())
    
    let req = await fetch(link + "?" + new URLSearchParams({recursive:1}))
    let fullTree = await req.json()

    console.log(fullTree)

    return fullTree
 */
/* 
    if (tree.tree){
        console.log(tree)
        for (let item of tree.tree){
            let children = await getTreeStructure(item.url)
            item.tree = children
        }
        return getFullTree(tree.tree[0])
    }
    else{
        console.log(util.inspect(tree, {showHidden: false, depth: null, colors: true}))
        return tree
    }
 */
/* 
    if (parentTree.type === "tree"){
        parentTree.children = []
        let newTree = await getTreeStructure(parentTree.url)
        parentTree.children.push(newTree)
        return getFullTree(newTree)
    }
    else{
        return parentTree
    }
*/
}
/* Для интеграции с GIT (плохой вариант) */


/* В использовании */
export function getTutorialsTree(_depth){
    let tree = dirTree("./public/MD-GUIDE/Руководства", {depth:_depth ? _depth : 0, normalizePath:true, exclude:/.git/})

    return tree
}

export function getDirs(path){
    let dirs = fs.readdirSync(path)

    return dirs
}

export function getFileText(path, _imgPath){
    let contents = fs.readFileSync(path).toString()

    contents = updateFileImg(contents, _imgPath)

    return contents
}

function updateFileImg(content, _imgPath){
    let images = content.match(/\d*.png/g)

    for (let image of images){
        content = content.replace(image, _imgPath + "/" + image)
    }

    return content
}

/* В использовании */
