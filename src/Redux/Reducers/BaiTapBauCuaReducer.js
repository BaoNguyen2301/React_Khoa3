const initialState = {
  danhSachCuoc: [
    { ma: 'bau', hinhAnh: './img/GameBauCua/bau.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: './img/GameBauCua/cua.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: './img/GameBauCua/ca.png', diemCuoc: 0 },
    { ma: 'ga', hinhAnh: './img/GameBauCua/ga.png', diemCuoc: 0 },
    { ma: 'nai', hinhAnh: './img/GameBauCua/nai.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: './img/GameBauCua/tom.png', diemCuoc: 0 }
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: 'ga', hinhAnh: './img/GameBauCua/ga.png' },
    { ma: 'nai', hinhAnh: './img/GameBauCua/nai.png' },
    { ma: 'tom', hinhAnh: './img/GameBauCua/tom.png' }
  ]
}

const BaiTapBauCuaReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'DAT_CUOC_BAU_CUA': {
      //tim trong danh sach cuoc =. quan cuoc nao dc click se tang hoac giam diem
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            danhSachCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (danhSachCuocUpdate[index].diemCuoc > 0) {
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.danhSachCuoc = danhSachCuocUpdate;

      return { ...state }
    }

    case 'XOC': {
      const mangXucXacNgauNhien = [];
      for(let i = 0; i< 3; i++){
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      // xu ly diem thuong
      mangXucXacNgauNhien.forEach((xucXacNN, index)=>{
        const indexDSCuoc = state.danhSachCuoc.findIndex(qc=>qc.ma === xucXacNN.ma);
        if(indexDSCuoc!== -1){
          state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
        }
      })
      //xu ly hoan tien
      state.danhSachCuoc.forEach((qc, index)=>{
        const xucXacNN = mangXucXacNgauNhien.findIndex(xxnn=>xxnn.ma === qc.ma);
        if(xucXacNN !== -1){
          state.tongDiem += qc.diemCuoc;
        }
      })

      state.danhSachCuoc = state.danhSachCuoc.map((qc, index)=>{
        return {...qc, diemCuoc: 0}
      })
      
      return {...state}
    }

    case 'CHOI_LAI':{
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((qc, index)=>{
        return {...qc,diemCuoc: 0}
      })

      return {...state}
    }

    default: return { ...state }
  }
}

export default BaiTapBauCuaReducer;
