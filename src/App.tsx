import React from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addUser, deleteUser, editUser, handleClose, openAddModal, openModalEdit, setAddCity, setAddEmail, setAddImg, setAddName, setAddPhone, setAddStatus, setAddSurname, setEditCity, setEditEmail, setEditImg, setEditName, setEditPhone, setEditStatus, setEditSurname } from "./reducers/tableUsers";
import { Box, Modal } from "@mui/material";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaLongArrowAltUp } from "react-icons/fa";

const App = () => {
  // const dispatch = useAppDispatch()
  const data = useAppSelector((store) => store.tableUsers.data);
  const addModal = useAppSelector((store) => store.tableUsers.addModal);
  const imgAdd = useAppSelector((store) => store.tableUsers.imgAdd);
  const nameAdd = useAppSelector((store) => store.tableUsers.nameAdd);
  const surnameAdd = useAppSelector((store) => store.tableUsers.surnameAdd);
  const emailAdd = useAppSelector((store) => store.tableUsers.emailAdd);
  const cityAdd = useAppSelector((store) => store.tableUsers.cityAdd);
  const statusAdd = useAppSelector((store) => store.tableUsers.statusAdd);
  const mobile_phoneAdd = useAppSelector((store) => store.tableUsers.mobile_phoneAdd);
  const editModal = useAppSelector((store) => store.tableUsers.editModal);
  const imgEdit = useAppSelector((store) => store.tableUsers.imgEdit);
  const nameEdit = useAppSelector((store) => store.tableUsers.nameEdit);
  const surnameEdit = useAppSelector((store) => store.tableUsers.surnameEdit);
  const emailEdit = useAppSelector((store) => store.tableUsers.emailEdit);
  const cityEdit = useAppSelector((store) => store.tableUsers.cityEdit);
  const statusEdit = useAppSelector((store) => store.tableUsers.statusEdit);
  const mobile_phoneEdit = useAppSelector((store) => store.tableUsers.mobile_phoneAdd);
  const dispatch = useAppDispatch()



  return (
    <div>
      <header className="header px-[40px] mt-[30px]">
        <div className="block_1_header flex justify-between items-center">
          <div>
            <h1 className="text-[#343A40] text-[28px] font-[500]">User List</h1>
          </div>
          <div>
            <button
              className="flex items-center gap-[10px] text-[24px] font-[700] text-[#fff] bg-[#2385d0] p-[5px_30px]"
              onClick={() => dispatch(openAddModal())}
            >
              <AiOutlinePlus />
              New
            </button>
          </div>
        </div>
        <div className="block_2_header"></div>
      </header>
      <section className="section flex flex-col  mt-[30px] px-[40px]">
        <div className="block_text_icon flex justify-between items-center pr-[160px] text-[#40464C] text-[14px] font-[500] py-[10px] border-[1px] border-[#cac9c9] bg-[#ededed]">
          <div className="block_1_text_icon flex items-center gap-[10px] text-[19px]">
            <AiOutlineUser />
            <h2>Name</h2>
          </div>
          <div className="block_2_text_icon flex items-center justify-end gap-[10px] text-[19px] w-[220px] ">
            <AiFillLock />
            <h2>City</h2>
          </div>
          <div className="block_3_text_icon flex items-center gap-[10px] text-[19px] w-[120px]">
            <BiTimeFive />
            <h2>Status</h2>
            <FaLongArrowAltUp />
          </div>
          <div className="block_4_text_icon flex items-center gap-[10px] text-[19px] w-[130px]">
            <AiFillTag />
            <h2>Phone</h2>
          </div>
        </div>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-[195px] py-[10px] border-[1px] border-[#cac9c9] bg-[#ededed]"
            >
              <div className="block_1_section flex items-center gap-[20px]">
                <img src={item.img} className="w-[60px] h-[60px] rounded-full" alt="" />
                <div>
                  <h4 className="text-[#40464C] text-[16px] font-[600] flex items-center gap-[10px]">
                    {item.name}
                    <span>{item.surname}</span>
                  </h4>
                  <a href="" className="text-[#696C71] text-[14px] font-[500]">
                    {item.email}
                  </a>
                </div>
              </div>
              <div className="block_2_section">
                <h2 className="text-[#40464C] text-[15px] font-[500]">
                  {item.city}
                </h2>
              </div>
              <div className="block_3_section">
                {item.status === "ACTIVE" ? (
                  <h3 className="bg-[#259323] text-[#fff] p-[5px_12px]">
                    {item.status}
                  </h3>
                ) : (
                  <h3 className="bg-[#748998] text-[#fff] p-[5px_12px]">
                    {item.status}
                  </h3>
                )}
              </div>
              <div className="block_4_section">
                <h2 className="text-[#40464C] text-[16px] font-[600]">
                  {item.mobile_phone}
                </h2>
              </div>
              <div className="block_5_section flex flex-col gap-[20px]">
                {/* <button className="text-[23px]">
                  <BsThreeDots />
                </button> */}
                <button
                  className=""
                  onClick={() => dispatch(deleteUser(item.id))}
                >
                  Delete
                </button>
                <button
                  className=""
                  onClick={() => dispatch(openModalEdit(item))}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}

        <Modal
          className="flex justify-center items-center flex-col"
          open={addModal}
          onClose={() => dispatch(handleClose())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="flex justify-center items-center flex-col w-[320px] h-[500px] bg-[#fff] gap-[10px]">
            <form
              action=""
              className=" flex flex-col  bg-[#fff] gap-[10px]"
              onSubmit={(event) =>
                dispatch(addUser(event))
              }
            >
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={imgAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setAddImg(event.target.value))
                }
                placeholder="Image"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={nameAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setAddName(event.target.value))
                }
                placeholder="Name"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={surnameAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setAddSurname(event.target.value))
                }
                placeholder="Surname"
              />
              <input
                type="email"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={emailAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setAddEmail(event.target.value))
                }
                placeholder="Email"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={cityAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setAddCity(event.target.value))
                }
                placeholder="City"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={statusAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setAddStatus(event.target.value))
                }
                placeholder="Status"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={mobile_phoneAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setAddPhone(event.target.value))
                }
                placeholder="Number phone"
              />
              <button
                className="flex items-center gap-[10px] text-[24px] font-[700] text-[#fff] bg-[#2385d0] p-[5px_30px]"
                type="submit"
              >
                <AiOutlinePlus />
                ADD
              </button>
            </form>
          </Box>
        </Modal>
        <Modal
          className="flex justify-center items-center flex-col"
          open={editModal}
          onClose={() => dispatch(handleClose())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="flex justify-center items-center flex-col w-[320px] h-[500px] bg-[#fff] gap-[10px]">
            <form
              action=""
              className=" flex flex-col  bg-[#fff] gap-[10px]"
              onSubmit={(event) =>
                dispatch(editUser(event))
              }
            >
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={imgEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEditImg(event.target.value))
                }
                placeholder="Image"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={nameEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEditName(event.target.value))
                }
                placeholder="Name"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={surnameEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEditSurname(event.target.value))
                }
                placeholder="Surname"
              />
              <input
                type="email"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={emailEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEditEmail(event.target.value))
                }
                placeholder="Email"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={cityEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEditCity(event.target.value))
                }
                placeholder="City"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={statusEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEditStatus(event.target.value))
                }
                placeholder="Status"
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[#000] p-[5px_20px] rounded-[20px]"
                value={mobile_phoneEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEditPhone(event.target.value))
                }
                placeholder="Number phone"
              />
              <button
                className="flex items-center gap-[10px] text-[24px] font-[700] text-[#fff] bg-[#2385d0] p-[5px_30px]"
                type="submit"
              >
                <AiOutlinePlus />
                Edit
              </button>
            </form>
          </Box>
        </Modal>
      </section>
    </div>
  );
};

export default App;
