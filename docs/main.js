(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/8Hy":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat/message/messagemodal.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessagemodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagemodalComponent", function() { return MessagemodalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function MessagemodalComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nuevo mensaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessagemodalComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Editar mensaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessagemodalComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx_r3.data.message)("disabled", ctx_r3.timeValidator.invalid || ctx_r3.typeValidator.invalid || ctx_r3.statusValidator.invalid);
} }
function MessagemodalComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx_r4.data.message)("disabled", ctx_r4.timeValidator.invalid || ctx_r4.typeValidator.invalid || ctx_r4.statusValidator.invalid);
} }
class MessagemodalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.locked = false;
        this.typeValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.statusValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.timeValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.locked = data.message.type != null && data.message.time != null;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
MessagemodalComponent.ɵfac = function MessagemodalComponent_Factory(t) { return new (t || MessagemodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
MessagemodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MessagemodalComponent, selectors: [["app-messagemodal"]], decls: 35, vars: 13, consts: [["mat-dialog-title", "", 4, "ngIf"], ["mat-dialog-content", ""], [3, "value", "formControl", "disabled", "valueChange"], ["value", "0"], ["value", "1"], ["matInput", "", "placeholder", "Escoge fecha y hora", 3, "ngxMatDatetimePicker", "ngModel", "formControl", "ngModelChange"], ["matSuffix", "", 2, "font-size", "x-large", 3, "for"], ["touchUi", "true"], ["picker", ""], [3, "value", "formControl", "valueChange"], ["value", "2"], ["value", "3"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "accent", 3, "mat-dialog-close", "disabled", 4, "ngIf"], ["mat-button", "", "mat-dialog-close", ""], ["mat-dialog-title", ""], ["mat-button", "", "color", "accent", 3, "mat-dialog-close", "disabled"]], template: function MessagemodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MessagemodalComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MessagemodalComponent_h1_1_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tipo de mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function MessagemodalComponent_Template_mat_select_valueChange_6_listener($event) { return ctx.data.message.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Recibido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Enviado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MessagemodalComponent_Template_input_ngModelChange_13_listener($event) { return ctx.data.message.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-datepicker-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ngx-mat-datetime-picker", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Estado del mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function MessagemodalComponent_Template_mat_select_valueChange_21_listener($event) { return ctx.data.message.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "No enviado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Enviado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Recibido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Leido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MessagemodalComponent_button_31_Template, 2, 2, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, MessagemodalComponent_button_32_Template, 2, 2, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.locked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.locked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.data.message.type)("formControl", ctx.typeValidator)("disabled", ctx.locked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxMatDatetimePicker", _r2)("ngModel", ctx.data.message.time)("formControl", ctx.timeValidator);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.data.message.status)("formControl", ctx.statusValidator);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.locked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.locked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimePicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/whatsim/angular-frontend/whatsim/src/main.ts */"zUnb");


/***/ }),

/***/ "1IgW":
/*!****************************************************************!*\
  !*** ./src/app/components/chat/chatlist/chatlist.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistComponent", function() { return ChatlistComponent; });
/* harmony import */ var _modals_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modals/confirmation/confirmation.component */ "lvXK");
/* harmony import */ var _chatmodal_chatmodal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chatmodal/chatmodal.component */ "HD49");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/chat.service */ "sjK5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../error/error.component */ "7AdY");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












