function MeuComponente() {
    let nome = "Matheus"
    return (
        <div>
            <h1>Olá, React</h1>
            <p>O meu nome é {nome}</p>
        </div>
    )
}
let root = document.getElementById('root')
ReactDOM.render(<MeuComponente />, root);
