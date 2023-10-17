import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/UrlapView.js";


class UrlapController{
    constructor(){
        const URLAPMODELL = new UrlapModel();
        let leiro = URLAPMODELL.getleiro()
        console.log(leiro);
        new UrlapView($(".urlap"), URLAPMODELL.getleiro());
    }
}

export default UrlapController