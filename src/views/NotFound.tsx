const NotFound = () => {

    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500">404</h1>
                <p className="mt-4 text-lg">Página não encontrada</p>
                <a href="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Voltar para a página inicial</a>
            </div>
        </div>
    )

}

export default NotFound;