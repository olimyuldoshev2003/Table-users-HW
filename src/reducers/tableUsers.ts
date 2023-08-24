import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// Define a type for the slice state

export interface IData {
  id: number;
  img: string;
  name: string;
  surname: string;
  email: string;
  city: string;
  status: string;
  mobile_phone: number | string;
  complete: boolean;
}

export interface TableUsersState {
  data: IData[];
  addModal: boolean;
  imgAdd: string;
  nameAdd: string;
  surnameAdd: string;
  emailAdd: string;
  cityAdd: string;
  statusAdd: string;
  mobile_phoneAdd: number | string;
  editModal: boolean;
  idxEdit: number;
  imgEdit: string;
  nameEdit: string;
  surnameEdit: string;
  emailEdit: string;
  cityEdit: string;
  statusEdit: string;
  mobile_phoneEdit: number | string;
}

// Define the initial state using that type
const initialState: TableUsersState = {
  data: [
    {
      id: 1,
      img: "/src/assets/Avatar.png",
      name: "Jacob",
      surname: "Jones",
      email: "jackson.graham@example.com",
      city: "Dushanbe",
      status: "INACTIVE",
      mobile_phone: 888880090,
      complete: false,
    },
    {
      id: 2,
      img: "/src/assets/Avatar(1).png",
      name: "Jenny",
      surname: "Wilson",
      email: "jessica.hanson@example.com",
      city: "Kulob",
      status: "INACTIVE",
      mobile_phone: 888880090,
      complete: false,
    },
    {
      id: 3,
      img: "/src/assets/Avatar(2).png",
      name: "Guy",
      surname: "Hawkins",
      email: "bill.sanders@example.com",
      city: "Dushanbe",
      status: "INACTIVE",
      mobile_phone: 888880090,
      complete: false,
    },
    {
      id: 4,
      img: "/src/assets/Avatar(3).png",
      name: "Cody",
      surname: "Fisher",
      email: "michael.mitc@example.com",
      city: "Bokhtar",
      status: "ACTIVE",
      mobile_phone: 888880090,
      complete: false,
    },
    {
      id: 5,
      img: "/src/assets/Avatar(4).png",
      name: "Esther",
      surname: "Howard",
      email: "felicia.reid@example.com",
      city: "Dushanbe",
      status: "ACTIVE",
      mobile_phone: 888880090,
      complete: false,
    },
    {
      id: 6,
      img: "/src/assets/Avatar(5).png",
      name: "Kristin",
      surname: "Watson",
      email: "kenzi.lawson@example.com",
      city: "Khujand",
      status: "ACTIVE",
      mobile_phone: 888880090,
      complete: false,
    },
    {
      id: 7,
      img: "/src/assets/Avatar(6).png",
      name: "Dianne",
      surname: "Russell",
      email: "deanna.curtis@example.com",
      city: "Dushanbe",
      status: "INACTIVE",
      mobile_phone: 888880090,
      complete: false,
    },
    {
      id: 8,
      img: "/src/assets/Avatar(7).png",
      name: "Ronald",
      surname: "Richards",
      email: "tim.jennings@example.com",
      city: "Hisor",
      status: "ACTIVE",
      mobile_phone: 888880090,
      complete: false,
    },
  ],
  addModal: false,
  imgAdd: "",
  nameAdd: "",
  surnameAdd: "",
  emailAdd: "",
  cityAdd: "",
  statusAdd: "",
  mobile_phoneAdd: "",
  editModal: false,
  idxEdit: 0,
  imgEdit: "",
  nameEdit: "",
  surnameEdit: "",
  emailEdit: "",
  cityEdit: "",
  statusEdit: "",
  mobile_phoneEdit: "",
};