function ChatlistComponent_whatsim_error_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "whatsim-error", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("error", ctx_r0.errorShort);
} }
function ChatlistComponent_div_10_mat_accordion_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Foto del perfil:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r4.profilepic);
} }
function ChatlistComponent_div_10_mat_accordion_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-accordion", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "T\u00EDtulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Nombre del perfil:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ChatlistComponent_div_10_mat_accordion_1_div_16_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Abrir en detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "mat-divider", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatlistComponent_div_10_mat_accordion_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const chat_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.showEditModal(chat_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatlistComponent_div_10_mat_accordion_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const chat_r4 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.showDeleteConfirmation(chat_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", chat_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Creaci\u00F3n: ", ctx_r3.formatCreationTime(chat_r4), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r4.profilename);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r4.profilepic);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/chats/", chat_r4.id, "");
} }
function ChatlistComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatlistComponent_div_10_mat_accordion_1_Template, 31, 6, "mat-accordion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.chats);
} }
function ChatlistComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No tienes ning\u00FAn chat a\u00FAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ChatlistComponent {
    constructor(chatService, datepipe, dialog) {
        this.chatService = chatService;
        this.datepipe = datepipe;
        this.dialog = dialog;
        this.hasError = false;
    }
    loadChats() {
        this.chatService.getAll().subscribe(data => {
            this.chats = data.chats;
        }, err => {
            console.log(err);
            this.hasError = true;
            this.errorShort = err.error.error;
            this.errorLong = err.error.message;
        });
    }
    ngOnInit() {
        this.loadChats();
    }
    formatCreationTime(chat) {
        return this.datepipe.transform(chat.creationtime, 'dd/MM/yyyy HH:mm');
    }
    deleteInDb(chat) {
        this.chatService.delete(chat.id).subscribe(data => {
            console.log(data);
            this.loadChats();
        }, err => {
            console.log(err);
            this.hasError = true;
            this.errorShort = err.error.error;
            this.errorLong = err.error.message;
        });
    }
    showDeleteConfirmation(chat) {
        const dialogRef = this.dialog.open(_modals_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationComponent"], {
            data: { description: "¿Deséas eliminar permanentemente el chat?", deletion: true }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === "confirm") {
                this.deleteInDb(chat);
            }
        });
    }
    editInDb(chat, data) {
        this.chatService.update(chat.id, data).subscribe(data => {
            this.loadChats();
        }, err => {
            console.log(err);
            this.hasError = true;
            this.errorShort = err.error.error;
            this.errorLong = err.error.message;
        });
    }
    createInDb(data) {
        this.chatService.create(data).subscribe(data => {
            this.loadChats();
        }, err => {
            console.log(err);
            this.hasError = true;
            this.errorShort = err.error.error;
            this.errorLong = err.error.message;
        });
    }
    showEditModal(chat) {
        const dialogRef = this.dialog.open(_chatmodal_chatmodal_component__WEBPACK_IMPORTED_MODULE_1__["ChatmodalComponent"], {
            data: { chat: Object.create(chat) }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                let editedChat = result;
                this.editInDb(chat, editedChat);
            }
        });
    }
    showCreationModal() {
        const dialogRef = this.dialog.open(_chatmodal_chatmodal_component__WEBPACK_IMPORTED_MODULE_1__["ChatmodalComponent"], {
            data: { chat: {} }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                let newChat = result;
                this.createInDb(newChat);
            }
        });
    }
}
ChatlistComponent.ɵfac = function ChatlistComponent_Factory(t) { return new (t || ChatlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
ChatlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChatlistComponent, selectors: [["app-chatlist"]], decls: 12, vars: 3, consts: [["type", "dialog", 3, "error", 4, "ngIf"], [1, "header-flex"], [2, "text-align", "center", "align-items", "center"], ["mat-fab", "", "aria-label", "Crear un nuevo chat", "color", "accent", 2, "width", "auto", "padding", "0 15px", "border-radius", "50vw", 3, "click"], [1, "content-flex", 2, "margin-top", "2vh"], ["class", "content-flex", "style", "margin-top: 2vh;", 4, "ngIf"], ["class", "header-flex", "style", "margin-top: 2vh; justify-content: center;", 4, "ngIf"], ["type", "dialog", 3, "error"], ["style", "margin: 1vh;", 4, "ngFor", "ngForOf"], [2, "margin", "1vh"], [1, "content-flex"], [1, "row-flex"], ["class", "row-flex", 4, "ngIf"], ["mat-raised-button", "", "aria-label", "Editar chat", "color", "primary", 2, "margin", "auto", "width", "fit-content", 3, "routerLink"], [2, "margin", "15px 0px"], ["mat-stroked-button", "", "aria-label", "Editar chat", "color", "accent", 3, "click"], ["mat-stroked-button", "", "aria-label", "Editar chat", "color", "warn", 3, "click"], [1, "header-flex", 2, "margin-top", "2vh", "justify-content", "center"]], template: function ChatlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ChatlistComponent_whatsim_error_0_Template, 1, 1, "whatsim-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tus chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatlistComponent_Template_button_click_4_listener() { return ctx.showCreationModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Nuevo chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChatlistComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ChatlistComponent_div_11_Template, 3, 0, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.chats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"]], styles: [".content-flex[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    max-width: 90vw;\n    margin: auto;\n}\n\n.header-flex[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    max-width: 80vw;\n    margin: auto;\n    padding: 5px;\n    align-items: center;\n    align-content: center;\n}\n\n.row-flex[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCIiwiZmlsZSI6ImNoYXRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGVhZGVyLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXgtd2lkdGg6IDgwdnc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdy1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "22Nl":
/*!**************************************************************!*\
  !*** ./src/app/components/chat/message/message.component.ts ***!
  \**************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MessageComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { alt: a0 }; };
function MessageComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r6.message.type == 1));
} }
const _c1 = function (a0, a1, a2) { return { alt: a0, follow: a1, altfollow: a2 }; };
function MessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessageComponent_div_0_div_7_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MessageComponent_div_0_div_8_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MessageComponent_div_0_div_9_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessageComponent_div_0_div_10_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MessageComponent_div_0_div_11_Template, 1, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c1, ctx_r0.message.type == 1, !ctx_r0.arrow && ctx_r0.message.type == 0, !ctx_r0.arrow && ctx_r0.message.type == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formatMessageHour(ctx_r0.message));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message.type == 1 && ctx_r0.message.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message.type == 1 && ctx_r0.message.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message.type == 1 && ctx_r0.message.status == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message.type == 1 && ctx_r0.message.status == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.arrow);
} }
function MessageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDate());
} }
class MessageComponent {
    constructor(datepipe) {
        this.datepipe = datepipe;
        this.timemsg = false;
    }
    ngOnInit() {
    }
    formatMessageHour(message) {
        return this.datepipe.transform(message.time, 'HH:mm');
    }
    formatDate() {
        return this.datepipe.transform(this.timedate, 'dd/MM/yyyy');
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["whatsim-chat-message"]], inputs: { message: "message", arrow: "arrow", timemsg: "timemsg", timedate: "timedate" }, decls: 2, vars: 2, consts: [["class", "message", 4, "ngIf"], [1, "message"], [1, "bubble", "mat-elevation-z1", 3, "ngClass"], [1, "message-content"], [1, "content"], [1, "time"], ["class", "status", 4, "ngIf"], ["class", "status readed", 4, "ngIf"], ["class", "arrow", 3, "ngClass", 4, "ngIf"], [1, "status"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 10", "width", "16", "height", "15"], ["fill", "currentColor", "d", "M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z"], ["fill", "currentColor", "d", "M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"], ["fill", "currentColor", "d", "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"], [1, "status", "readed"], [1, "arrow", 3, "ngClass"], [1, "timebubble", "mat-elevation-z1", "timemsg"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 12, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageComponent_div_1_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.timemsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timemsg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".message[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    display: block;\n    overflow: hidden;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 75%;\n    width: auto;\n    height: auto;\n    display: block;\n    background: #FFFF;\n    border-radius: 5px;\n    position: relative;\n    margin: 10px 0 3px 25px;\n    \n  }\n  .message[_ngcontent-%COMP%]   .timebubble[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: auto;\n    height: auto;\n    display: block;\n    background: #e1f5feeb;\n    border-radius: 5px;\n    position: relative;\n    margin: 15px 0 15px 0px;\n    \n  }\n  .message[_ngcontent-%COMP%]   .bubble.alt[_ngcontent-%COMP%] {\n    margin: 10px 25px 3px 0px;\n    background: #dcf8c6;\n    float: right;\n  }\n  .message[_ngcontent-%COMP%]   .timebubble.timemsg[_ngcontent-%COMP%] {\n    background: #e1f5feeb;\n    float:none;\n    color: rgba(0, 0, 0, 0.54);\n  }\n  .message[_ngcontent-%COMP%]   .bubble.follow[_ngcontent-%COMP%] {\n    margin: 2px 0 3px 25px;\n  }\n  .message[_ngcontent-%COMP%]   .bubble.altfollow[_ngcontent-%COMP%] {\n    margin: 2px 25px 3px 0px;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    float: left;\n    left: -11px;\n    top: 0px;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .arrow.alt[_ngcontent-%COMP%] {\n    bottom: 20px;\n    left: auto;\n    right: 4px;\n    float: right;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    border-top: 15px solid #FFFF;\n    border-left: 15px solid transparent;\n    border-radius: 4px 0 0 0px;\n    width: 0;\n    height: 0;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .arrow.alt[_ngcontent-%COMP%]:after {\n    border-top: 15px solid #dcf8c6;\n    transform: scaleX(-1);\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n    padding: 6px 0 6px 0;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    \n    padding: 0 10px 0 10px;\n    margin: auto;\n    font-size:medium;\n    overflow: hidden;\n    text-overflow:'-';\n    \n  }\n  .message[_ngcontent-%COMP%]   .timebubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 10px 10px 10px 10px;\n    margin: auto;\n    font-size:small;\n    overflow: hidden;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    justify-self: flex-end;\n    color: rgba(0, 0, 0, 0.38);\n    margin: 0 5px 0 5px;\n    font-size:smaller;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    justify-self: flex-end;\n    color: rgba(0, 0, 0, 0.38);\n    font-size:smaller;\n    margin: 0 5px 0 0;\n  }\n  .message[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .status.readed[_ngcontent-%COMP%] {\n    color: #34b7f1;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsOENBQThDO0VBQ2hEO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDhDQUE4QztFQUNoRDtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsMEJBQTBCO0VBQzVCO0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtFQUNWO0VBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLFNBQVM7RUFDWDtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHFCQUFxQjtFQUN2QjtFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3QjtFQUVBO0lBQ0U7c0JBQ2tCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5tZXNzYWdlIC5idWJibGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1heC13aWR0aDogNzUlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweCAwIDNweCAyNXB4O1xuICAgIC8qYm94LXNoYWRvdzogMHB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXG4gIH1cbiAgLm1lc3NhZ2UgLnRpbWVidWJibGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2UxZjVmZWViO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweCAwcHg7XG4gICAgLypib3gtc2hhZG93OiAwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7Ki9cbiAgfVxuICAubWVzc2FnZSAuYnViYmxlLmFsdCB7XG4gICAgbWFyZ2luOiAxMHB4IDI1cHggM3B4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGNmOGM2O1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIC5tZXNzYWdlIC50aW1lYnViYmxlLnRpbWVtc2cge1xuICAgIGJhY2tncm91bmQ6ICNlMWY1ZmVlYjtcbiAgICBmbG9hdDpub25lO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICB9XG5cbiAgLm1lc3NhZ2UgLmJ1YmJsZS5mb2xsb3cge1xuICAgIG1hcmdpbjogMnB4IDAgM3B4IDI1cHg7XG4gIH1cbiAgLm1lc3NhZ2UgLmJ1YmJsZS5hbHRmb2xsb3cge1xuICAgIG1hcmdpbjogMnB4IDI1cHggM3B4IDBweDtcbiAgfVxuICAubWVzc2FnZSAuYnViYmxlIC5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxlZnQ6IC0xMXB4O1xuICAgIHRvcDogMHB4O1xuICB9XG4gIC5tZXNzYWdlIC5idWJibGUgLmFycm93LmFsdCB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLm1lc3NhZ2UgLmJ1YmJsZSAuYXJyb3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgI0ZGRkY7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCAwcHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIC5tZXNzYWdlIC5idWJibGUgLmFycm93LmFsdDphZnRlciB7XG4gICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCAjZGNmOGM2O1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgfVxuXG4gIC5tZXNzYWdlIC5idWJibGUgLm1lc3NhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZzogNnB4IDAgNnB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5tZXNzYWdlIC5idWJibGUgLm1lc3NhZ2UtY29udGVudCAuY29udGVudCB7XG4gICAgLypmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDsqL1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTptZWRpdW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OictJztcbiAgICAvKmRpc3BsYXk6IHRhYmxlOyovXG4gIH1cblxuICAubWVzc2FnZSAudGltZWJ1YmJsZSAubWVzc2FnZS1jb250ZW50IC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6c21hbGw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5tZXNzYWdlIC5idWJibGUgLm1lc3NhZ2UtY29udGVudCAudGltZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xuICAgIGZvbnQtc2l6ZTpzbWFsbGVyO1xuICB9XG5cbiAgLm1lc3NhZ2UgLmJ1YmJsZSAubWVzc2FnZS1jb250ZW50IC5zdGF0dXMge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gICAgZm9udC1zaXplOnNtYWxsZXI7XG4gICAgbWFyZ2luOiAwIDVweCAwIDA7XG4gIH1cblxuICAubWVzc2FnZSAuYnViYmxlIC5tZXNzYWdlLWNvbnRlbnQgLnN0YXR1cy5yZWFkZWQge1xuICAgIGNvbG9yOiAjMzRiN2YxO1xuICB9Il19 */"] });


/***/ }),

/***/ "4Em8":
/*!*****************************************!*\
  !*** ./src/app/models/message.model.ts ***!
  \*****************************************/
