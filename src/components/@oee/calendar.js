import { TextInput, SelectInput, ToggleInput } from '../../inputs/inputs';
import { inputTypeNames } from '../inputTypes';
import { dataComponentId, dataConfigInfo, dataCalendarId, sortableClass } from '../common';
import {
    cloneWithoutOnclick, getDateFmt, getParsedConfigInfo,
    setDataConfigInfo, setOnclickAttr
} from '../../util/dataAttr';
import input from './input';
import { calendarid, spanid } from './ids';
import { property as tooltipProperty } from '../tooltip';

const calendar = $.extend({}, input, {
    name: "Datetime Input",
    attributes: { "type": inputTypeNames },
    image: "icons/calendar.svg",
    sortable: true,
    html: `<div class="form-item ${sortableClass}" ${dataComponentId}="${calendarid}">
               <div class="form-label" style="float: left; margin-left: 7px;">
                   <i class="fa fa-caret-square-o-right text-danger" aria-hidden="true"></i>
                   <span data-component-id="${spanid}" class="theme">Time</span>
                   <span data-required-span-id="" style="color:red">*</span>
               </div>
               <div class="input-block" style="margin-left: 105px;">
                   <input ${dataCalendarId} ${dataConfigInfo}="{'dateFmt': 'yyyy-MM-dd HH:mm'}" ${dataComponentId}="${calendarid}" type="text" class="form-control Wdate">
               </div>
           </div>`,
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: new TextInput()
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: new TextInput()
    }, {
        name: 'Name',
        key: 'name',
        htmlAttr: 'name',
        inputtype: new TextInput()
    }, {
        name: "Date Format",
        key: "dateFmt",
        inputtype: new SelectInput(),
        init: getDateFmt,
        onChange: function (node, value) {
            const configInfo = getParsedConfigInfo(node)
            configInfo.dateFmt = value;
            setDataConfigInfo(node, configInfo);

            if (node.attr('onclick')) {
                return setOnclickAttr(cloneWithoutOnclick(node));
            }
            return node;
        },
        data: {
            options: [{
                value: 'yyyy-MM-dd HH:mm',
                text: 'yyyy-MM-dd HH:mm'
            }, {
                value: 'yyyy-MM-dd HH:mm:ss',
                text: 'yyyy-MM-dd HH:mm:ss'
            }, {
                value: 'yyyy-MM-dd',
                text: 'yyyy-MM-dd'
            }, {
                value: 'yyyyMMdd',
                text: 'yyyyMMdd'
            }, {
                value: 'yyyyMM',
                text: 'yyyyMM'
            }, {
                value: 'yyyy',
                text: 'yyyy'
            }]
        }
    }, {
        name: "Show Datetime",
        key: "showDatetime",
        validValues: ["table-responsive"],
        inputtype: new ToggleInput(),
        onChange(node, value) {
            if (value == 'on') {
                setOnclickAttr(node);
            } else {
                cloneWithoutOnclick(node);
            }
        },
        data: {
            on: 'on',
            off: 'off'
        }
    }, {
        name: "Required",
        key: "required",
        htmlAttr: 'required',
        validValues: ["required"],
        noValueAttr: true,
        inputtype: new ToggleInput(),
        data: {
            on: 'required',
            off: ''
        }
    }, tooltipProperty]
});

export default calendar;