import { SwitchTheme } from '../switchTheme';
import { SwitchLanguage } from '../switchLanguage';
import * as Index from "./index";

export const OptionsList = () => {
  return (
    <Index.List>
      <Index.ListItem disablePadding>
        <Index.ListItemButton>
          <Index.ListItemIcon>
            <SwitchTheme />
          </Index.ListItemIcon>
          <Index.ListItemText />
        </Index.ListItemButton>
      </Index.ListItem>
      <Index.ListItem disablePadding>
        <Index.ListItemButton>
          <Index.ListItemIcon>
            <SwitchLanguage />
          </Index.ListItemIcon>
          <Index.ListItemText />
        </Index.ListItemButton>
      </Index.ListItem>
    </Index.List>
  )
}