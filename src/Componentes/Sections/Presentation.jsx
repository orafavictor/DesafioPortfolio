import styles from './Presentation.module.css'
import Button from '../Elements/Button'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Rafael Victor!', 'Estudante de desenvolvimento Full-Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }

    }

    return (
        <div className={styles.Presentation}>
            <h1> Olá, eu sou {text}! </h1>
            <p>
                Sou um grande apaixonado por tecnologia! <br/>
                Como estudante de tecnologia, eu tenho o compromisso de aprender e desenvolver <br/>
                soluções inovadoras e dinâmicas e para trazer resultados aos projetos. <br/>
                Estou sempre em busca de novos conhecimentos, para sempre estar preparado!
            </p>
            <Button link='https://www.linkedin.com/in/orafavictor/' text='Conecte-se Comigo!'/>

        </div>
    )
}

export default Presentation