/*! exports provided: Message, MessageType, MessageStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatus", function() { return MessageStatus; });
class Message {
    /*constructor(chatid: number, type: MessageType | number, time: Date, status: MessageStatus | number, content: String){
        this.chatid = chatid;
        this.type = type;
        this.time = time;
        this.status = status;
        this.content = content;
    }*/
    constructor(obj) {
        this.chatid = obj.chatid;
        this.time = obj.time;
        this.content = obj.content;
        this.type = MessageType[MessageType[+obj.type]];
        this.status = MessageStatus[MessageStatus[obj.status]];
    }
    /*

    private serialize(): any {
        var typ: Boolean;
        var stat: Number;
        if(this.type) typ = true;
        else typ = false;
        switch (this.status) {
            case "waiting":
                stat = 0;
                break;
            case "sended":
                stat = 1;
                break;
            case "recived":
                stat = 2;
                break;
            case "readed":
                stat = 3;
                break;
            default:
                stat = 0;
                break;
        }
        return {
            chatid: this.chatid,
            type: typ,
            time: stat,
            status: this.status,
            content: this.content

        }
    }*/
    getType() {
        return this.type;
    }
    getTypeString() {
        return MessageType[this.type];
    }
}
var MessageType;
(function (MessageType) {
    MessageType[MessageType["SENDED"] = 1] = "SENDED";
    MessageType[MessageType["RECIVED"] = 0] = "RECIVED";
})(MessageType || (MessageType = {}));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus[MessageStatus["WAITING"] = 0] = "WAITING";
    MessageStatus[MessageStatus["SENDED"] = 1] = "SENDED";
    MessageStatus[MessageStatus["RECIVED"] = 2] = "RECIVED";
    MessageStatus[MessageStatus["READED"] = 3] = "READED";
})(MessageStatus || (MessageStatus = {}));


/***/ }),