export const TableUsersSlice = createSlice({
  name: "TableUsers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openAddModal(state: TableUsersState) {
      state.addModal = true;
    },
    handleClose(state: TableUsersState) {
      state.addModal = false;
      state.editModal = false;
    },
    setAddImg(state: TableUsersState, action: PayloadAction<string>) {
      state.imgAdd = action.payload;
    },
    setAddName(state: TableUsersState, action: PayloadAction<string>) {
      state.nameAdd = action.payload;
    },
    setAddSurname(state: TableUsersState, action: PayloadAction<string>) {
      state.surnameAdd = action.payload;
    },
    setAddEmail(state: TableUsersState, action: PayloadAction<string>) {
      state.emailAdd = action.payload;
    },
    setAddCity(state: TableUsersState, action: PayloadAction<string>) {
      state.cityAdd = action.payload;
    },
    setAddStatus(state: TableUsersState, action: PayloadAction<string>) {
      state.statusAdd = action.payload;
    },
    setAddPhone(state: TableUsersState, action: PayloadAction<string>) {
      state.mobile_phoneAdd = action.payload;
    },
    setEditImg(state: TableUsersState, action: PayloadAction<string>) {
      state.imgEdit = action.payload;
    },
    setEditName(state: TableUsersState, action: PayloadAction<string>) {
      state.nameEdit = action.payload;
    },
    setEditSurname(state: TableUsersState, action: PayloadAction<string>) {
      state.surnameEdit = action.payload;
    },
    setEditEmail(state: TableUsersState, action: PayloadAction<string>) {
      state.emailEdit = action.payload;
    },
    setEditCity(state: TableUsersState, action: PayloadAction<string>) {
      state.cityEdit = action.payload;
    },
    setEditStatus(state: TableUsersState, action: PayloadAction<string>) {
      state.statusEdit = action.payload;
    },
    setEditPhone(state: TableUsersState, action: PayloadAction<string>) {
      state.mobile_phoneEdit = action.payload;
    },
    addUser(state: TableUsersState, action) {
      action.payload.preventDefault();
      const newObj = {
        id: Date.now(),
        img: state.imgAdd,
        name: state.nameAdd,
        surname: state.surnameAdd,
        email: state.emailAdd,
        city: state.cityAdd,
        status: state.statusAdd,
        mobile_phone: state.mobile_phoneAdd,
        complete: false,
      };

      state.data = [...state.data, newObj];
      state.addModal = false;
      state.imgAdd = "";
      state.nameAdd = "";
      state.surnameAdd = "";
      state.emailAdd = "";
      state.cityAdd = "";
      state.statusAdd = "";
      state.mobile_phoneAdd = 0;
    },
    deleteUser(state, action) {
      state.data = state.data.filter((item: IData) => {
        return item.id !== action.payload;
      });
    },
    openModalEdit(state, action) {
      state.editModal = true;
      state.imgEdit = action.payload.img;
      state.nameEdit = action.payload.name;
      state.surnameEdit = action.payload.surname;
      state.emailEdit = action.payload.email;
      state.cityEdit = action.payload.city;
      state.statusEdit = action.payload.status;
      state.mobile_phoneEdit = action.payload.mobile_phone;
    },
    editUser(state: TableUsersState, action) {
      action.payload.preventDefault();
      console.log(action.payload);
      state.data = state.data.map((item) => {
        if (item.id === state.idxEdit) {
          item.img = state.imgEdit;
          item.name = state.surnameEdit;
          item.surname = state.surnameEdit;
          item.email = state.emailEdit;
          item.city = state.cityEdit;
          item.status = state.statusEdit;
          item.mobile_phone = state.mobile_phoneEdit;
        }

        
      });
    },
  },
});

export const {
  openAddModal,
  handleClose,
  setAddImg,
  setAddName,
  setAddSurname,
  setAddEmail,
  setAddCity,
  setAddStatus,
  setAddPhone,
  setEditImg,
  setEditName,
  setEditSurname,
  setEditEmail,
  setEditCity,
  setEditStatus,
  setEditPhone,
  addUser,
  deleteUser,
  openModalEdit,
  editUser
} = TableUsersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.tableUsers.data;

export default TableUsersSlice.reducer;
