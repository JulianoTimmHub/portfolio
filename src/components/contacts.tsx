import { SwitchLanguage } from "./switchLanguage";
import { SwitchColor } from "./switchColor";

export const Contacts = () => {
    return (
        <div className="w-6/12 flex items-center justify-end gap-4 flex-nowrap">
            <SwitchLanguage />
            <SwitchColor />
        </div >
    )
}