/***/ "5Ey6":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function SignupComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor introduce un correo electr\u00F3nico v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El email es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "necesario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El email ya est\u00E1 registrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a debe tener entre 6 y 22 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "necesaria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre debe tener entre 4 y 16 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre de usuario es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "necesario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre de usuario ya est\u00E1 registrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registerData = {
            email: null,
            pass: null,
            displayname: null
        };
        this.isSuccessful = false;
        this.isFailed = false;
        this.emailValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(32)]);
        this.passwordValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(22)]);
        this.displaynameValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(16)]);
    }
    ngOnInit() {
        this.emailValidator.setErrors({ alreadyExisting: false });
        this.displaynameValidator.setErrors({ alreadyExisting: false });
    }
    signUp() {
        console.log(this.registerData);
        this.authService.register(this.registerData).subscribe(data => {
            this.isSuccessful = true;
            this.isFailed = false;
            this.router.navigate(['/signin']);
        }, err => {
            this.isFailed = true;
            console.log(err);
            if (err.error.error == "account_already_exsists") {
                this.emailValidator.setErrors({ alreadyExisting: true });
            }
            else if (err.error.error == "displayname_already_exsists") {
                this.displaynameValidator.setErrors({ alreadyExisting: true });
            }
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 38, vars: 16, consts: [[1, "content-flex"], [1, "signup-card"], [1, "content-flex", "signform"], ["appearance", "outline", 2, "width", "100%"], ["type", "email", "matInput", "", "placeholder", "Ej: mail@mail.com", "required", "", 3, "formControl", "ngModel", "ngModelChange"], ["matSuffix", ""], [4, "ngIf"], ["type", "password", "matInput", "", "maxlength", "22", "required", "", 3, "formControl", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ej: usuario1", "required", "", 3, "formControl", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "signin-container"], ["mat-stroked-button", "", "color", "primary", 3, "routerLink"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crear una nueva cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_8_listener($event) { return ctx.registerData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SignupComponent_mat_error_11_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignupComponent_mat_error_12_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SignupComponent_mat_error_13_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_17_listener($event) { return ctx.registerData.pass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SignupComponent_mat_error_20_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SignupComponent_mat_error_21_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) { return ctx.registerData.displayname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SignupComponent_mat_error_28_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SignupComponent_mat_error_29_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SignupComponent_mat_error_30_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_31_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Registrar cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00BFYa tienes una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.emailValidator)("ngModel", ctx.registerData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailValidator.hasError("email") && !ctx.emailValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailValidator.hasError("alreadyExisting") && ctx.isFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.passwordValidator)("ngModel", ctx.registerData.pass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.passwordValidator.hasError("minlength") || ctx.passwordValidator.hasError("maxlength")) && !ctx.passwordValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.displaynameValidator)("ngModel", ctx.registerData.displayname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.displaynameValidator.hasError("minlength") || ctx.displaynameValidator.hasError("maxlength")) && !ctx.displaynameValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaynameValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaynameValidator.hasError("alreadyExisting") && ctx.isFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.emailValidator.valid || !ctx.passwordValidator.valid || !ctx.displaynameValidator.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/signin");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".content-flex[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.content-flex[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n\n.signup-card[_ngcontent-%COMP%]{\n    padding: 25px 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-width: 30%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n.signin-container[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\n\n.signform[_ngcontent-%COMP%]{\n    min-width: 150px;\n    max-width: 350px;\n    width: 100%;\n}\n\n.signform[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudC1mbGV4ID4gbWF0LWNhcmQsIGRpdiwgc3BhbiwgcCwgYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4uc2lnbnVwLWNhcmR7XG4gICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnNpZ25pbi1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNpZ25mb3Jte1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZ25mb3JtID4gbWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _errormodal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errormodal.component */ "W4/r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token-storage.service */ "Zr0/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ErrorComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.description);
} }
function ErrorComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.message);
} }
function ErrorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ErrorComponent_div_0_span_4_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ErrorComponent_div_0_span_5_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.description != null && ctx_r0.description != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.description == null || ctx_r0.description == "");
} }
var Error;
(function (Error) {
    Error[Error["unknown_error"] = 0] = "unknown_error";
    Error[Error["account_not_found"] = 1] = "account_not_found";
    Error[Error["account_wrong_credentials"] = 2] = "account_wrong_credentials";
    Error[Error["invalid_web_token"] = 3] = "invalid_web_token";
    Error[Error["account_already_exsists"] = 4] = "account_already_exsists";
    Error[Error["displayname_already_exsists"] = 5] = "displayname_already_exsists";
    Error[Error["chat_not_found"] = 6] = "chat_not_found";
})(Error || (Error = {}));
class ErrorComponent {
    constructor(tokenStorage, router, dialog) {
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.dialog = dialog;
        this.useDialog = false;
        this.needSignout = false;
        this.compVisible = true;
    }
    ngOnInit() {
        try {
            var err = Error[this.error.toString()];
            this.errorType = err;
            switch (this.errorType) {
                case Error.unknown_error:
                    this.message = "Ha ocurrido un error desconocido";
                    break;
                case Error.account_not_found:
                    this.message = "No se ha podido encontrar la cuenta";
                    break;
                case Error.account_wrong_credentials:
                    this.message = "Los credenciales son incorrectos";
                    break;
                case Error.invalid_web_token:
                    this.message = "El token de sesión es invalido";
                    this.description = this.description == null ? "Prueba cerrando sesión e iniciando de nuevo. Se cerrará sesión automáticamente al cerrar este dialogo" : null;
                    this.needSignout = true;
                    break;
                case Error.account_already_exsists:
                    this.message = "La cuenta ya está registrada";
                    break;
                case Error.displayname_already_exsists:
                    this.message = "El nombre de usuario ya se ha utilizado";
                    break;
                case Error.chat_not_found:
                    this.message = "El chat no existe o no es posible acceder a el";
                    break;
                default:
                    this.message = "Ha ocurrido un error desconocido";
                    break;
            }
            if (this.type == "dialog") {
                this.useDialog = true;
                if (this.needSignout) {
                    this.openDialogAndSignout();
                }
                else
                    this.openDialog();
            }
        }
        catch (error) {
            console.log("No se encontro error: " + error);
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_errormodal_component__WEBPACK_IMPORTED_MODULE_0__["ErrormodalComponent"], {
            data: { errorTitle: this.message, errorDescription: this.description }
        });
    }
    openDialogAndSignout() {
        const dialogRef = this.dialog.open(_errormodal_component__WEBPACK_IMPORTED_MODULE_0__["ErrormodalComponent"], {
            data: { errorTitle: this.message, errorDescription: this.description }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.tokenStorage.signOut();
            //window.location.reload()
            this.router.navigate(['/signin']);
        });
    }
    close() {
        this.compVisible = false;
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["whatsim-error"]], inputs: { error: "error", type: "type", description: "description" }, decls: 1, vars: 1, consts: [["id", "outer", 4, "ngIf"], ["id", "outer"], ["id", "error", 1, "mat-elevation-z4", 3, "click"], [4, "ngIf"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ErrorComponent_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.useDialog && ctx.compVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["#outer[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n\toverflow:hidden;\n\tposition:relative;\n  }\n  \n\n#error[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    padding: 50px;\n    color: white;\n    background-color: #F44812;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 50px;\n    height:-webkit-min-content;\n    height:min-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCLGVBQWU7Q0FDZixpQkFBaUI7RUFDaEI7OztBQUdGO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI291dGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG92ZXJmbG93OmhpZGRlbjtcblx0cG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgXG5cbiNlcnJvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQ4MTI7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0Om1pbi1jb250ZW50O1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, consts: [[1, "content-flex"], ["src", "/assets/images/whatsim_green.png", 2, "width", "40%"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".content-flex[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"] });


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token-storage.service */ "Zr0/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../error/error.component */ "7AdY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










function ProfileComponent_whatsim_error_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "whatsim-error", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("error", ctx_r0.errorShort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("description", ctx_r0.errorLong);
} }
function ProfileComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFEst\u00E1s seguro?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tu cuenta se eliminar\u00E1 para siempre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_28_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Eliminar cuenta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_28_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hideConfirmation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_mat_spinner_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class ProfileComponent {
    constructor(tokenStorage, router, userService, datepipe) {
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.userService = userService;
        this.datepipe = datepipe;
        this.showDeleteConfirmation = false;
        this.hasError = false;
        this.loading = false;
    }
    ngOnInit() {
        this.userService.getUserInfo().subscribe(data => {
            this.name = data.user.displayname;
            this.email = data.user.email;
            var d = new Date(data.user.joindate);
            this.joindate = this.datepipe.transform(d, 'dd/MM/yyyy');
        }, err => {
            console.log(err);
            this.hasError = true;
            this.errorShort = err.error.error;
            this.errorLong = err.error.message;
        });
    }
    showConfirmation() {
        this.showDeleteConfirmation = true;
    }
    hideConfirmation() {
        this.showDeleteConfirmation = false;
    }
    deleteAccount() {
        this.userService.deleteAccount().subscribe({
            next: data => {
                //console.log("Ok");
                this.tokenStorage.signOut();
                this.loading = true;
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            },
            error: err => {
                console.log(err);
                this.hasError = true;
                this.errorShort = err.error.error;
                this.errorLong = err.error.message;
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 30, vars: 6, consts: [["type", "dialog", 3, "error", "description", 4, "ngIf"], [1, "content-flex"], [1, "profile-card"], [1, "content-flex", "flex-left", 2, "width", "100%"], [1, "content-flex", "flex-left", 2, "flex-direction", "row"], ["mat-raised-button", "", "aria-label", "Eliminar cuenta", "color", "warn", 3, "click"], ["style", "margin: auto;", 4, "ngIf"], [4, "ngIf"], ["type", "dialog", 3, "error", "description"], [2, "margin", "auto"], ["mat-raised-button", "", "aria-label", "Confirmar eliminar cuenta", "color", "warn", 3, "click"], ["mat-stroked-button", "", "aria-label", "Cancelar", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_whatsim_error_0_Template, 1, 2, "whatsim-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre de usuario: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correo electr\u00F3nico: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fecha de registro: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_24_listener() { return ctx.showConfirmation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Eliminar cuenta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_div_28_Template, 12, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfileComponent_mat_spinner_29_Template, 1, 0, "mat-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.joindate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], styles: [".content-flex[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.flex-left[_ngcontent-%COMP%]{\n    align-items:flex-start;\n    justify-content:left;\n}\n\n.content-flex[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n\n.profile-card[_ngcontent-%COMP%]{\n    padding: 25px 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-width: 30%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n.profile-container[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0VBQ2I7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1sZWZ0e1xuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OmxlZnQ7XG59XG5cbi5jb250ZW50LWZsZXggPiBtYXQtY2FyZCwgZGl2LCBzcGFuLCBwLCBidXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG5cbi5wcm9maWxlLWNhcmR7XG4gICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnByb2ZpbGUtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "HD49":
/*!******************************************************************!*\
  !*** ./src/app/components/chat/chatmodal/chatmodal.component.ts ***!
  \******************************************************************/
/*! exports provided: ChatmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatmodalComponent", function() { return ChatmodalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function ChatmodalComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Editar Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChatmodalComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Crear nuevo chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ChatmodalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.titleValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(22)]);
        this.profileValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]);
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
ChatmodalComponent.ɵfac = function ChatmodalComponent_Factory(t) { return new (t || ChatmodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ChatmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChatmodalComponent, selectors: [["whatsim-chatmodal"]], decls: 16, vars: 8, consts: [["mat-dialog-title", "", 4, "ngIf"], ["mat-dialog-content", ""], ["appearance", "standard", 2, "width", "100%"], ["matInput", "", "type", "text", "maxlength", "22", 3, "formControl", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "maxlength", "32", 3, "formControl", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close", "disabled"], ["mat-button", "", "mat-dialog-close", ""], ["mat-dialog-title", ""]], template: function ChatmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ChatmodalComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatmodalComponent_h1_1_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatmodalComponent_Template_input_ngModelChange_6_listener($event) { return ctx.data.chat.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Nombre de perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatmodalComponent_Template_input_ngModelChange_10_listener($event) { return ctx.data.chat.profilename = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.chat.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.data.chat.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.titleValidator)("ngModel", ctx.data.chat.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.profileValidator)("ngModel", ctx.data.chat.profilename);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx.data.chat)("disabled", ctx.titleValidator.invalid || ctx.profileValidator.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0bW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "MDRG":
/*!********************************************************************!*\
  !*** ./src/app/components/chat/chatdetail/chatdetail.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatdetailComponent", function() { return ChatdetailComponent; });
/* harmony import */ var src_app_models_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/message.model */ "4Em8");
/* harmony import */ var src_app_models_chatdetailed_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/chatdetailed.model */ "VL+l");
/* harmony import */ var _message_messagemodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/messagemodal.component */ "/8Hy");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_timemessage_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/timemessage.model */ "RBu2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/chat.service */ "sjK5");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/message.service */ "tZre");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../error/error.component */ "7AdY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../message/message.component */ "22Nl");



















const _c0 = ["autosize"];
function ChatdetailComponent_whatsim_error_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "whatsim-error", 22);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("error", ctx_r0.errorShort);
} }
function ChatdetailComponent_mat_spinner_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 23);
} }
const _c1 = function (a0) { return { center: a0 }; };
function ChatdetailComponent_whatsim_chat_message_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "whatsim-chat-message", 24);
} if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ind_r6 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("message", message_r5)("arrow", ctx_r3.hasArrow(message_r5, ind_r6))("timemsg", ctx_r3.isTimeMessage(message_r5))("timedate", message_r5.time)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, ctx_r3.isTimeMessage(message_r5)));
} }
class ChatdetailComponent {
    constructor(chatService, messageService, _ngZone, route, router, dialog) {
        this.chatService = chatService;
        this.messageService = messageService;
        this._ngZone = _ngZone;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.hasError = false;
        this.msgContent = "";
        this.loaded = false;
        this.chatMessages = [];
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }
    ngOnInit() {
        this.loadChat(this.route.snapshot.params.id);
    }
    isTimeMessage(message) {
        return message instanceof src_app_models_timemessage_model__WEBPACK_IMPORTED_MODULE_4__["TimeMessage"];
    }
    hasArrow(message, ind) {
        return (ind == 0 && !this.isTimeMessage(message) || (ind > 0 && (!this.isTimeMessage(message) && (this.isTimeMessage(this.chatMessages[ind - 1])
            || (this.chatMessages[ind - 1].type != message.type)))));
    }
    loadChat(id) {
        this.loaded = false;
        this.chatMessages = [];
        this.chatService.getDetail(id).subscribe(data => {
            let jsonMsgs = data.chat.messages;
            let msgs = [];
            for (let m of jsonMsgs) {
                var ind = jsonMsgs.indexOf(m);
                console.log(ind);
                if (ind == 0) {
                    var cmsg = new src_app_models_timemessage_model__WEBPACK_IMPORTED_MODULE_4__["TimeMessage"]({ chatid: id, time: m.time });
                    this.chatMessages.push(cmsg);
                }
                else {
                    var previousMsg = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_0__["Message"](jsonMsgs[ind - 1]);
                    console.log(previousMsg);
                    if (this.getDaysDifference(new Date(previousMsg.time), new Date(m.time)) >= 1) {
                        var cmsg = new src_app_models_timemessage_model__WEBPACK_IMPORTED_MODULE_4__["TimeMessage"]({ chatid: id, time: m.time });
                        this.chatMessages.push(cmsg);
                    }
                }
                /*if(ind>0)console.log("previous msg: "+JSON.stringify(jsonMsgs[ind-1]));
                if(ind==0 || (ind>0 && (this.getDaysDifference(jsonMsgs[ind-1].time, m.time)>=1)) ){
                  var cmsg:TimeMessage = {chatid: id, time: m.time};
                  this.chatMessages.push(cmsg);
                }*/
                var msg = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_0__["Message"](m);
                msgs.push(msg);
                this.chatMessages.push(msg);
            }
            this.chat = new src_app_models_chatdetailed_model__WEBPACK_IMPORTED_MODULE_1__["ChatDetail"](data.chat);
            this.chat.messages = msgs;
            console.log(this.chat);
            console.log(this.chatMessages);
            this.loaded = true;
        }, err => {
            console.log(err);
            this.hasError = true;
            this.errorShort = err.error.error;
            this.errorLong = err.error.message;
            this.loaded = true;
        });
    }
    getDaysDifference(date1, date2) {
        return (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
    }
    createInDb(data) {
        this.messageService.create(data).subscribe(data => {
            this.loadChat(this.chat.id);
        }, err => {
            console.log(err);
            this.hasError = true;
            this.errorShort = err.error.error;
            this.errorLong = err.error.message;
        });
    }
    showNewModal() {
        if (this.msgContent !== "") {
            const dialogRef = this.dialog.open(_message_messagemodal_component__WEBPACK_IMPORTED_MODULE_2__["MessagemodalComponent"], {
                data: { message: {} }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    console.log(result);
                    let newMessage = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_0__["Message"](result);
                    newMessage.chatid = this.chat.id;
                    newMessage.content = this.msgContent;
                    console.log(newMessage);
                    this.createInDb(newMessage);
                    this.msgContent = "";
                }
            });
        }
    }
}
ChatdetailComponent.ɵfac = function ChatdetailComponent_Factory(t) { return new (t || ChatdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
ChatdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChatdetailComponent, selectors: [["app-chatdetail"]], viewQuery: function ChatdetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
    } }, decls: 34, vars: 6, consts: [["type", "dialog", 3, "error", 4, "ngIf"], [1, "absolute-container"], [1, "container"], [1, "toolbar-container", "mat-elevation-z4"], [1, "picturecontainer"], ["src", "/assets/images/defaultprofilepic.png", 1, "profileimage"], [1, "name-container"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "Opciones", 3, "matMenuTriggerFor"], ["chatmenu", "matMenu"], ["mat-menu-item", ""], [1, "messages-container"], ["class", "center", 4, "ngIf"], [3, "message", "arrow", "timemsg", "timedate", "ngClass", 4, "ngFor", "ngForOf"], [1, "bottombar-container"], [1, "bottombar", "mat-elevation-z2"], ["mat-icon-button", "", "aria-label", "Emojis", 2, "align-self", "flex-end"], [1, "textinp"], ["cdkTextareaAutosize", "", "placeholder", "Escribe un mensaje", "cdkAutosizeMaxRows", "6", 2, "font-size", "large", 3, "ngModel", "ngModelChange"], ["autosize", "cdkTextareaAutosize"], [2, "margin", "15px 5px"], ["mat-mini-fab", "", "aria-label", "Enviar", "color", "primary", 3, "click"], ["type", "dialog", 3, "error"], [1, "center"], [3, "message", "arrow", "timemsg", "timedate", "ngClass"]], template: function ChatdetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ChatdetailComponent_whatsim_error_0_Template, 1, 1, "whatsim-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Eliminar mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Editar mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ChatdetailComponent_mat_spinner_19_Template, 1, 0, "mat-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ChatdetailComponent_whatsim_chat_message_20_Template, 1, 7, "whatsim-chat-message", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "emoji_emotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "textarea", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ChatdetailComponent_Template_textarea_ngModelChange_27_listener($event) { return ctx.msgContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChatdetailComponent_Template_button_click_31_listener() { return ctx.showNewModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.chat.profilename);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.chatMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.msgContent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar{\n\twidth: 5px;\n    position: sticky;\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{\n\tbackground-color: #cecbcb7a;\n}\n\n\n\n\n\n.container[_ngcontent-%COMP%]{\n    margin: auto;\n    max-width: 30vw;\n    min-height: calc(100vh - 190px);\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    align-items: stretch;\n\n    background-image: url(/assets/images/defaultchatbackground.jpg);\n    border-radius: 20px;\n    overflow: hidden;\n    background-size: contain;\n}\n\n\n.absolute-container[_ngcontent-%COMP%]{\n    width: 100%;\n    min-height: calc(100vh - 190px);\n    margin: auto;\n    \n}\n\n\n@media screen and (max-width: 760px){\n    .container[_ngcontent-%COMP%]{ max-width: 100vw; margin: 0; padding: 0; }\n}\n\n\n.toolbar-container[_ngcontent-%COMP%]{\n    background-color: #1EBEA5;\n    color: #FFFF;\n    z-index: 4;\n    width:-webkit-max-content;\n    width:max-content;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: row;\n    height: 55px;\n    padding: 0 5px;\n    overflow: hidden;\n    position: sticky;\n    width:inherit;\n    max-width:inherit;\n}\n\n\n.spacer[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 0 auto;\n  }\n\n\n.toolbar-container[_ngcontent-%COMP%]    > .name-container[_ngcontent-%COMP%]{\n    font-size:large;\n    white-space:nowrap;\n    overflow:hidden;\n    text-overflow: ellipsis;\n}\n\n\n.messages-container[_ngcontent-%COMP%]{\n    position: relative;\n    overflow-y: scroll;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    flex-grow: 1;\n    min-height: 1px;\n    height: calc(100vh - 285px);\n}\n\n\n.bottombar-container[_ngcontent-%COMP%]{\n    align-self: flex-end;\n    color: #FFFF;\n    width:100%;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    height: 40px;\n    overflow: hidden;\n    z-index: 4;\n    position: sticky;\n    padding: 5px 0;\n    overflow: visible;\n    max-width:100%;\n}\n\n\n.bottombar[_ngcontent-%COMP%]{\n    background-color: #FFFF;\n    border-radius: 25px;\n    color: rgba(0, 0, 0, 0.54);\n    max-width:100%;\n    width:100%;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    height: 80%;\n    margin: 0 10px;\n    z-index: 8;\n    align-self: flex-end;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    overflow: hidden;\n}\n\n\n.textinp[_ngcontent-%COMP%]{\n    align-self: flex-start;\n    color: rgba(0, 0, 0, 0.54);\n    height: 100%;\n    width: 100%;\n}\n\n\n.textinp[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{\n    border: none;\n    overflow: auto;\n    outline: none;\n    resize: vertical;\n\n    position: relative;\n    overflow: auto;\n    max-width: 95%;\n    width: 95%;\n    display: inline-block;\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n\n    font-weight: 400;\n    line-height: 1.125;\n    font-family: Roboto,Helvetica Neue,sans-serif;\n    letter-spacing: normal;\n    box-shadow: none;\n\n    margin: 6px;\n\n    resize: none; \n}\n\n\n.textinp[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]::placeholder{\n    color: rgba(0, 0, 0, 0.38);\n}\n\n\n.profileimage[_ngcontent-%COMP%]{\n    max-height: 80%;\n    border-radius: 50%;\n    max-width: 100%;\n    margin-top: 10%;\n}\n\n\n.picturecontainer[_ngcontent-%COMP%]{\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    max-height: 100%;\n    height: 100%;\n    padding: 5px;\n    align-content: center;\n    justify-items: center;\n    display: flex;\n    width: 100%;\n  }\n\n\nwhatsim-chat-message.right[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n\n\nwhatsim-chat-message.center[_ngcontent-%COMP%] {\n    align-self: center;\n    max-width: 75%;\n  }\n\n\nwhatsim-chat-message.left[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7SUFDUCxnQkFBZ0I7QUFDcEI7OztBQUdBO0NBQ0MsMkJBQTJCO0FBQzVCOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRCRTs7O0FBQ0Y7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG9CQUFvQjs7SUFFcEIsK0RBQStEO0lBQy9ELG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxZQUFZLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDekQ7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7OztBQUVGO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7OztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCOztJQUV6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxzQkFBc0I7SUFJdEIsZ0JBQWdCOztJQUVoQixXQUFXOztJQUVYLFlBQVksRUFBRSwrQ0FBK0M7QUFDakU7OztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsV0FBVztFQUNiOzs7QUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7O0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoiY2hhdGRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhcntcblx0d2lkdGg6IDVweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XG5cdGJhY2tncm91bmQtY29sb3I6ICNjZWNiY2I3YTtcbn1cblxuLypAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XG4gICAgLmNvbnRhaW5lcnsgd2lkdGg6IDEwMHZ3OyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cbn1cblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmhlYWRlci1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yb3ctZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDVweDtcbn0qL1xuLmNvbnRhaW5lcntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxOTBweCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdGNoYXRiYWNrZ3JvdW5kLmpwZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmFic29sdXRlLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTkwcHgpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAvKndpZHRoOiAxMDB2dzsqL1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XG4gICAgLmNvbnRhaW5lcnsgbWF4LXdpZHRoOiAxMDB2dzsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XG59XG5cbi50b29sYmFyLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVCRUE1O1xuICAgIGNvbG9yOiAjRkZGRjtcbiAgICB6LWluZGV4OiA0O1xuICAgIHdpZHRoOm1heC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHdpZHRoOmluaGVyaXQ7XG4gICAgbWF4LXdpZHRoOmluaGVyaXQ7XG59XG5cbi5zcGFjZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4udG9vbGJhci1jb250YWluZXIgPi5uYW1lLWNvbnRhaW5lcntcbiAgICBmb250LXNpemU6bGFyZ2U7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLm1lc3NhZ2VzLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyODVweCk7XG59XG5cbi5ib3R0b21iYXItY29udGFpbmVye1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGNvbG9yOiAjRkZGRjtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBtYXgtd2lkdGg6MTAwJTtcbn1cblxuLmJvdHRvbWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgIG1heC13aWR0aDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgei1pbmRleDogODtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZXh0aW5we1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dGlucD50ZXh0YXJlYXtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC13aWR0aDogOTUlO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xMjU7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG5cbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICBtYXJnaW46IDZweDtcblxuICAgIHJlc2l6ZTogbm9uZTsgLypyZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gdGhlIGJvdHRvbSByaWdodCovXG59XG5cbi50ZXh0aW5wPnRleHRhcmVhOjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuXG4ucHJvZmlsZWltYWdle1xuICAgIG1heC1oZWlnaHQ6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbiAgXG4ucGljdHVyZWNvbnRhaW5lcntcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICB3aGF0c2ltLWNoYXQtbWVzc2FnZS5yaWdodCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbiAgd2hhdHNpbS1jaGF0LW1lc3NhZ2UuY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gIH1cbiAgd2hhdHNpbS1jaGF0LW1lc3NhZ2UubGVmdCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "RBu2":
