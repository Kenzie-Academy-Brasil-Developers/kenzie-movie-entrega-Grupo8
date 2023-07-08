interface IbackgroundImageProps {
  children: React.ReactNode;
}

export const BackgroundImage = ({children}: IbackgroundImageProps) => {
    return(
        <div className="min-h-screen flex flex-col justify-center bg-no-repeat bg-cover"
            style={{backgroundImage:"url('./src/assets/Rectangle13.png')"}}
        >
            {children}
        </div>
    )
}
