import React, {useEffect, useState} from 'react';
import { getFireStore } from '../firebase/firebase';
import { Link } from 'react-router-dom';

function SelectCategorias() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const db = getFireStore();
        const categoriasCollection = db.collection('categorias')
        categoriasCollection.get()
        .then((resultado) => {
            let categoriasOk = [];
            resultado.forEach((doc) => {
                categoriasOk.push({ id : doc.id, ...doc.data() });
            })
            setCategorias(categoriasOk)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [])

    return (
        
            categorias.length > 0 ?
                <>
                    {categorias.map((categoria) => {
                        //console.log(typeof categoria.descCategoria);
                        return(<><label>{ categoria.descCategoria }</label><input type='checkbox' key={categoria.id} value={categoria.id} /></>)
                    }) }
                </>
            :
            <p>Nara</p>
       
    )
}

export default SelectCategorias
