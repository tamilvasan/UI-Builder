import { TextInput } from '../../inputs/inputs';
import { dataComponentId } from '../common';

const radiobutton = {
    name: "Radio Button",
    attributes: { "type": "radio" },
    image: "icons/radio.svg",
    html: `<div ${dataComponentId}="html/radiobutton@oee" class="everyOutbox-right draggable">
            <div style="display:inline;"><input class="radioInput" name="Fruit" type="radio" value="" /><span ${dataComponentId}="html/span@oee">单选1</span></div>
           </div>`,
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput
    }]
};

export default radiobutton;