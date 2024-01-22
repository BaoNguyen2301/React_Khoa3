const initialState = {
    danhSachCuoc: [
        {ma: 'bau', hinhAnh: './img/GameBauCua/bau.png',diemCuoc: 0},
        {ma: 'cua', hinhAnh: './img/GameBauCua/cua.png',diemCuoc: 0},
        {ma: 'ca', hinhAnh: './img/GameBauCua/ca.png',diemCuoc: 0},
        {ma: 'ga', hinhAnh: './img/GameBauCua/ga.png',diemCuoc: 0},
        {ma: 'nai', hinhAnh: './img/GameBauCua/nai.png',diemCuoc: 0},
        {ma: 'tom', hinhAnh: './img/GameBauCua/tom.png',diemCuoc: 0}
    ],
    tongDiem: 1000,
    mangXucXac:[
        {ma: 'ga', hinhAnh: './img/GameBauCua/ga.png'},
        {ma: 'nai', hinhAnh: './img/GameBauCua/nai.png'},
        {ma: 'tom', hinhAnh: './img/GameBauCua/tom.png'}
    ]
}

const BaiTapBauCuaReducer = (state = initialState, action) => {
  switch (action.type) {

  case '':{

    return {...state}
  }

  default: return {...state}
  }
}

export default BaiTapBauCuaReducer;
