function getApiUrl() {
    // Verifica se o endereço do site é 'localhost' ou '127.0.0.1'
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Se for, estamos no ambiente de desenvolvimento local
        return 'http://localhost:3001';
    }
    // Caso contrário, assume que estamos no ambiente de produção
    return 'https://barbershop-api-production-f305.up.railway.app';
};