import Link from "next/link";
import * as Index from "./index";
import { ELinks } from "@/enum/e-links";

export const ContactsList = () => {
  return (
    <Index.List>
      <Index.ListItem key='Github' disablePadding>
        <Index.ListItemButton>
          <Index.ListItemIcon>
            <Link href={ELinks.GITHUB} target="_blank">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github-dark.svg')] dark:bg-[url('/contacts/github-light.svg')] hover:!bg-[url('/contacts/github-original.svg')] bg-cover w-[30px] h-[30px]" />
            </Link>
          </Index.ListItemIcon>
          <Index.ListItemText primary='Github' />
        </Index.ListItemButton>
      </Index.ListItem>
      <Index.ListItem key='linkedin' disablePadding>
        <Index.ListItemButton>
          <Index.ListItemIcon>
            <Link href={ELinks.LINKEDIN} target="_blank">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/linkedin-dark.svg')] dark:bg-[url('/contacts/linkedin-light.svg')] hover:!bg-[url('/contacts/linkedin-original.svg')] bg-cover w-[30px] h-[30px]" />
            </Link>
          </Index.ListItemIcon>
          <Index.ListItemText primary='linkedin' color='#ffffff' />
        </Index.ListItemButton>
      </Index.ListItem>
      <Index.ListItem key='WhatsApp' disablePadding>
        <Index.ListItemButton>
          <Index.ListItemIcon>
            <Link href={ELinks.WHATSAPP} target="_blank">
              <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/whatsapp-dark.svg')] dark:bg-[url('/contacts/whatsapp-light.svg')] hover:!bg-[url('/contacts/whatsapp-original.svg')] bg-cover w-[30px] h-[30px]" />
            </Link>
          </Index.ListItemIcon>
          <Index.ListItemText primary='WhatsApp' />
        </Index.ListItemButton>
      </Index.ListItem>
    </Index.List>
  )
}