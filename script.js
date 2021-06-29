var limpaDisplay = 1
var operadorSelecionado = null;
var total = 0;
var dispAtual = '';
var numeroPressionado = 0;
var ponto = 0

function novo_Display(update) {
    numeroPressionado = 1;
    if (limpaDisplay == 0) {
        $('.op-atual').text($('.op-atual').text() + update);
    }
    else if (limpaDisplay == 1) {
        $('.op-atual').text('');
        $('.op-atual').text($('.op-atual').text() + update);
        limpaDisplay = 0;
    }
}

function botaoOperador(operador) {
    if (numeroPressionado == 1) {
        dispAtual = parseFloat($('.op-atual').text());
        operadorSelecionado = operador;
        total = dispAtual;
        $('.op-atual').text(total);
        limpaDisplay = 1;
        numeroPressionado = 0;
        ponto = 0;
    }   else if (numeroPressionado == 0) {
        operadorSelecionado = operador;
    }
}

function botDelete() {
    let valorOpAtual = $('.op-atual').text();
    $('.op-atual').text(valorOpAtual.substring(0, valorOpAtual.length - 1));
    
}

$('.botaoNum').on('click', function () {
    let numPress = $(this).val();
    novo_Display(numPress);

})

$('.botaoPonto').on('click', function () {
    if (ponto == 0) {
    let dotPress = $(this).val();
    novo_Display(dotPress);
    ponto = 1;
    }   
})

$('.botaoOpera').on('click', function () {
    var OperaPress = $(this).html();
    botaoOperador(OperaPress);
    novo_Display(OperaPress)
    $('.op-anterior').text(total);
})

$("#clear").on('click', function () {
    numeroPressionado = 0;
    operadorSelecionado = null;
    total = 0;
    limpaDisplay = 0;
    ponto = 0;
    $('.op-atual').text('');
    $('.op-anterior').text('');
    novo_Display('');
})

$('#del').on('click', botDelete)

$('#botaoIgual').on('click', function () {

    if (operadorSelecionado != null) {
        if (operadorSelecionado == '+') {
            total = total + parseFloat($('.op-atual').text());
        }
        else if (operadorSelecionado == '-') {
            total = total - parseFloat($('.op-atual').text().replace(/[^\d.]/g, ''));
        }
        else if (operadorSelecionado == '*') {
            total = total * parseFloat($('.op-atual').text().replace(/[^\d.]/g, ''));
        }
        else if (operadorSelecionado == '÷') {
            total = total / parseFloat($('.op-atual').text().replace(/[^\d.]/g, ''));
        }
        $('.op-atual').text(total);
        operadorSelecionado = null;
        limpaDisplay = 1
    }
})