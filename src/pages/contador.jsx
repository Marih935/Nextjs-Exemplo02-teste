import { useEffect, useState } from "react"
import axios from "axios";

export default function Contador() {
    const [numero, setNumero] = useState(0); //cria estado
    const [tempo, setTempo] = useState(0);
    const [repos, setRepos] = useState(null);

    const url = "https://api.github.com/users/jobsontn/repos";

    useEffect(() => {
        console.log("Componente criado");
        const interval = setInterval(tic, 1000); //deve ser destruído quando o componente morrer
        axios.get(url)
            .then(function (response) {
                setRepos(response);
            })
        return() => clearInterval(interval); //só é chamado para matar interval
    }, []) //executa apenas uma vez, na primeira vez

    useEffect(() => {
        if (numero > 9) setNumero(0);
    }, [numero]) //toda fez q numero rodar, useeffect funciona

    console.log('Renderizou!'); //quando for redesenhado aparece

    function incrementar() {
        setNumero(numero + 1);
        console.log(`${numero} + 1`);
    }

    function tic() {
        setTempo((tempo) => tempo + 1); //função elo resumida = passa o valor do parâmetro
    }
    
    return (
        <div>
            <h1>Contador {numero}</h1>
            <h1>Tempo: {tempo}</h1> {/*apenas 1{} = inserir javascript*/}
            <button onClick={incrementar}>Incrementar</button>
            <h1>repo: {repos[0].full_name}</h1>
        </div>
    )
}