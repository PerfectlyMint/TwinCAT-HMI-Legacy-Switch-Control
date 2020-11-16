/// <reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiToggleButton/TcHmiToggleButton.d.ts" />
/// <reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiButton/TcHmiButton.d.ts" />
/// <reference path="../.hmiframework/TcHmi.d.ts" />
declare module TcHmi {
    module Controls {
        module Legacy_Switch {
            class Legacy_SwitchControl extends TcHmi.Controls.Beckhoff.TcHmiToggleButton {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __switchFlavour?: string;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's defaultor //initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /**
                * OVERRIDE: Processes the current value of the toggleState attribute.
                * @param   {boolean}    forwardStateSymbol      -   Controls if a change should be reflected to an possible existing state symbol.
                *                                                   This is required to prevent changes from the symbol to be written to the symbol again.
                * @function
                */
                protected __processToggleState(forwardStateSymbol?: boolean): void;
                /**
                 * OVERRIDE: Processes the current state if state has changed.
                 * @function
                 * @param {boolean} state The new state of the control.
                 * @param {boolean} forwardStateSymbol Controls if a change should be reflected to an possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param {boolean} source What caused the change of state. Either user interaction, the change of an attribute or the state symbol.
                 */
                protected __processState(state: boolean, forwardStateSymbol: boolean, source: string): void;
                /**
                * Sets the value of Switch Flavour
                * @param valueNew The new value for Switch Flavour
                */
                setSwitchFlavour(valueNew: string | undefined): void;
                /**
                 * Gets the value of Responsive
                 * @returns The current value of Value
                 */
                getSwitchFlavour(): string | undefined;
                /**
                 * Processes the switch style.
                 * @function
                 */
                protected __processSwitchFlavour(): void;
            }
        }
    }
}
