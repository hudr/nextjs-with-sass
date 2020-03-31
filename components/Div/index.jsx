import React from 'react'

import './styles.scss'

export default function Div() {
    return (
        <>
            <div className="component">
                <h1 className="component__h1">Component sem modificadores</h1>
                <p className="component__p">Paragrafo sem modificador</p>
                <button className="component__button">Botão sem modificador</button>
            </div>

            <div className="component component--dark">
                <h1 className="component__h1 component__h1--medium component__h1--white">Component com modificadores</h1>
                <p className="component__p component__p--medium component__p--white">Paragrafo com modificador</p>
                <button className="component__button component__button--medium">Botão com modificador</button>
            </div>

            <div className="component component--red">
                <h1 className="component__h1 component__h1--large component__h1--white">Component com modificadores</h1>
                <p className="component__p component__p--large component__p--white">Paragrafo com modificador</p>
                <button className="component__button component__button--large">Botão com modificador</button>
            </div>
        </>
    )
}