// HOOKS
// Existem hooks (funcões) no react que servem para mudar o estado de um objeto.

import { useState, useEffect, useMemo, useCallback } from "react";
//useState retorna um array com o estado do objeto e uma função que muda o estado deste objeto
//useEffect serve para gerencia quando um componente está renderizando ou sofrendo alguma alteração em seu estado
//useMemo serve para memorizar algum ação ou cálculo ou valor sem a necessidade de renderizar de novo.
//useCallback serve para memorizar uma função 
const Teste = () =>{
    
    const [name, setName] = useState('Philipe');

    const handLeChangeName = () =>{
        //altera o estado do componente com base no valor existente e muda para o valor novo no formato <> ? <> : <>
        setName(prev => prev === 'Jose' ? 'Philipe' : 'Jose')
    }


   // useEffect(() => {
   //     handleChangeUser()
   // }, [])

    const calculo = useMemo( () => {
       return  10 * 12312;
    }, [])

    return (
        <div>
            <p> {name} </p>
            <button onClick={handLeChangeName}>Alterar</button>
        </div>
        
    )
}

export  { Teste };