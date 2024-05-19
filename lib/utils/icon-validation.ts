import * as FaIcons from "react-icons/fa";
import * as LuIcons from "react-icons/lu";
import * as HiIcons from "react-icons/hi";

export function isIconNameValid(name?: string): boolean {
  if (!name) {
    return false;
  }

  let IconComponent;

  try {
    if (name.startsWith("Fa")) {
      IconComponent = FaIcons[name as keyof typeof FaIcons];
    } else if (name.startsWith("Lu")) {
      IconComponent = LuIcons[name as keyof typeof LuIcons];
    } else if (name.startsWith("Hi")) {
      IconComponent = HiIcons[name as keyof typeof HiIcons];
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error loading icon:", error);
    return false;
  }

  if (!IconComponent) {
    return false;
  }

  return true;
}
