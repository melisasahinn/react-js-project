/* eslint-disable react/prop-types */
import { Collapse } from "react-collapse";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const AccordionItem = ({open, toggle, title, desc }) => {
    return (
        <div className="pt-[10px]">
            <div className="bg-white rounded-xl py-[25px] px-[50px] flex justify-between items-center cursor-pointer" onClick={toggle}> 
                <p className="text-[22px] font-semibold">{title}</p>
                <div className="text-[30px]">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className="bg-white mt-[10px] rounded-xl py-8 px-[50px] pb-[30px]">{desc}</div>
            </Collapse>
        </div>
    )
}

export default AccordionItem;

