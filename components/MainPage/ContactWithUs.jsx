import React from "react";

export const ContactWithUs = () =>{
    return(
        <div className="bg-white rounded-2xl p-4 grid gap-y-3">
            <h1 className="text-3xl font-semibold">Связаться c нами:</h1>
            <div className="text-xl">
                Если вы не нашли ответ на интересующий вас вопрос, то вы можете связаться с нами лично - мы готовы оказать посильную помощь в решении вашей проблемы.
            </div>
            <div className="inline">
                <span className="text-xl">Наш Telegram: </span>
                <span className="text-xl text-cyan-600">@</span>
                <span className="text-xl underline text-cyan-600">FitMosSupportBot</span>
            </div> 
        </div>
    )
}