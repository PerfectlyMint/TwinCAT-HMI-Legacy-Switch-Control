/*
 * Generated 11/13/2020 11:19:44 AM
 * Copyright (C) 2020
 */
///<reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiToggleButton/TcHmiToggleButton.d.ts" />
///<reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiButton/TcHmiButton.d.ts" />
///<reference path="../.hmiframework/TcHmi.d.ts" />
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let Legacy_Switch;
        (function (Legacy_Switch) {
            class Legacy_SwitchControl extends TcHmi.Controls.Beckhoff.TcHmiToggleButton {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = /undefined).
                */
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Beckhoff_TcHmiButton-template');
                    this.__elementTemplateRoot.addClass("LegacyDipSwitchControl");
                    super.__previnit();
                    this.__processSwitchFlavour();
                }
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's defaultor //initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    this.__processSwitchFlavour();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    // if (this.__keepAlive) {
                    //     return;
                    // }
                    super.destroy();
                    /**
                    * Free resources like child controls etc.
                    */
                }
                /**
                * OVERRIDE: Processes the current value of the toggleState attribute.
                * @param   {boolean}    forwardStateSymbol      -   Controls if a change should be reflected to an possible existing state symbol.
                *                                                   This is required to prevent changes from the symbol to be written to the symbol again.
                * @function
                */
                __processToggleState(forwardStateSymbol) {
                    super.__processToggleState(forwardStateSymbol);
                    this.__processSwitchFlavour();
                }
                /**
                 * OVERRIDE: Processes the current state if state has changed.
                 * @function
                 * @param {boolean} state The new state of the control.
                 * @param {boolean} forwardStateSymbol Controls if a change should be reflected to an possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param {boolean} source What caused the change of state. Either user interaction, the change of an attribute or the state symbol.
                 */
                __processState(state, forwardStateSymbol, source) {
                    super.__processState(state, forwardStateSymbol, source);
                    this.__processSwitchFlavour();
                }
                /**
                * Sets the value of Switch Flavour
                * @param valueNew The new value for Switch Flavour
                */
                setSwitchFlavour(valueNew) {
                    this.__switchFlavour = valueNew;
                    this.__processSwitchFlavour();
                }
                /**
                 * Gets the value of Responsive
                 * @returns The current value of Value
                 */
                getSwitchFlavour() {
                    return this.__switchFlavour;
                }
                /**
                 * Processes the switch style.
                 * @function
                 */
                __processSwitchFlavour() {
                    let switchElement = this.__elementTemplateRoot.get()[0]; //find('LegacyDipSwitchControl')[0];
                    if (super.getToggleState() === null || this.__switchFlavour === "null") {
                        switchElement.className = 'TcHmi_Controls_Legacy_Switch_DipSwitch-Off';
                        return;
                    }
                    switch (this.__switchFlavour) {
                        case "Dip": {
                            if (super.getToggleState() === "Active") {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_DipSwitch-On';
                            }
                            else {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_DipSwitch-Off';
                            }
                            break;
                        }
                        case "Power": {
                            if (super.getToggleState() === "Active") {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_PowerSwitch-On';
                            }
                            else {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_PowerSwitch-Off';
                            }
                            break;
                        }
                        case "Rocker": {
                            if (super.getToggleState() === "Active") {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_RockerSwitch-On';
                            }
                            else {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_RockerSwitch-Off';
                            }
                            break;
                        }
                        case "Rotary": {
                            if (super.getToggleState() === "Active") {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_RotarySwitch-On';
                            }
                            else {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_RotarySwitch-Off';
                            }
                            break;
                        }
                        case "Push": {
                            if (super.getToggleState() === "Active") {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_PushSwitch-On';
                            }
                            else {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_PushSwitch-Off';
                            }
                            break;
                        }
                        default: {
                            if (super.getToggleState() === "Active") {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_Dipswitch-On';
                            }
                            else {
                                switchElement.className = 'TcHmi_Controls_Legacy_Switch_Dipswitch-Off';
                            }
                            break;
                        }
                    }
                    return;
                }
            }
            Legacy_Switch.Legacy_SwitchControl = Legacy_SwitchControl;
        })(Legacy_Switch = Controls.Legacy_Switch || (Controls.Legacy_Switch = {}));
        Controls.registerEx('Legacy_SwitchControl', 'TcHmi.Controls.Legacy_DipSwitch', Legacy_Switch.Legacy_SwitchControl);
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=Legacy_SwitchControl.js.map