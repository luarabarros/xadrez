// Obtém o elemento canvas e seu contexto 2D
const canvas = document.getElementById('chessBoard');
const ctx = canvas.getContext('2d');

// Define o tamanho de cada quadrado e as cores roxas
const squareSize = canvas.width / 8; 
const lightPurple = '#DDA0DD'; // Um roxo claro, como Ameixa
const darkPurple = '#800080';  // Um roxo mais escuro, como Púrpura

// Desenha o tabuleiro
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        // Alterna entre o roxo claro e o roxo escuro
        ctx.fillStyle = (row + col) % 2 === 0 ? lightPurple : darkPurple;
        ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
    }
}