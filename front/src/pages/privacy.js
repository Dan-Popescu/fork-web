import React from "react";

export class Privacy extends React.Component {
    render() {
        return (
            <div class={"container-page-privacy"}>
                <h1>Traitement des données personnelles et conformité RGPD</h1>
                <h3>Traitement des données personnelles et conformité RGPD
                    C2SMR s'engage à effectuer un traitement des ces
                    données à des fins strictement opérationnelles et non
                    commerciales tout en se conformant au respect de la
                    réglementation en vigueur (RGPD).</h3>
                <h2>Notre utilisation de Google Analytics :</h2>
                <h3>Via Google Analytics, nous récoltons seulement des indicateurs
                    anonymisés à visée exclusivement statistique :
                    <ul>
                        <li>Nombre de d'affichage de la page internet.</li>
                        <li>Nombre de téléchargements de l'application.</li>
                    </ul>
                </h3>
            </div>
        );
    }
}