import * as typesInfor from "../types/informationTypes";
import * as typesChange from "../types/changeTypes";

export const saveInformationStep1Action = (data) => {
    return {
        type: typesInfor.INFORMATION_STEP1_SAVE,
        payload: data
    }
}

export const setInformationAction = (data) => {
    return {
        type: typesInfor.INFORMATION_UPDATE_SUCCESS,
        payload: data
    }
}