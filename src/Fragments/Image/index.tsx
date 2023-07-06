import React from "react"

export const BackgroundImage: React.FC = () => {
    return(
        <div className="fixed inset-0 overflow-hidden flex items-start">
            <img src="./src/assets/Rectangle13.png" alt="Imagem de fundo"
                className="w-full h-full object-cover z-0"
            />
        </div>
    )
}