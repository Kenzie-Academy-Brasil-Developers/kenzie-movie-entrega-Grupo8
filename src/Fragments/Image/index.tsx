import React, { Children } from "react"

interface IbackgroundImageProps {
    children: React.ReactNode;
}

export const BackgroundImage = ({children}: IbackgroundImageProps) => {
    return(
        <div className="w-full min-h-screen top-0 left-0 bg-cover bg-center"
            style={{backgroundImage:"url('./src/assets/Rectangle13.png')"}}
        >
            {children}
        </div>
    )
}