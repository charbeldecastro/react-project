import { livros } from './dadosUltimosLancamentos'

function UltimosLancamentos() {
    return (
        <section>
            <h2>ULTIMOS LANCAMENTOS</h2>
            { livros.map( livro => (
                <img alt=""src={livro.src}/>
            ) ) }
        </section>
    )
}

export default UltimosLancamentos