/*!*********************************************!*\
  !*** ./src/app/models/timemessage.model.ts ***!
  \*********************************************/
/*! exports provided: TimeMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMessage", function() { return TimeMessage; });
class TimeMessage {
    constructor(obj) {
        this.chatid = obj.chatid;
        this.time = obj.time;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token-storage.service */ "Zr0/");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.title = 'WhatSim';
        this.isLogged = false;
    }
    ngOnInit() {
        this.isLogged = !!this.tokenStorageService.getToken();
        if (this.isLogged) {
            const user = this.tokenStorageService.getUser();
            this.displayname = user.displayname;
        }
    }
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "navbar"], [1, "page-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".page-container[_ngcontent-%COMP%]{\n    margin: 160px 50px;\n}\n\napp-root[_ngcontent-%COMP%] > router-outlet[_ngcontent-%COMP%] + app-chatdetail[_ngcontent-%COMP%]{\n    \n    margin-top: 156px;\n    overflow-y: auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtFQUNaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVye1xuICAgIG1hcmdpbjogMTYwcHggNTBweDtcbn1cblxuYXBwLXJvb3Q+cm91dGVyLW91dGxldCthcHAtY2hhdGRldGFpbHtcbiAgICAvKm1hcmdpbjogMTYwcHggNTBweDsqL1xuICAgIG1hcmdpbi10b3A6IDE1NnB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cblxuLm5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "Up9K":
/*!******************************************************!*\
  !*** ./src/app/services/auth-redirecters.service.ts ***!
  \******************************************************/
/*! exports provided: AuthRedirectersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRedirectersService", function() { return AuthRedirectersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-storage.service */ "Zr0/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthRedirectersService {
    constructor(tokenStorage, router) {
        this.tokenStorage = tokenStorage;
        this.router = router;
    }
    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.tokenStorage.getToken()) {
            this.router.navigate(['/', 'signin']);
            return false;
        }
        return true;
    }
}
AuthRedirectersService.ɵfac = function AuthRedirectersService_Factory(t) { return new (t || AuthRedirectersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthRedirectersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthRedirectersService, factory: AuthRedirectersService.ɵfac });


