import { isHasProperty } from "../../utils";

export const createStyleColumnHeader = (obj, i) => {
    if (isHasProperty(obj, "width")) return { width: obj.width };
    if (i === 0) return { minWidth: "130px" };

    return {};
}
