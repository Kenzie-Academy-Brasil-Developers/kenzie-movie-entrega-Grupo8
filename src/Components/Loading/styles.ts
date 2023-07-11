
import styled from "styled-components";

export const StyledMain = styled.main`
margin: 0;
height: 100vh;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
gap: 10px;
background: radial-gradient(
  white, #171717
  
);

div:nth-child(2){
  margin-top: 10px;
}

p{
  color:#171717;

}

.hand{
  width: 16em;
  height: 8em;
  font-size: 10px;
  position: relative;
  color: rgb(153, 102, 60)
}

.hand::before {
  content: '';
  position: absolute;
  width: 14em;
  height: 4.5em;
  background-color: black;
  border-radius: 4em 1em;
  top: 4em;
  filter: blur(1em) opacity(0.3);
}

.palm {
  position: absolute;
  width: 8em;
  height: 6em;
  background-color: currentColor;
  border-radius: 1em 4em;
  right: 0;
}


.thumb{
  position:absolute;
  width: 9.6em;
  height: 3.2em;
  background-color: currentColor;
  border-radius: 3em 2em 2em 1em;
  right: 0;
  bottom: 1em;
  transform-origin: calc(100% - 2em) 2em;
  transform:rotate(-20deg);
  border-bottom:0.2em solid rgba(0,0,0,0.1);
  border-left: 0cap.2em solid rgba(0,0,0,0.1);
}
.thumb::before{
  content: '';
  position:absolute;
  width:1.9em;
  height: 1.9em;
  background-color:rgba(255,255,255,0.3);
  border-radius: 60% 10% 10% 30%;
  bottom: -0.3em;
  left: 0.5em;
  border-right:0.1em solid rgba(0,0,0,0.1)
}

.finger:not(:first-child){
  position: absolute;
  width: 6.4em;
  height: 3.5em;
  background-color: currentColor;
  right: 5.2em;
  bottom: 4em;
  transform-origin: 100% 2em;
  transform: rotate(10deg);
  --scale: calc(1 - (5 - var(--n)) * 0.2);
  filter: brightness(calc(100% - (5 - var(--n)) * 10%));
  animation: tap-upper 1.2s ease-in-out infinite;
  animation-delay: calc((var(--n) - 2) * 0.1s);
}

.finger:not(:first-child)::before {
  content: '';
  position: absolute;
  width: 9em;
  height: 3em;
  background-color: currentColor;
  right: 4.2em;
  top: 0.2em;
  border-radius: 2em;
  transform-origin: calc(100% - 2em) 2em;
  transform: rotate(-60deg);
}


.thumb,
.finger:nth-child(2),
.finger:nth-child(3),
.finger:nth-child(4),
.finger:nth-child(5) {
  --n: 2;
}

.finger:nth-child(3) {
  --n: 3;
}

.finger:nth-child(4) {
  --n: 4;
}

.finger:nth-child(5) {
  --n: 5;
}

@keyframes tap-upper {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(var(--scale));
  }
  40% {
    transform: rotate(50deg) scale(var(--scale));
  }
}
`