/***/ }),

/***/ "VL+l":
/*!**********************************************!*\
  !*** ./src/app/models/chatdetailed.model.ts ***!
  \**********************************************/
/*! exports provided: ChatDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetail", function() { return ChatDetail; });
class ChatDetail {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.creationtime = obj.creationtime;
        this.profilepic = obj.profilepic;
        this.profilename = obj.profilename;
    }
}


/***/ }),

/***/ "W4/r":
/*!**********************************************************!*\
  !*** ./src/app/components/error/errormodal.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrormodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrormodalComponent", function() { return ErrormodalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function ErrormodalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.errorDescription);
} }
function ErrormodalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.errorTitle);
} }
class ErrormodalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
ErrormodalComponent.ɵfac = function ErrormodalComponent_Factory(t) { return new (t || ErrormodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ErrormodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrormodalComponent, selectors: [["whatsim-errormodal"]], decls: 7, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-dialog-content", ""]], template: function ErrormodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ErrormodalComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ErrormodalComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.errorTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.errorDescription != null && ctx.data.errorDescription != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.errorDescription == null || ctx.data.errorDescription == "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcm1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "WnTk":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token-storage.service */ "Zr0/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function SigninComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Por favor introduce un correo electr\u00F3nico v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El email es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "necesario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No se encontr\u00F3 ninguna cuenta con este email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a debe tener entre 6 y 22 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "necesaria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Los datos introducidos no concuerdan: Comprueba la contrase\u00F1a y el email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SigninComponent {
    constructor(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.loginData = {
            email: null,
            pass: null
        };
        this.isLogged = false;
        this.isFailed = false;
        this.errorMessage = '';
        this.emailValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(32)]);
        this.passwordValidator = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(22)]);
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLogged = true;
            this.router.navigate(['/home']);
        }
        this.emailValidator.setErrors({ notFound: false });
        this.emailValidator.setErrors({ wrongCredentials: false });
        this.passwordValidator.setErrors({ wrongCredentials: false });
    }
    signIn() {
        //const { email, pass } = this.loginForm;
        this.authService.login(this.loginData).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isFailed = false;
            this.isLogged = true;
            this.router.navigate(['/home']);
            this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isFailed = true;
            console.log(err);
            if (err.error.error == "account_not_found") {
                this.emailValidator.setErrors({ notFound: true });
            }
            else if (err.error.error == "account_wrong_credentials") {
                this.emailValidator.setErrors({ wrongCredentials: true });
                this.passwordValidator.setErrors({ wrongCredentials: true });
            }
        });
    }
    reloadPage() {
        window.location.reload();
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 30, vars: 12, consts: [[1, "content-flex"], [1, "signin-card"], [1, "content-flex", "signform"], ["appearance", "outline", 2, "width", "100%"], ["type", "email", "matInput", "", "placeholder", "Ej: mail@mail.com", "required", "", 3, "formControl", "ngModel", "ngModelChange"], ["matSuffix", ""], [4, "ngIf"], ["type", "password", "matInput", "", "maxlength", "22", "required", "", 3, "formControl", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "signup-container"], ["mat-stroked-button", "", "color", "primary", 3, "routerLink"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Inicia sesi\u00F3n con tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_8_listener($event) { return ctx.loginData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SigninComponent_mat_error_11_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SigninComponent_mat_error_12_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SigninComponent_mat_error_13_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_17_listener($event) { return ctx.loginData.pass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SigninComponent_mat_error_20_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SigninComponent_mat_error_21_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SigninComponent_mat_error_22_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_23_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00BFTodav\u00EDa no tienes una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Crear nueva cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.emailValidator)("ngModel", ctx.loginData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailValidator.hasError("email") && !ctx.emailValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailValidator.hasError("notFound") && ctx.isFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.passwordValidator)("ngModel", ctx.loginData.pass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.passwordValidator.hasError("minlength") || ctx.passwordValidator.hasError("maxlength")) && !ctx.passwordValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordValidator.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordValidator.hasError("wrongCredentials") && ctx.isFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.emailValidator.valid || !ctx.passwordValidator.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/signup");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".content-flex[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.content-flex[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n\n.signin-card[_ngcontent-%COMP%]{\n    padding: 25px 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-width: 30%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n.signup-container[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\n\n.signform[_ngcontent-%COMP%]{\n    min-width: 150px;\n    max-width: 350px;\n    width: 100%;\n}\n\n.signform[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudC1mbGV4ID4gbWF0LWNhcmQsIGRpdiwgc3BhbiwgcCwgYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4uc2lnbmluLWNhcmR7XG4gICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnNpZ251cC1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNpZ25mb3Jte1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZ25mb3JtID4gbWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _services_auth_redirecters_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth-redirecters.service */ "Up9K");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/auth.interceptor */ "cJIb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/signin/signin.component */ "WnTk");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _components_error_errorpage_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/error/errorpage.component */ "rLg5");
/* harmony import */ var _components_error_errormodal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/error/errormodal.component */ "W4/r");
/* harmony import */ var _components_chat_chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/chat/chatlist/chatlist.component */ "1IgW");
/* harmony import */ var _components_modals_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/modals/confirmation/confirmation.component */ "lvXK");
/* harmony import */ var _components_chat_chatmodal_chatmodal_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/chat/chatmodal/chatmodal.component */ "HD49");
/* harmony import */ var _components_chat_chatdetail_chatdetail_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/chat/chatdetail/chatdetail.component */ "MDRG");
/* harmony import */ var _components_chat_message_message_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/chat/message/message.component */ "22Nl");
/* harmony import */ var _components_chat_message_messagemodal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/chat/message/messagemodal.component */ "/8Hy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ "fXoL");












































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({ providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_30__["AuthInterceptor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _services_auth_redirecters_service__WEBPACK_IMPORTED_MODULE_21__["AuthRedirectersService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__["TextFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_26__["NgxMatDatetimePickerModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_26__["NgxMatTimepickerModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_26__["NgxMatNativeDateModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_29__["SignupComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"],
        _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_32__["SigninComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_33__["ProfileComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_34__["ErrorComponent"],
        _components_error_errorpage_component__WEBPACK_IMPORTED_MODULE_35__["ErrorpageComponent"],
        _components_error_errormodal_component__WEBPACK_IMPORTED_MODULE_36__["ErrormodalComponent"],
        _components_chat_chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_37__["ChatlistComponent"],
        _components_modals_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_38__["ConfirmationComponent"],
        _components_chat_chatmodal_chatmodal_component__WEBPACK_IMPORTED_MODULE_39__["ChatmodalComponent"],
        _components_chat_chatdetail_chatdetail_component__WEBPACK_IMPORTED_MODULE_40__["ChatdetailComponent"],
        _components_chat_message_message_component__WEBPACK_IMPORTED_MODULE_41__["MessageComponent"],
        _components_chat_message_messagemodal_component__WEBPACK_IMPORTED_MODULE_42__["MessagemodalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__["TextFieldModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_26__["NgxMatDatetimePickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_26__["NgxMatTimepickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_26__["NgxMatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"]] }); })();


/***/ }),

/***/ "Zr0/":
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cJIb":
/*!*********************************************!*\
  !*** ./src/app/helpers/auth.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");



const TOKEN_HEADER_KEY = 'x-access-token';
class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function NavbarComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mis chats");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-menu", null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Mi cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_div_11_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.displayname, " ");
} }
function NavbarComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(breakpointObserver, tokenStorageService) {
        this.breakpointObserver = breakpointObserver;
        this.tokenStorageService = tokenStorageService;
        this.isLogged = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
        this.isLogged = !!this.tokenStorageService.getToken();
        if (this.isLogged) {
            const user = this.tokenStorageService.getUser();
            this.displayname = user.displayname;
        }
    }
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 3, consts: [["color", "primary", 1, "mat-elevation-z4"], [1, "center", 2, "padding", "10px"], [1, "logocontainer"], ["src", "/assets/images/whatsim_white.png", 1, "logoimage"], ["mat-button", "", "routerLink", "", 2, "font-size", "medium"], ["routerLink", "chats", "mat-button", "", "style", "font-size: medium;", 4, "ngIf"], [1, "spacer"], [4, "ngIf"], ["routerLink", "chats", "mat-button", "", 2, "font-size", "medium"], ["mat-button", "", "aria-label", "Cuenta", 2, "font-size", "medium", 3, "matMenuTriggerFor"], ["accountmenu", "matMenu"], ["mat-menu-item", "", "routerLink", "profile"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", "routerLink", "signin", 2, "font-size", "medium"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "WhatSim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavbarComponent_button_9_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NavbarComponent_div_11_Template, 11, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NavbarComponent_div_12_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLogged);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"]], styles: [".spacer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto;\n}\n.center[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n.logoimage[_ngcontent-%COMP%]{\n  object-fit: contain;\n  width: auto;\n  height : auto;\n  max-height: 100%;\n  margin: 15px;\n}\n.logocontainer[_ngcontent-%COMP%]{\n  display: contents;\n  max-height: 100%;\n  font-size:xx-large;\n}\n.accountcontainer[_ngcontent-%COMP%]{\n  align-self:stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dvaW1hZ2V7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQgOiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5sb2dvY29udGFpbmVye1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOnh4LWxhcmdlO1xufVxuXG4uYWNjb3VudGNvbnRhaW5lcntcbiAgYWxpZ24tc2VsZjpzdHJldGNoO1xufSJdfQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const AUTH_BASE_URL = 'http://whatsim.eltrueno.es:8080/api/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(data) {
        return this.http.post(AUTH_BASE_URL + 'signin', {
            email: data.email,
            pass: data.pass
        }, httpOptions);
    }
    register(user) {
        return this.http.post(AUTH_BASE_URL + 'signup', {
            email: user.email,
            displayname: user.displayname,
            pass: user.pass
        }, httpOptions);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lvXK":
/*!**************************************************************************!*\
  !*** ./src/app/components/modals/confirmation/confirmation.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function ConfirmationComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.description);
} }
function ConfirmationComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConfirmationComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ConfirmationComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["whatsim-confirm"]], decls: 9, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "confirm", "color", "warn", 4, "ngIf"], ["mat-raised-button", "", "mat-dialog-close", "confirm", "color", "warn", "aria-label", "Editar chat", 4, "ngIf"], ["mat-button", "", "mat-dialog-close", "cancel", "cdkFocusInitial", ""], ["mat-button", "", "mat-dialog-close", "confirm", "color", "warn"], ["mat-raised-button", "", "mat-dialog-close", "confirm", "color", "warn", "aria-label", "Editar chat"]], template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00BFEst\u00E1s seguro?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfirmationComponent_p_3_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConfirmationComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ConfirmationComponent_button_6_Template, 4, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.description != null && ctx.data.description != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.deletion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.deletion);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage.service */ "Zr0/");




const API_URL = 'http://whatsim.eltrueno.es:8080/api/profile/';
class UserService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.token = tokenStorage.getToken();
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'x-access-token': this.token.toString()
            }) };
    }
    getUserInfo() {
        return this.http.get(API_URL + 'userinfo', this.headers);
    }
    deleteAccount() {
        return this.http.delete(API_URL + 'delete', this.headers);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rLg5":
/*!*********************************************************!*\
  !*** ./src/app/components/error/errorpage.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorpageComponent.ɵfac = function ErrorpageComponent_Factory(t) { return new (t || ErrorpageComponent)(); };
ErrorpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorpageComponent, selectors: [["app-errorpage"]], decls: 10, vars: 0, consts: [["id", "outer"], [1, "animation-ctn"], [1, "icon", "icon--order-success", "svg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "154px", "height", "154px"], ["fill", "none", "stroke", "#F44812", "stroke-width", "2"], ["cx", "77", "cy", "77", "r", "72", 2, "stroke-dasharray", "480px, 480px", "stroke-dashoffset", "960px"], ["id", "colored", "fill", "#F44812", "cx", "77", "cy", "77", "r", "72", 2, "stroke-dasharray", "480px, 480px", "stroke-dashoffset", "960px"], ["stroke", "#fff", "stroke-width", "10", "points", "43.5,77.8  112.2,77.8 ", 1, "st0", 2, "stroke-dasharray", "100px, 100px", "stroke-dashoffset", "200px"], ["id", "error"]], template: function ErrorpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "polyline", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Error 404: No se pudo encontrar la p\u00E1gina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".animation-ctn[_ngcontent-%COMP%]{\n    text-align:center;\n    margin-top:5em;\n  }\n  \n      @keyframes checkmark {\n      0% {\n          stroke-dashoffset: 100px\n      }\n  \n      100% {\n          stroke-dashoffset: 0px\n      }\n  }\n  \n      @keyframes checkmark-circle {\n      0% {\n          stroke-dashoffset: 480px \n      }\n  \n      100% {\n          stroke-dashoffset: 960px\n      }\n  }\n  \n      @keyframes colored-circle { \n      0% {\n          opacity:0\n      }\n  \n      100% {\n          opacity:100\n      }\n  }\n  \n      \n  \n      \n  \n      .inlinesvg[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n      display: inline\n  }\n  \n      \n  \n      .icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n      animation: checkmark 0.25s ease-in-out 0.7s backwards\n  }\n  \n      .icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n      animation: checkmark-circle 0.6s ease-in-out backwards;\n  }\n  \n      .icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle#colored[_ngcontent-%COMP%] {\n      animation: colored-circle 0.6s ease-in-out 0.7s backwards;\n  }\n  \n      #outer[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n\toverflow:hidden;\n\tposition:relative;\n  }\n  \n      #error[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    text-align: center;\n    margin-top: 3%;\n    margin-bottom: 1%;\n    padding: 5%;\n    font-size: 20px;\n    color: white;\n    background-color: #F44812;\n    width: 40%;\n    border-radius: 50px;\n}\n  \n      .container[_ngcontent-%COMP%] {\n    width: 150px;\n    height: auto;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n    background-color: red;\n}\n  \n      .center[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50px;\n }\n  \n      body[_ngcontent-%COMP%] {\n    \n    background: linear-gradient(-45deg, #920fc5, #230b42, #920fc5, #ee1099);\n\tbackground-size: 400% 400%;\n\tanimation: gradient 10s ease infinite;\n}\n  \n      @keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O01Bc0JBO01BQ0k7VUFDSTtNQUNKOztNQUVBO1VBQ0k7TUFDSjtFQUNKOztNQXdCQTtNQUNJO1VBQ0k7TUFDSjs7TUFFQTtVQUNJO01BQ0o7RUFDSjs7TUFFQTtNQUNJO1VBQ0k7TUFDSjs7TUFFQTtVQUNJO01BQ0o7RUFDSjs7TUFFQSxpQkFBaUI7O01BQ2pCOzs7SUFHRTs7TUFDRjtNQUNJO0VBQ0o7O01BRUE7O0tBRUc7O01BRUg7TUFFSTtFQUNKOztNQUVBO01BRUksc0RBQXNEO0VBQzFEOztNQUNBO01BRUkseURBQXlEO0VBQzdEOztNQUVGO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtDQUNyQixlQUFlO0NBQ2YsaUJBQWlCO0VBQ2hCOztNQUdGO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7TUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztNQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0NBQ2Q7O01BR0Q7SUFDSSw2RUFBNkU7SUFDN0UsdUVBQXVFO0NBQzFFLDBCQUEwQjtDQUMxQixxQ0FBcUM7QUFDdEM7O01BRUE7Q0FDQztFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsNkJBQTZCO0NBQzlCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7QUFDRCIsImZpbGUiOiJlcnJvcnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmltYXRpb24tY3Rue1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbi10b3A6NWVtO1xuICB9XG4gIFxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGNoZWNrbWFyayB7XG4gICAgICAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMHB4XG4gICAgICB9XG4gIFxuICAgICAgMTAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMHB4XG4gICAgICB9XG4gIH1cbiAgXG4gIEAtbXMta2V5ZnJhbWVzIGNoZWNrbWFyayB7XG4gICAgICAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMHB4XG4gICAgICB9XG4gIFxuICAgICAgMTAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMHB4XG4gICAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcbiAgICAgIDAlIHtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwcHhcbiAgICAgIH1cbiAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4XG4gICAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjaGVja21hcmstY2lyY2xlIHtcbiAgICAgIDAlIHtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNDgwcHhcbiAgICAgXG4gICAgICB9XG4gIFxuICAgICAgMTAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDk2MHB4O1xuICAgICAgICBcbiAgICAgIH1cbiAgfVxuICBcbiAgQC1tcy1rZXlmcmFtZXMgY2hlY2ttYXJrLWNpcmNsZSB7XG4gICAgICAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI0MHB4XG4gICAgICB9XG4gIFxuICAgICAgMTAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4MHB4XG4gICAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrLWNpcmNsZSB7XG4gICAgICAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4MHB4IFxuICAgICAgfVxuICBcbiAgICAgIDEwMCUge1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA5NjBweFxuICAgICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGNvbG9yZWQtY2lyY2xlIHsgXG4gICAgICAwJSB7XG4gICAgICAgICAgb3BhY2l0eTowXG4gICAgICB9XG4gIFxuICAgICAgMTAwJSB7XG4gICAgICAgICAgb3BhY2l0eToxMDBcbiAgICAgIH1cbiAgfVxuICBcbiAgLyogb3RoZXIgc3R5bGVzICovXG4gIC8qIC5zdmcgc3ZnIHtcbiAgICAgIGRpc3BsYXk6IG5vbmVcbiAgfVxuICAgKi9cbiAgLmlubGluZXN2ZyAuc3ZnIHN2ZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgfVxuICBcbiAgLyogLnN2ZyBpbWcge1xuICAgICAgZGlzcGxheTogbm9uZVxuICB9ICovXG4gIFxuICAuaWNvbi0tb3JkZXItc3VjY2VzcyBzdmcgcG9seWxpbmUge1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrbWFyayAwLjI1cyBlYXNlLWluLW91dCAwLjdzIGJhY2t3YXJkcztcbiAgICAgIGFuaW1hdGlvbjogY2hlY2ttYXJrIDAuMjVzIGVhc2UtaW4tb3V0IDAuN3MgYmFja3dhcmRzXG4gIH1cbiAgXG4gIC5pY29uLS1vcmRlci1zdWNjZXNzIHN2ZyBjaXJjbGUge1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrbWFyay1jaXJjbGUgMC42cyBlYXNlLWluLW91dCBiYWNrd2FyZHM7XG4gICAgICBhbmltYXRpb246IGNoZWNrbWFyay1jaXJjbGUgMC42cyBlYXNlLWluLW91dCBiYWNrd2FyZHM7XG4gIH1cbiAgLmljb24tLW9yZGVyLXN1Y2Nlc3Mgc3ZnIGNpcmNsZSNjb2xvcmVkIHtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjb2xvcmVkLWNpcmNsZSAwLjZzIGVhc2UtaW4tb3V0IDAuN3MgYmFja3dhcmRzO1xuICAgICAgYW5pbWF0aW9uOiBjb2xvcmVkLWNpcmNsZSAwLjZzIGVhc2UtaW4tb3V0IDAuN3MgYmFja3dhcmRzO1xuICB9IFxuXG4jb3V0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0b3ZlcmZsb3c6aGlkZGVuO1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxuICBcblxuI2Vycm9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQ4MTI7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTBweDtcbiB9XG5cblxuYm9keSB7XG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzcwMGM5NywgIzMwMGU1YywgIzcwMGM5NywgIzMwMGU1Yyk7ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzkyMGZjNSwgIzIzMGI0MiwgIzkyMGZjNSwgI2VlMTA5OSk7XG5cdGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuXHRhbmltYXRpb246IGdyYWRpZW50IDEwcyBlYXNlIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcblx0MCUge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcblx0fVxuXHQ1MCUge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuXHR9XG5cdDEwMCUge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcblx0fVxufSJdfQ== */"] });


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage.service */ "Zr0/");




