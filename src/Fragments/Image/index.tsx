interface IbackgroundImageProps {
  children: React.ReactNode;
}

export const BackgroundImage = ({children}: IbackgroundImageProps) => {
    return(
        <div className="flex flex-col justify-center bg-no-repeat overflow-y:hidden h-[97vh] bg-fixed"
            style={{backgroundImage:"url('./src/assets/Rectangle13.png')"}}
        >
            {children}
        </div>
    )
}
