const initialState = {
    nome: 'Leonardo Oliveira',
    rua: 'Rua Palhoça, ',
    num: '162, ',
    complemento: 'casa 1, ',
    bairro: 'Jardim Record, ',
    cidade: 'Taboão da Serra',
    estado: '/SP',
    mail: 'Leonardo565@gmail.com'

}
const userReducer = (state = [], action) =>{
    if(state.length == 0) {
        return initialState;
    }
    return state;
};

export default userReducer;