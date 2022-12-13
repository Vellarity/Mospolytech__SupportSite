import React from "react";

export const AboutUs = () =>{
    return(
        <div className="bg-white rounded-2xl p-4 grid gap-y-3">
            <h1 className="text-3xl font-semibold">О нас</h1>
            <div className="text-xl">
                Команда Техподдрежки <strong className="text-cyan-600">FitMospolytech</strong> постарается ответить на любые вопросы, связанные с работой хостинга, 
                и поможет в случае возникновения проблем, которые мешают пользователям размещать свои проекты на внутреннем хостинге, а также работать с базами данных 
                и удалённым сервером.
            </div>
        </div>
    )
}