const API_URL = 'http://whatsim.eltrueno.es:8080/api/chat/';
class ChatService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.token = tokenStorage.getToken();
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'x-access-token': this.token.toString()
            }) };
    }
    getAll() {
        return this.http.get(API_URL, this.headers);
    }
    getDetail(id) {
        return this.http.get(API_URL + id + "/detailed", this.headers);
    }
    create(data) {
        return this.http.post(API_URL, data, this.headers);
    }
    delete(id) {
        return this.http.delete(API_URL + id, this.headers);
    }
    update(id, data) {
        return this.http.put(API_URL + id, data, this.headers);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage.service */ "Zr0/");




const API_URL = 'http://whatsim.eltrueno.es:8080/api/message/';
class MessageService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.token = tokenStorage.getToken();
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'x-access-token': this.token.toString()
            }) };
    }
    create(data) {
        return this.http.post(API_URL, data, this.headers);
    }
    delete(data) {
        return this.http.post(API_URL + "delete", data, this.headers);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_redirecters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-redirecters.service */ "Up9K");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signin/signin.component */ "WnTk");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_error_errorpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/error/errorpage.component */ "rLg5");
/* harmony import */ var _components_chat_chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat/chatlist/chatlist.component */ "1IgW");
/* harmony import */ var _components_chat_chatdetail_chatdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat/chatdetail/chatdetail.component */ "MDRG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











;
const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', redirectTo: '/' },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'signin', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_services_auth_redirecters_service__WEBPACK_IMPORTED_MODULE_1__["AuthRedirectersService"]] },
    { path: 'chats', component: _components_chat_chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_7__["ChatlistComponent"], canActivate: [_services_auth_redirecters_service__WEBPACK_IMPORTED_MODULE_1__["AuthRedirectersService"]] },
    { path: 'chats/:id', component: _components_chat_chatdetail_chatdetail_component__WEBPACK_IMPORTED_MODULE_8__["ChatdetailComponent"], canActivate: [_services_auth_redirecters_service__WEBPACK_IMPORTED_MODULE_1__["AuthRedirectersService"]] },
    { path: '404', component: _components_error_errorpage_component__WEBPACK_IMPORTED_MODULE_6__["ErrorpageComponent"] },
    { path: '**', redirectTo: '/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map