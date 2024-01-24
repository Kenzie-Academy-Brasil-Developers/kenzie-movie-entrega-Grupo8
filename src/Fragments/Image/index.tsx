interface IbackgroundImageProps {
  children: React.ReactNode;
}

export const BackgroundImage = ({children}: IbackgroundImageProps) => {
    return(
        <div className="flex flex-col justify-center items-center bg-no-repeat bg-cover w-full h-full"
            style={{backgroundImage:"url('./src/assets/Rectangle13.svg')"}}
        >       
            {children}
        </div>
    )
}
