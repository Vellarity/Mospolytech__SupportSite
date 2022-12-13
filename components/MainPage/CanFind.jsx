import React from "react";

export const CanFind = () =>{
    return(
        <div className="bg-white rounded-2xl p-4 grid gap-y-3">
            <h1 className="text-3xl font-semibold">На этом сайте вы можете найти:</h1>
            <ol type="1" className="list-decimal text-xl pl-10">
                <li>Руководства по настройке и работе с различными IDE</li>
                <li>Инструкции по решению часто-встречающихся проблем, связанных с хостингом</li>
                <li>Обзорные материалы по различным инструментам разработки</li>
            </ol>
            <div className="text-xl">А также большое количество полезной информации по впоросам работы с хостингом.</div>
        </div>
    )
}