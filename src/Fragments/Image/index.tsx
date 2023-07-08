interface IbackgroundImageProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
export const BackgroundImage = ({children}: IbackgroundImageProps) => {
    return(
        <div className="min-h-screen flex flex-col justify-center bg-no-repeat bg-cover"
            style={{backgroundImage:"url('./src/assets/Rectangle13.png')"}}
        >
            {children}
        </div>
    )
}
=======
export const BackgroundImage = ({ children }: IbackgroundImageProps) => {
  return (
    <div
      className="w-full min-h-screen top-0 left-0 bg-cover bg-center"
      style={{ backgroundImage: "url('./src/assets/Rectangle13.png')" }}
    >
      {children}
    </div>
  );
};
>>>>>>> b7ec42b9f39510f5085b2e17b4b9f9e4bae70706
