import ButtonPrimary from "../ui/buttons/ButtonPrimary";
import ButtonViewOnly from "../ui/buttons/ButtonViewOnly";
import MetaText from "../ui/tags/MetaText";
import Pill from "../ui/tags/Pill";




export default function BoardWrapperHeader() {
    return (
        <div className="text-white flex justify-between items-center mb-[14px] border-b border-[rgba(15,23,42,0.9)] pt-[2px] pr-[4px] pl-[2px] pb-[14px]">
            <div className="flex items-center gap-[10px]">
                <Pill>React · Practice</Pill>
                <MetaText>Simple 3-column layout</MetaText>
            </div>
            <div className="flex items-center gap-[10px]">
                <ButtonViewOnly>View only</ButtonViewOnly>
                <ButtonPrimary>
                    <span className="text-[13px] text-white">+</span>
                    <span className="text-white">New column</span>
                </ButtonPrimary>
            </div>
        </div>
    )
}