import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Consumer(){

    // const objeto = {
    //     nome: 'Abner',
    //     profissao : 'Estudante',
    //     id: 213213,
    //     cpf: 42341234
    // }

    const [makes, setMakes] = useState([])
    useEffect(()=>{

        async function carregaMake(){
            const response = await fetch ("https://makeup-api.herokuapp.com/api/v1/products.json")
            const data = await response.json()
            setMakes(data)
        }
        carregaMake()
    },[])

    useEffect(()=>{
        document.tittle = "use-effects atualizado"

    },[makes])

    return(
        <div>
            <h1>Lista de usuários do GitHub</h1>
            <ul>
                {makes.map((make)=>
                    <li key={make.id}>
                        <h2>{make.name}</h2>
                        <img src={make.image_link} alt={make.name} />
                        <p><a href={make.product_link}>Clique aqui para a compra</a></p>
                    </li>
                )}
            </ul>
            
        </div>
    )
}

/* Exercicio
1 - Recuperar os dados da api externa:
a - https://makeup-api.herokuapp.com/

2 - Monte um pequeno componente de apresentacao com os dados recebidos do EndPoint
3 - Formate com css inline e atraves de objetos */